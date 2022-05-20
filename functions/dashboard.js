const functions = require("firebase-functions");
const admin = require("firebase-admin");
const _ = require('lodash');
const moment = require('moment');
const cors = require("cors")({ origin: '*' });
exports.dashboard = functions.https.onCall(async (data, context) => {
    try {
        const userId = context.auth.uid;
        const reports = await admin.firestore().collection('RapportsEvaluations').get();
        const visibility = {
            evaluationTotal: reports.size,
            impressionTotal: reports.size
        }
        let prospoectLenght = 0;
        let totalContacts = 0;
        let myLeads = [];
        let leads = [];
        reports.docs.forEach(item => {
            const data = item.data();
            leads.push(data);
            if(data.ouiContacterParProfessionnel=== "oui") {
                totalContacts++
            } else if(data.ouiContacterParProfessionnel=== "non") {
                prospoectLenght++
            }
            if(data.broker && data.broker[0] && data.broker[0].brokerId === userId) {
                myLeads.push(data);
            }
        })
        const myLineData = [
            myLeadSorted(myLeads, "2022/01/01", "2022/01/30").length,
            myLeadSorted(myLeads, "2022/02/01", "2022/02/28").length,
            myLeadSorted(myLeads, "2022/03/01", "2022/03/31").length,
        ];
        const lineData = [
            myLeadSorted(leads, "2022/01/01", "2022/01/30").length,
            myLeadSorted(leads, "2022/02/01", "2022/02/28").length,
            myLeadSorted(leads, "2022/03/01", "2022/03/31").length,
        ];
        return {
            visibility,
            prospoectLenght,
            totalContacts,
            myLineData,
            lineData,
            myContactsLength: myLeads.length,
            contacts: myLeads
        }
    } catch(e) {
        return {error: true, message: e.message};
    }
});

const myLeadSorted = (myLeads = [], initialDate, finalDate) => {
    const startDate = new Date(initialDate);
    const endDate = new Date(finalDate);

    const resultProductData = myLeads.filter((a) => {
        const date = new Date(a.dateCreation);
        return date >= startDate && date <= endDate;
    });

    return resultProductData;
};

exports.newleads = functions.https.onCall(async (data, context) => {
    try {
        /**
         * 1. Get User Id
         */
        if(!context.auth || !context.auth.uid) {
            return {error: true, message: 'User not connected'};
        }
        const userId = context.auth.uid;
        /**
         * 2. Get Request Body
         */
        const {
            city = 'Québec',
            municipalite = 'Pointe-de-Sainte-Foy',
            startDate = moment().subtract(31, 'days').format('YYYY-MM-DD'),
            endDate = moment().format('YYYY-MM-DD'),
            dateFilterType = '31days',
        } = data;
        /**
         * 3: Get All Data in last 30.
         */
        const list = [], evals = [], all = [], buyers = [], sellers = [], prospects = [];
        const snap = await admin.firestore().collection('RapportsEvaluations')
            .where('dateCreation', '>=', startDate)
            .where('dateCreation', '<=', endDate)
            .where('municipalite', '==', municipalite)
            .where('location.city', '==', city)
            .orderBy('dateCreation', 'desc').get();
        snap.forEach(item => {
            list.push({id: item.id, ...item.data()})
        });
        /**
         * 4. Save Default filters
         */
        await admin.firestore()
            .collection('newleads-default-filters')
            .doc(userId).set({city, municipalite, startDate, endDate, dateFilterType})
        return {
            data: list,
            filter: {
                city, municipalite
            }
        }
    } catch (e) {
        return {error: true, message: e.message}
    }
});

exports.createFilters = functions.https.onRequest(async(req, res) => {
    try {
        const cities = [
            "Québec",
            "Montréal",
            "Westmount",
            "Longueuil",
            "Saguenay",
            "Laval",
            "Côte Saint-Luc",
            "Saint-Philippe",
            "Prévost",
            "Terrebonne"
        ];
        const filters = []
        for(let i = 0; i < cities.length; i++) {
            const municipalities = [];
            const snap = await admin.firestore()
                .collection('RapportsEvaluations')
                .where('location.city','==', cities[i])
                .get();
            snap.forEach(item => {
                const d = item.data();
                if(d.municipalite && !municipalities.includes(d.municipalite)) {
                    municipalities.push(d.municipalite);
                }
            })
            await admin.firestore().collection('newleads-filters')
                .doc(cities[i]).set({city: cities[i], municipalities})
            filters.push({city: cities[i], municipalities});
        }
        res.status(200).json(filters);
    }catch(e) {
        res.status(500).json({messagge: e.message})
    }
})

exports.defaultFilters = functions.https.onCall(async (data, context) => {
    try {
        /**
         * 1. Get User Id:
         */
        if(!context.auth || !context.auth.uid) {
            return {error: true, message: 'User not connected'};
        }
        const userId = context.auth.uid;
        /**
         * 2. Get List Filters
         */
        const filtersSnap = await admin.firestore().collection('newleads-filters').get();
        const filters = {};
        filtersSnap.forEach(doc => filters[doc.id] = doc.data());
        /**
         * 3. Get User Filters
         */
        const defaultFiltersSnap = await admin.firestore().collection('newleads-default-filters')
            .doc(userId).get();
        let defaultFilters = {};
        if(defaultFiltersSnap.exists) {
            const data = defaultFiltersSnap.data();
            let startDate = data.startDate;
            let endDate = data.endDate;
            if(data.dateFilterType ===  '7days') {
                endDate =  moment().format('YYYY-MM-DD');
                startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
            } else if(data.dateFilterType === '31days') {
                endDate =  moment().format('YYYY-MM-DD');
                startDate = moment().subtract(31, 'days').format('YYYY-MM-DD');
            }
            defaultFilters = {id: defaultFiltersSnap.id, ...data, startDate, endDate};
        } else {
            defaultFilters = {
                id: userId,
                city: 'Québec',
                municipalite: 'Pointe-de-Sainte-Foy',
                startDate: moment().subtract(30, 'days').format('YYYY-MM-DD'),
                endDate: moment().format('YYYY-MM-DD'),
                dateFilterType: '31days',
            };
            await admin.firestore().collection('newleads-default-filters').doc(userId).set(defaultFilters);
        }
        return {filters, defaultFilters};
    }catch (e) {
        return {error: true, message: e.message};
    }
})


exports.createRapportsEvaluations = functions.firestore
.document('RapportsEvaluations/{userId}')
.onCreate(async (snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    console.log("trigger")
    /**
         * 1. Get Snap from data
         */
     console.log('trigger');
     const data = snap.data() || {};

     /**
      * 2. get cities & municipalities
      */
     const citiesSnap = await admin.firestore().collection('newleads-filters').get();
     const cities = [];
     citiesSnap.forEach(city =>  cities.push(city.data()));

     /**
      * 3. Add new city and municipality if not exists
      */
     if(data.location && data.location.city) {
         console.log('city', data.location.city);
         const findCity = cities.find(item => item.city === data.location.city);
         console.log('findCity', findCity);
         if(findCity) {
             const findMunicipality = findCity.municipalities.find(item => item === data.municipalite);
             console.log('findMunicipality', findMunicipality);
             if(!findMunicipality) {
                 findCity.municipalities.push(data.municipalite);
                 await admin.firestore().collection('newleads-filters').doc(findCity.city).set(findCity);
             }
         } else {
             const city = {city: data.location.city, municipalities: [data.municipalite || '']};
             await admin.firestore().collection('newleads-filters').doc(city.city).set(city);
         }
     }
});
