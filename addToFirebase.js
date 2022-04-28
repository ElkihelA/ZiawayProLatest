const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAOCVTtZGlQwmr2twpJ2O1MBZglCDNKVgo",
    authDomain: "ziaapp-ac0eb.firebaseapp.com",
    projectId: "ziaapp-ac0eb"
  });
  
var db = firebase.firestore();

var menu =[  
    {  
       "permis":"G2380",
       "nom":"Reine st-Onge",
       "description":"",
       "proprietes": [
           
        {
           "url" : "https://www.remax-quebec.com/fr/maison-a-vendre-chaudiere-appalaches/4-rue-cecyre-beaumont-10514625.rmx",
           "type":" Maison de plain-pied",
           "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m10514625-pri01-01.jpg",
           "ville":"Beaumont",
           "adresse":"4 Rue Cecyr" ,
           "prix_demande":"549 000 $",
           "chambres":3,
           "salleBain":2
        },
        {
            "url" : "https://remax-avantages.com/fr/nos-proprietes/levis-desjardins/712-rue-st-onesime/12386379",
            "type":"Maison de Plain-Pied",
            "imageUrl":"//mediaserver.centris.ca/media.ashx?id=ADD2FC3D2B118ADDD93DDC9D1E&t=pi&w=640&h=480",
            "ville":"Lévis (DesJardins)",
            "adresse":"712 Rue St-Onésime" ,
            "prix_demande":"235 000 $",
            "chambres":3,
            "salleBain":1
         },
       

         {
            "url" : "https://www.remax-quebec.com/fr/maison-a-vendre-chaudiere-appalaches/35-rue-giraud-desjardins-levis-levis-9075556.rmx",
            "type":"Maison à étages",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m9075556-pri01-01.jpg",
            "ville":"DESJARDINS (LÉVIS) ",
            "adresse":"35 RUE GIRAUD" ,
            "prix_demande":"245 000 $",
            "chambres":4,
            "salleBain":2
         },
         {
            "url" : "https://remax-avantages.com/fr/nos-proprietes/la-durantaye/110-rue-des-bouleaux/11509007",
            "type":"Appartement",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m9522298-pri01-01.jpg",
            "ville":"DESJARDINS (LÉVIS)",
            "adresse":"110 Rue des Bouleaux" ,
            "prix_demande":"145 000$",
            "chambres":1,
            "salleBain":1
         },
         {
            "url" : "https://www.remax-quebec.com/fr/maison-a-vendre-chaudiere-appalaches/1828-ch-du-fleuve-st-romuald-22617431.rmx",
            "type":"Maison à étages",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m22617431-pri01-01.jpg",
            "ville":"Saint-Romuald",
            "adresse":"1828 Ch. du Fleuve" ,
            "prix_demande":"350 000$",
            "chambres":2,
            "salleBain":1
         },
         {
            "url" : "https://www.remax-quebec.com/fr/maison-a-vendre-chaudiere-appalaches/20-rue-demers-st-henri-22364846.rmx",
            "type":"Maison de plain-pied",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m22364846-pri01-01.jpg",
            "ville":"Saint-Henri",
            "adresse":"20 Rue Demers" ,
            "prix_demande":"219 600$",
            "chambres":2,
            "salleBain":1
         },
    
    
    ],
        "proprietesVendus": [
         {
            "url" :"https://remax-avantages.com/fr/nos-proprietes/levis-desjardins/3929-rue-des-sureaux/23007980",
            "type":"Maison Mobile",
            "imageUrl":"//mediaserver.centris.ca/media.ashx?id=ADD2FC3D2BCFE44D1E61457D12&t=pi&w=640&h=480",
            "ville":"Lévis (DesJardins)",
            "adresse":"3929 Rue des Sureaux" ,
            "prix_demande":"",
            "chambres":2,
            "salleBain":1
         },
         {
            "url" : "https://media.remax-quebec.com/img/resultats/0331/m17093935-pri01-01.jpg",
            "type":"Maison de plain-pied",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m21908102-pri01-01.jpg",
            "ville":"Charny",
            "adresse":"6721 Rue des Myosotis" ,
            "prix_demande":"",
            "chambres":2,
            "salleBain":1
         },
         {
            "url" : "https://remax-avantages.com/fr/nos-proprietes/saint-joseph-de-beauce/126-cote-taschereau/13902398",
            "type":"Maison de plain-pied",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m21091571-pri01-01.jpg",
            "ville":"St-Romuald (Les Chutes-de-la-Chaudière-Ouest)",
            "adresse":"579 Rue de la Falaise" ,
            "prix_demande":"",
            "chambres":3,
            "salleBain":2
         },
         {
            "url" : "https://www.remax-quebec.com/fr/condo-a-vendre/1220-rue-de-saturne-st-romuald-23108348.rmx",
            "type":"Maison de plain-pied",
            "imageUrl":"https://media.remax-quebec.com/img/resultats/0331/m23108348-pri01-01.jpg",
            "ville":"St-Romuald (Les Chutes-de-la-Chaudière-Ouest)",
            "adresse":"Saint-Romuald" ,
            "prix_demande":"",
            "chambres":2,
            "salleBain":1
         }
         
        
        ],

     
    }
 ]

menu.forEach(function(obj) {
    db.collection("courtiersMembres").add(
    obj
    ).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});