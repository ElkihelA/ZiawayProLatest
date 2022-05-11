const functions = require("firebase-functions");
const admin = require("firebase-admin");
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
