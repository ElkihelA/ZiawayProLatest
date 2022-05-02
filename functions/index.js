const functions = require("firebase-functions");


// const { PubSub } = require("@google-cloud/pubsub");
var request = require("request");
var cheerio = require("cheerio");
var querystring = require("querystring");
const automl = require("@google-cloud/automl");
const service_account = require("google-oauth2");
const configZiaway = require("./config/Ziaway-6d648b9e1446.json");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;
// require("firebase/auth");
const cors = require("cors")({ origin: true });

const admin = require("firebase-admin");
const serviceAccount = require("./config/serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ziaapp-ac0eb.firebaseio.com"
});
const db = admin.firestore();

const axios = require("axios");
// const pubSubClient = new PubSub();

//credentials = service_account.Credentials.from_service_account_file("./config/Ziaway-6d648b9e1446.json")
const client = new automl.v1beta1.PredictionServiceClient({});

const projectId = "ziaway-dev";
const computeRegion = "us-central1";
const modelId = "TBL4516675019648008192";

const algoliasearch = require("algoliasearch");
// const { getAuthStatus } = require("app/services/AuthService");

const clientSearch = algoliasearch(
  "6TMPCBAKTO",
  "a52238414f9363e6a1299609b9de92f0"
);
const index = clientSearch.initIndex("historique");

const subscriptions = require("./subscription");
/**
 * Webhook stuff
 */
const webhooks = require("./webhooks");

module.exports = {
  ...subscriptions,
  ...webhooks
};

function EvaluerCoproprietes(evalData) {
  const valeursForm = req.body.evalData;
  const valeurs = req.body.values;

  console.log("values form evaluer proprietes", valeursForm);

  const modelFullId = client.modelPath(projectId, computeRegion, modelId);

  const column = [
    "8276457229851295744", //année de construction
    "494237073755078656", // Evaluation municipale
    "8852917982154719232", //Genre proprietes
    "1935388954513637376", //municipalite
    "782467449906790400", //Nbr de chambres
    "5105923092182466560", // nbr de pieces
    "3088310459120484352", // salle de bains
    "3664771211423907840", // Stationnements
    "4241231963727331328", // superficie terrain
    "6547074972941025280", // Taxes municipales
    "5394153468334178304",
  ];

  const payload = {};
  payload.row = {
    columnSpecIds: column,
    values: valeursForm,
  };
  const request = {
    name: modelFullId,
    payload: payload,
  };
  client
    .predict(request)
    .then((responses) => {
      console.log(`Prediction results evaluer coprop:`, responses);
      const response = responses[0];

      return res.send(response);
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
}

let transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "services@ziaway.com",
    // pass: "hplmfkmyuevhdiue",
    pass: " Immobilier2022$",
  },
});

/**
 * Get Subscription Plans
 */
exports.GetSubscriptionPlans = functions.https.onCall(async (data, context) => {
  try {
    const prices = await stripe.prices.list({
      // product : 'prod_L78QklYS9iZJkf',
      product: "prod_L39ru7kzzcVM5T",
      active: true,
    });
    console.log("plans", prices.data);
    return prices.data;
  } catch (error) {
    console.log(error);
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.CreateCheckoutSession = functions.https.onCall(
  async (data, context) => {
    try {
      const dbObj = await db.collection("users").doc(data.uId);
      var user = await dbObj.get();
      var userData = user.data();
      var session;
      if ("customerId" in userData) {
        session = await stripe.checkout.sessions.create({
          success_url: "http://localhost:3000/dashboard/v0",
          cancel_url: "http://localhost:3000/dashboard/v0",
          line_items: [
            {
              price: req.price,
              quantity: 1,
            },
          ],
          mode: "subscription",
          customer: userData.customerId,
          client_reference_id: userData.customerId,
          allow_promotion_codes: true,
          payment_method_types: ["card"],
        });
      } else {
        const customer = await stripe.customers.create({
          email: userData.email,
        });
        dbObj.update({ customerId: customer.id });
        session = await stripe.checkout.sessions.create({
          success_url: "http://localhost:3000/dashboard/v0",
          cancel_url: "http://localhost:3000/dashboard/v0",
          line_items: [
            {
              price: data.price,
              quantity: 1,
            },
          ],
          mode: "subscription",
          customer: customer.id,
          allow_promotion_codes: true,
          payment_method_types: ["card"],
        });
      }

      dbObj.update({ lastSessionID: session.id });
      console.log("Session Obj", session.url);

      return { url: session.url };
    } catch (error) {
      console.log(error);
      throw new functions.https.HttpsError("failed to connect" + error.message);
    }
  }
);

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.body.email;
    // const dest = "shahzad.ftw45@gmail.com";

    const mailOptions = {
      from: "services@ziaway.com", // Something like: Jane Doe <janedoe@gmail.com>
      to: dest,
      subject: "Estimation immobiliere en ligne et gratuite", // email subject
      html: `  <div
      bgcolor="#FFFFFF"
      topmargin="0"
      leftmargin="0"
      marginheight="0"
      marginwidth="0"
      style="
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        width: 100% !important;
        height: 100%;
      "
    >
      <!-- BODY -->
      <table
        class="body-wrap"
        style="width: 100%; font-family: system-ui"
        bgcolor=""
      >
        <tr>
          <td></td>
          <td
            class="container"
            align=""
            bgcolor="#FFFFFF"
            style="
              padding: 15px;
              max-width: 700px;
              margin: 0 auto;
              display: block;
              background: #ebebeb5e;
            "
          >
            <!-- content -->
            <div
              style="
                padding:5px 15px;
                max-width: 700px;
                margin: 0 auto;
                display: block;
              "
            >
              <table style="width: 100%">
                <tr>
                  <td align="center">
                   
  
                    <!-- A Real Hero (and a real human being) -->
                    <p
                      style="
                        margin-bottom: 6px;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      <img height="120px" src="https://i.ibb.co/pr0ptZQ/logo-2.png" />
                    </p>
                    <!-- /hero -->
                    <h3 style="color: #663695">Hello ${req.body.name}</h3>
                    <h3 style="color: #663695">
                    Estimation immobiliere en ligne et gratuite
                    </h3>
                    <h4 style="color: #9b4545; text-decoration: underline">
                    <a
                    href="https://ziaway.ca/vmz/${req.body.id}"
                    target="_blank"
                    >
                      ${req.body.Adresse}
                    </a>
                    </h4>
                  </td>
                </tr>
              </table>
            </div>
            <!-- /content -->
  
            <!-- content-rate -->
            <div
              style="
                padding: 15px 0;
                max-width: 700px;
                margin: 0 auto;
                display: block;
                margin-bottom: 15px;
              "
            >
              <table
                style="
                  width: 100%;
                  border: 1px solid #c8c4c4;
                  box-shadow: 0 0 12px #c8c4c4;
                "
              >
                <tr>
                  <td
                    colspan="3"
                    style="padding: 15px; background-color: #f0eeee"
                  >
                  1 - La valeur marchande
                  </td>
                </tr>
                <tr style="padding: 15px">
                  <td
                    align="center"
                    width="20%"
                    style="vertical-align: top; padding: 15px 0 10px"
                  >
                    <p
                      style="
                        margin-bottom: 6px;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      <span>Estimation basse</span>
                    </p>
                    <h5 style="color: #e01313">
                      <span>$${req.body.VMZ_mini.toFixed(0)}</span>
                    </h5>
                  </td>
                  <td style="padding: 15px" align="center">
                    <p
                      style="
                        margin-bottom: 6px;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      <span>Valeur marchande Ziaway </span>
                    </p>
                    <h3 style="color: #663695">
                      <span>$${req.body.VMZ.toFixed(0)}</span>
                    </h3>
                    <span>Calculée selon les ventes  </span>
                    <span>comparables dans le secteur</span>
                  </td>
                  <td
                    style="padding: 15px"
                    align="center"
                    width="20%"
                    style="vertical-align: top; padding-left: 10px"
                  >
                    <p
                      style="
                        margin-bottom: 6px;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      <span>Estimation haute</span>
                    </p>
                    <h5 style="color: #2abb2a">
                      <span>$${req.body.VMZ_maxi.toFixed(0)}</span>
                    </h5>
                  </td>
                </tr>
              </table>
            </div>
            <!-- /content-rate -->
  
            <!-- Main-of-Cards -->
            <div style="border: 1px solid #c8c4c4; box-shadow: 0 0 12px #c8c4c4">
              <!-- Title-card -->
              <div
                style="
                  padding: 0;
                  max-width: 700px;
                  margin: 0 auto;
                  display: block;
                "
              >
                <table style="width: 100%">
                  <tr>
                    <td
                      colspan="3"
                      style="padding: 15px; background-color: #f0eeee"
                    >
                      2- Courtiers ayant vendus des biens comparables sur les 12 derniers mois
                    </td>
                  </tr>
                </table>
              </div>
              ${
                req.body.courtiers &&
                req.body.courtiers.map(
                  (v) => `<div
              style="
                padding: 15px 15px 0;
                max-width: 700px;
                margin: 0 auto;
                display: block;
              "
            >
              <table
                style="
                  border: 1px solid #c8c4c4;
                  background: #d3d2d2;
                  background-image: linear-gradient(
                    to top right,
                    #a8a7a7,
                    #bdbcbd,
                    #ffffff,
                    #ffffff,
                    #ffffff
                  );
                  padding: 15px;
                  width: 100%;
                "
              >
                <tr>
                  <td
                    class="small"
                    width="20%"
                    style="vertical-align: top; padding-right: 10px"
                  >
                    <img
                      style="
                        border-radius: 50%;
                        height: 80px;
                        width: 80px;
                        box-shadow: 0 0 3px #d1d0d0;
                      "
                      src=${v.Photo}
                    />
                  </td>
                  <td>
                    <div
                      style="
                        color: #663695;
                        font-size: 18px;
                        font-weight: 600;
                        text-transform: capitalize;
                        margin-bottom: 6px;
                      "
                    >
                    ${v.nomCourtier}
                    </div>
                    <p
                      style="
                        margin-bottom: 2px;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      <span style="margin-right: 8px">Agence :</span>
                      <span> ${v.agenceCourtier}</span>
                    </p>
                    <p style="color: #2abb2a">
                      <span> ${v.nbVentesComp} bien(s) vendu(s) comparable(s) à vos recherches</span>
                    </p>
                    <p
                      style="
                        margin-bottom: 2px;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 1.6;
                      "
                    >
                      <span style="margin-right: 8px"></span>
                      <span> total des ventes : ${v.nbVentesTotal}/ 12 derniers mois </span>
                    </p>
                  </td>
                  <td
                    class="small"
                    width="20%"
                    style="vertical-align: bottom; padding-left: 10px"
                  >
                    <img
                      style="height: 90px; width: 90px; object-fit: contain"
                      src=${v.logoAgence}
                    />
                  </td>
                </tr>
              </table>
            </div>`
                )
              }
             
            </div>
            <!-- /Main-of-Cards -->
          </td>
  
          <td></td>
        </tr>
      </table>
      <!-- /BODY -->
  
      <!-- FOOTER -->
  
      <div
        style="padding: 15px; max-width: 700px; margin: 0 auto; display: block"
      >
        <table style="width: 100%; font-family: system-ui">
          <tr>
            <td align="center">
              <!-- /hero -->
  
              <h4 style="color: #4358e6; text-decoration: underline; width: 185px;">
              <a
                  href="https://ziaway.ca/"
                  target="_blank"  
               >Decouvrez votre espace personnel </a>
              </h4>
              <h5 style="width: 185px;">Vous y trouverez:</h5>
              <h5 style="width: 185px;">
              Liste des propriétés comparables récemment vendues
              </h5>
              <h5 style="width: 185px;">
              Vidéos de formation
              </h5>
              <h5 style="width: 185px;">
              Et plus
              </h5>
              <div>
                <a
                  href="https://ziaway.ca/"
                  target="_blank"
                  style="
                    text-decoration: none;
                    color: #fff;
                    background-color: #663695;
                    padding: 10px 16px;
                    font-weight: bold;
                    text-align: center;
                    cursor: pointer;
                    display: inline-block;
                  "
                  >Accédez à mon compte</a
                >
              </div>
            </td>
          </tr>
        </table>
      </div>
  
      <!-- /FOOTER -->
    </div>
          `, // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended");
    });
  });
});

const generateToken = () => {
  return new AccessToken(
    "AC1286b4b8c0405ef81b5e8abf6c173607",
    "SK5bf169b9994d145ad48221f8efa53a8b",
    "Dhbo4iB4veDrhO2NwPeUlzGRAQQS1tOI"
  );
};

const videoToken = (identity, room) => {
  let videoGrant;
  if (typeof room !== "undefined") {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken();
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};

exports.GetToken = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room);
    res.set("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        token: token.toJwt(),
      })
    );
  });
});

exports.GetAllBrokers = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    return axios
      .get(
        "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/get-brokers-list"
      )
      .then((response) => {
        return res.status(200).send(response.data);
      })
      .catch((error) => {
        // console.log(error);
        return null;
      });
  });
});

// exports.checkEmail = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     const data = req.body.email;

//     return getAuth()
//       .getUserByEmail(data)
//       .then((user) => {
//         if (user) {
//           return res.send({ user });
//         } else {
//           return res.send({ error: "user not found" });
//         }

//         // See the UserRecord reference doc for the contents of userRecord.
//       })
//       .catch((error) => {
//         return res.send("error", error);
//       });
//   });
// });

// exports.checkEmail = functions.https.onCall(async (data, context) => {
//   try {
//     const response = await admin
//       .auth()
//       .getUserByEmail(data.data.email)
//       .then((user) => {
//         console.log(`Successfully fetched user data: ${user.toJSON()}`);
//         return user;
//         // See the UserRecord reference doc for the contents of userRecord.
//       })
//       .catch((error) => {
//         return "error in check email", error;
//       });
//     return JSON.stringify(response);
//   } catch (error) {
//     console.log(error);
//     throw new functions.https.HttpsError("failed to connect" + error);
//   }
// });

exports.searchHistory = functions.https.onCall(async (data, context) => {
  try {
    console.log("DATA", data);
    let hits = await index.search(data.adresseQuery);

    return hits;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.ObtenirComparables = functions.https.onCall(async (data, context) => {
  try {
    console.log("data", data);
    const comparables = await axios.get(
      "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/comparables ",
      data.rapport
    );
    console.log("comparables", data);

    return comparables;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});
exports.secret = functions.https.onCall(async (data, context) => {
  try {
    /*   const paiementIntent= await   stripe.paymentIntents.create({
                 amount: 1000,
                 currency: 'cad',
                 // Verify your integration in this guide by including this paramete
             })
     */
    const customer = await stripe.customers.create({
      email: data.email,
      payment_method: data.PaiementMethod.id,
      invoice_settings: {
        default_payment_method: data.PaiementMethod.id,
      },
    });

    return customer.id;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.MethodesPaiements = functions.https.onCall(async (data, context) => {
  try {
    // List the customer's payment methods to find one to charge
    console.log("data", data);
    const paymentMethods = await stripe.paymentMethods.list({
      customer: data.customerId,
      type: "card",
    });
    console.log("paymentMethods", paymentMethods);
    return paymentMethods;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.updateAbonnement = functions.https.onCall(async (data, context) => {
  try {
    const newSubscription = await stripe.subscriptions.create({
      customer: data.customerId,
      default_payment_method: data.paymentMethodId,
      items: [
        {
          plan: data.planId,
        },
      ],
      expand: ["latest_invoice.payment_intent"],
    });

    const oldSubscription = await stripe.subscriptions.update(
      data.oldSubscriptionId,
      { cancel_at_period_end: true }
    );

    const abonnements = await stripe.subscriptions.list({
      customer: data.customerId,
    });

    return abonnements;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.AnnulerAbonnement = functions.https.onCall(async (data, context) => {
  try {
    const oldSubscription = await stripe.subscriptions.update(
      data.oldSubscriptionId,
      { cancel_at_period_end: true }
    );

    const abonnements = await stripe.subscriptions.list({
      customer: data.customerId,
    });

    return abonnements;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.MajMethodePaiement = functions.https.onCall(async (data, context) => {
  try {
    // List the customer's payment methods to find one to charge

    //  const paymentMethods = await stripe.customers.update(data.customerId, {
    //  source: data.card,
    //});

    //console.log("detach", oldpaymentMethod);
    const paymentMethod = await stripe.paymentMethods.attach(
      data.newPaymentMethod.id,
      { customer: data.customerId }
    );
    /*
    const oldpaymentMethod = await stripe.paymentMethods.detach(
      data.oldPaymentMethod.id
    );
*/
    const subscription = await stripe.subscriptions.update(
      data.subscriptionId,
      { default_payment_method: data.newPaymentMethod.id }
    );

    if (data.oldPaymentMethod) {
      const oldpaymentMethod = await stripe.paymentMethods.detach(
        data.oldPaymentMethod.id
      );
    }

    console.log("subscription", paymentMethod);
    return paymentMethod;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});
exports.AjouterMethodePaiement = functions.https.onCall(
  async (data, context) => {
    try {
      // List the customer's payment methods to find one to charge
      console.log("data", data);

      const paymentMethod = await stripe.paymentMethods.attach(
        data.paymentMethod.id,
        { customer: data.customerId }
      );

      console.log("paymentMethods", paymentMethod);
      return paymentMethod;
    } catch (error) {
      throw new functions.https.HttpsError("failed to connect" + error.message);
    }
  }
);

exports.ObtenirAbonnements = functions.https.onCall(async (data, context) => {
  try {
    // List the customer's payment methods to find one to charge
    console.log("data", data);
    const abonnements = await stripe.subscriptions.list({
      customer: data.customerId,
    });
    console.log("subscriptions", abonnements);
    return abonnements;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.ObtenirFactures = functions.https.onCall(async (data, context) => {
  try {
    // List the customer's payment methods to find one to charge
    console.log("data", data);
    const invoices = await stripe.invoices.list({
      customer: data.customerId,
    });
    console.log("inovices", invoices);
    return invoices;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.CreerAbonnement = functions.https.onCall(async (data, context) => {
  try {
    console.log("customerID", data.customerId);
    console.log("data", data);
    const subscription = await stripe.subscriptions.create({
      customer: data.customerId,
      items: [
        {
          plan: data.planId,
        },
      ],
      expand: ["latest_invoice.payment_intent"],
    });

    return subscription;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.Obtenir2 = functions.https.onCall((data, context) => {
  try {
    //const $ =await  cheerio.load('https://www.oaciq.com/cgi-bin/WebObjects/RegistrePlus.woa/wa/chercher?langue=French&nomCourtier=Chalifour,%20Denis');
    let infoOaciq;
    let name = data.nom;
    let encodedName = encodeURIComponent(name);
    console.log("encoded url", encodedName);
    return axios
      .get(
        "https://www.oaciq.com/cgi-bin/WebObjects/RegistrePlus.woa/wa/chercher?langue=French&nomCourtier=" +
          encodedName,
        { crossdomain: true }
      )
      .then((resultLien) => {
        const body = cheerio.load(resultLien.data);
        const lienFiche = body(".lienFiche").attr("href");
        console.log("lien de la fiche", body(".lienFiche").attr("href"));
        const url = "https://www.oaciq.com" + lienFiche;

        return axios.get(url, { crossdomain: true });
      })
      .then((resp) => {
        console.log("la reponse html", resp.data);
        const body2 = cheerio.load(resp.data);
        const image = body2(".photo-titulaire").attr("src");
        const numPermis = body2(".section-dl")
          .eq(2)
          .find(":nth-child(2)")
          .text();
        const statut = body2(".section-dl")
          .eq(2)
          .find(":nth-child(4)")
          .first()
          .text();
        const avis = body2(".section-dl")
          .eq(2)
          .find(":nth-child(6)")
          .first()
          .text()
          .trim();
        const expertise = body2(".section-dl")
          .eq(3)
          .find(":nth-child(2)")
          .first()
          .text()
          .trim();
        const categorie = body2(".section-dl")
          .eq(3)
          .find(":nth-child(4)")
          .first()
          .text()
          .trim();
        const mode = body2(".section-dl")
          .eq(3)
          .find(":nth-child(6)")
          .first()
          .text()
          .trim();

        const data = {
          image: image,
          numPermis: numPermis,
          statut: statut,
          avis: avis,
          expertise: expertise,
          categorie: categorie,
          mode: mode,
        };
        console.log("les data envoyés", data);

        return data;
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
});

exports.ObtenirInfoCourtier = functions.https.onCall(async (data, context) => {
  try {
    //const $ =await  cheerio.load('https://www.oaciq.com/cgi-bin/WebObjects/RegistrePlus.woa/wa/chercher?langue=French&nomCourtier=Chalifour,%20Denis');
    let infoOaciq;
    let name = data.nom;
    let encodedName = encodeURIComponent(name);
    console.log("encoded url", encodedName);
    const resultLien = await axios.get(
      "https://www.oaciq.com/cgi-bin/WebObjects/RegistrePlus.woa/wa/chercher?langue=French&nomCourtier=" +
        encodedName,
      { crossdomain: true }
    );

    const body = cheerio.load(resultLien.data);
    const lienFiche = body(".lienFiche").attr("href");
    console.log("lien de la fiche", body(".lienFiche").attr("href"));
    const url = "https://www.oaciq.com" + lienFiche;
    const id = setInfoCourtier(url);
    return id;
  } catch (error) {
    return error;
  }
});

async function setInfoCourtier(url) {
  return axios
    .get(url, { crossdomain: true })
    .then((resp) => {
      const body2 = cheerio.load(resp.data);

      const image = body2(".photo-titulaire").attr("src");
      console.log("image", image);
      const numPermis = body2(".section-dl").eq(2).find(":nth-child(2)").text();
      console.log("permis", numPermis);
      const statut = body2(".section-dl")
        .eq(2)
        .find(":nth-child(4)")
        .first()
        .text();
      console.log("statut", statut);
      const expertise = body2(".section-dl")
        .eq(3)
        .find(":nth-child(2)")
        .first()
        .text()
        .trim();
      const avis = body2(".section-dl")
        .eq(2)
        .find(":nth-child(6)")
        .first()
        .text()
        .trim();
      console.log("expertise", expertise);
      const categorie = body2(".section-dl")
        .eq(3)
        .find(":nth-child(4)")
        .first()
        .text()
        .trim();
      console.log("categorie", categorie);
      const mode = body2(".section-dl")
        .eq(3)
        .find(":nth-child(6)")
        .first()
        .text()
        .trim();
      console.log("mode", mode);

      console.log("info", {
        image: image,
        numPermis: numPermis,
        statut: statut,
        avis: avis,
        expertise: expertise,
        categorie: categorie,
        mode: mode,
      });
      const info = {
        numPermis: numPermis,
        image: image,
        statut: statut,
        avis: avis,
        expertise: expertise,
        categorie: categorie,
        mode: mode,
        urlFiche: url,
      };
      return info;
    })
    .catch((error) => {
      return error;
    });
}

exports.ObtenirCourtiersRecommandes = functions.https.onCall(
  async (data, context) => {
    try {
      console.log("data recommandations", data);

      const district = await axios.post(
        "https://us-central1-ziaway-dev.cloudfunctions.net/get_district",
        { codePostal: data.location.postcode }
      );
      console.log("district", district.data[0]);
      let municipalite;
      if (district.data) {
        municipalite = district.data[0].municipalite;
      }
      const infosbien = {
        nbCourtier: 4,
        municipalite: municipalite,
        genreProprietes: data.genreProprietes,
        typeBatiment: data.typeBatiment,
        categorie: data.categorie,
        prixZia: data.prixZia,
      };
      console.log("infobien", infosbien);
      const broker_recommand = await axios.post(
        `https://us-central1-ziaapp-ac0eb.cloudfunctions.net/broker_recommend`,
        infosbien
      );

      const courtiersRecommandes = JSON.parse(
        JSON.stringify(broker_recommand.data)
      );
      const resUpdateRapport = await db
        .collection("RapportsEvaluations")
        .doc(data.idRapport)
        .update({ courtiers: courtiersRecommandes });

      await db
        .collection("users")
        .doc(context.auth.uid)
        .update({ recommandations: courtiersRecommandes });

      console.log("broker recommand", broker_recommand);
      return broker_recommand.data;
    } catch (error) {
      throw new functions.https.HttpsError("failed to connect" + error.message);
    }
  }
);

exports.EvaluerBien = functions.https.onCall(async (data, context) => {
  try {
    console.log("Type de bien en evaluation:", data.infobien, context);
    let categorie;

    const district = await axios.post(
      "https://us-central1-ziaway-dev.cloudfunctions.net/get_district",
      { codePostal: data.infobien.location.postcode }
    );
    console.log("district", district.data[0]);
    let municipalite;
    if (district.data) {
      municipalite = district.data[0].municipalite;
    }

    switch (data.infobien.type) {
      case "condo":
        categorie = "COP";
        break;
      case "Unifamiliale":
        categorie = "UNI";
        break;
      default:
        categorie = "";
    }

    const evalData = [
      { stringValue: data.infobien.anneeConstruction },
      { numberValue: data.infobien.evaluationMunicipale },
      { stringValue: data.infobien.genreProprietes },
      { stringValue: municipalite },
      { numberValue: data.infobien.chambres },
      { numberValue: data.infobien.pieces },
      { numberValue: data.infobien.bains },
      { numberValue: data.infobien.stationnement },
      { numberValue: data.infobien.superficie },
      { numberValue: data.infobien.taxesMunicipale },
      { stringValue: data.infobien.typeBatiment },
    ];

    const evalcoprop = [
      { stringValue: data.infobien.anneeConstruction },
      { numberValue: data.infobien.evaluationMunicipale },
      { stringValue: data.infobien.genreProprietes },
      { stringValue: municipalite },
      { numberValue: data.infobien.chambres },
      { numberValue: data.infobien.pieces },
      { numberValue: data.infobien.bains },
      { numberValue: data.infobien.stationnement },
      { numberValue: data.infobien.superficie },
      { numberValue: data.infobien.taxesMunicipale },
    ];
    console.log("Données d évaluation Coprops", evalcoprop);
    const compareData = {
      nbComparable: 3,
      municipalite: municipalite,
      genreProprietes: data.infobien.genreProprietes,
      typeBatiment: data.infobien.typeBatiment,
      taxesMunicipale: data.infobien.taxesMunicipale,
      salleBains: data.infobien.bains,
      superficieTerrain: data.infobien.superficie,
      evalMunicTot: data.infobien.evaluationMunicipale,
      nbrChambres: data.infobien.chambres,
      anneeConstruction: data.infobien.anneeConstruction,
      stationnements: data.infobien.stationnement,
      nbrPieces: data.infobien.pieces,
      categorie: categorie,
    };
    console.log("Données comparables", compareData);

    const formValue = {
      evaluationMunicipale: data.infobien.evaluationMunicipale,
      genreProprietes: data.infobien.genreProprietes,
      typeBatiment: data.infobien.typeBatiment,
      region: data.infobien.region,
      pieces: data.infobien.pieces,
      chambres: data.infobien.chambres,
      bains: data.infobien.bains,
      location: data.infobien.location,
      municipalite: municipalite,
      garages: data.infobien.garages,
      stationnement: data.infobien.stationnement,
      pool: data.infobien.pool,
      taxesMunicipale: data.infobien.taxesMunicipale,
      anneeConstruction: data.infobien.anneeConstruction,
      standing: data.infobien.standing,
      typeVue: data.infobien.typeVue,
      nom: data.infobien.nom,
      prenom: data.infobien.prenom,
      email: data.infobien.email,
      telephone: data.infobien.telephone,
      proprietaire: data.infobien.proprietaire,
      superficieTerrain: data.infobien.superficie,
      raisonProprio: data.infobien.raisonProprio,
      raisonAcheteur: data.infobien.raisonAcheteur,
      raison: data.infobien.raison,
      annonce: data.infobien.annonce,
      profilResidence: data.infobien.profilResidence,
      categorie: categorie,
    };
    const promises = [];
    let est;

    if (data.infobien.type === "condo") {
      est = await axios.post(
        `https://us-central1-ziaway-dev.cloudfunctions.net/api/coproprietes`,
        { evalcoprop },
        { crossdomain: true }
      );
    } else {
      est = await axios.post(
        `https://us-central1-ziaway-dev.cloudfunctions.net/api/prediction`,
        { evalData },
        { crossdomain: true }
      );
    }
    //Evaluation du bien

    const intervalStart = est.data.payload[0].tables.predictionInterval.start;
    const intervalEnd = est.data.payload[0].tables.predictionInterval.end;
    const evaluation = est.data.payload[0].tables.value.numberValue;
    const estimation = {
      ziaEstimation: {
        prediction: evaluation,
        predictionStart: intervalStart,
        predictionEnd: intervalEnd,
      },
    };

    console.log("Résultat estimation:", estimation);
    console.log("appel des comparables");
    // Recherche de comparables
    const comparables = await axios.post(
      `https://us-central1-ziaapp-ac0eb.cloudfunctions.net/comparables`,
      compareData
    );

    // Recherche du min max et la moyenne

    console.log("Résultat comparables:", comparables.data);

    //console.log("Résultat estimation:", comparables.data);
    // Retour du résultat

    const infosbien = {
      nbCourtier: 4,
      municipalite: municipalite,
      genreProprietes: data.infobien.genreProprietes,
      typeBatiment: data.infobien.typeBatiment,
      categorie: categorie,
      prixZia: evaluation,
    };
    console.log("infobien", infosbien);
    const broker_recommand = await axios.post(
      `https://us-central1-ziaapp-ac0eb.cloudfunctions.net/broker_recommend`,
      infosbien
    );
    console.log("broker recommand", broker_recommand.data);

    const options = { year: "numeric", month: "numeric", day: "numeric" };

    //if district (lévis) add broker jeanfrancois morin

    const recommandationCourtier = broker_recommand.data;

    const fichebien = {
      ...formValue,
      ...estimation,
      comparables: comparables.data,
      userID: context.auth.uid,
      userEmail: context.auth.token.email || null,
      displayName: data.infobien.userData.displayName,
      phoneNumber: data.infobien.userData.phoneNumber,
      courtiers: recommandationCourtier,
      dateCreation: data.infobien.dateCreation,
      estProprietaireReponse: data.infobien.estProprietaireReponse,
      ceBienEstReponse: data.infobien.ceBienEstReponse || null,
      envisageVendreBienReponse:
        data.infobien.envisageVendreBienReponse || null,
      ouiCommenceVenteReponse: data.infobien.ouiCommenceVenteReponse || null,
      ouiContacterParProfessionnel:
        data.infobien.ouiContacterParProfessionnel || null,
      statutRecherche: data.infobien.statutRecherche || null,
      projectionFinancement: data.infobien.projectionFinancement || null,
      emprunter: data.infobien.emprunter || null,
    };

    if (recommandationCourtier) {
      const courtiersRecommandes = JSON.parse(
        JSON.stringify(recommandationCourtier)
      );

      const resUpdateProfil = await db
        .collection("users")
        .doc(context.auth.uid)
        .update({ recommandations: courtiersRecommandes });
    }

    const ficheEstimation = JSON.parse(JSON.stringify(fichebien));
    const res = await db.collection("RapportsEvaluations").add(ficheEstimation);

    const jsonTest = {
      evaluationMunicipale: ficheEstimation.evaluationMunicipale,
      genreProprietes: ficheEstimation.genreProprietes,
      typeBatiment: ficheEstimation.typeBatiment,
      region: ficheEstimation.region,
      pieces: ficheEstimation.pieces,
      chambres: ficheEstimation.chambres,
      bains: ficheEstimation.bains,
      postcode: ficheEstimation.location.postcode,
      adresse: ficheEstimation.location.value,
      municipalite: ficheEstimation.location.city,
      garages: ficheEstimation.garages,
      stationnement: ficheEstimation.stationnement,
      pool: ficheEstimation.pool,
      taxesMunicipale: ficheEstimation.taxesMunicipale,
      anneeConstruction: ficheEstimation.anneeConstruction,
      standing: ficheEstimation.standing,
      typeVue: ficheEstimation.typeVue,
      nom: ficheEstimation.nom,
      prenom: ficheEstimation.prenom,
      email: ficheEstimation.email,
      telephone: ficheEstimation.telephone,
      proprietaire: ficheEstimation.proprietaire,
      dimensionTerrain: ficheEstimation.dimensionTerrain,
      superficieTerrain: ficheEstimation.superficieTerrain,
      raisonProprio: ficheEstimation.raisonProprio,
      raisonAcheteur: ficheEstimation.raisonAcheteur,
      raison: ficheEstimation.raisonAcheteur,
      annonce: ficheEstimation.annonce,
      profilResidence: ficheEstimation.profilResidence,
      prediction: ficheEstimation.ziaEstimation.prediction,
      userID: context.auth.uid,
      userEmail: context.auth.token.email || null,
      comparables: comparables.data,
      courtiers: recommandationCourtier,
      dateCreation: data.infobien.dateCreation,
    };

    // const msgId = await publishMessage(
    //   "projects/ziaapp-ac0eb/topics/vmz",
    //   jsonTest
    // );
    // console.log("message id", msgId);

    return { id: res.id, ficheEstimation };

    // Ajouter dans firestore

    //Ajouter le tout dans firestore tic

    // .then(res => {

    // window.alert(JSON.stringify(res.data.payload[0].tables.value.numberValue, null, 2));

    //setEstimation(res.data.payload[0].tables.value.numberValue);
    //    return res;
    // })
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

exports.EvaluationVMZ = functions.https.onCall(async (data, context) => {
  try {
    console.log("Type de bien en evaluation:", data.infobien.type);
    let categorie;

    const district = await axios.post(
      "https://us-central1-ziaway-dev.cloudfunctions.net/get_district",
      { codePostal: data.infobien.location.postcode }
    );
    console.log("district", district.data[0]);
    let municipalite;
    if (district.data) {
      municipalite = district.data[0].municipalite;
    }

    switch (data.infobien.type) {
      case "condo":
        categorie = "COP";
        break;
      case "Unifamiliale":
        categorie = "UNI";
        break;
      default:
        categorie = "";
    }

    const evalData = [
      { stringValue: data.infobien.anneeConstruction },
      { numberValue: data.infobien.evaluationMunicipale },
      { stringValue: data.infobien.genreProprietes },
      { stringValue: municipalite },
      { numberValue: data.infobien.chambres },
      { numberValue: data.infobien.pieces },
      { numberValue: data.infobien.bains },
      { numberValue: data.infobien.stationnement },
      { numberValue: data.infobien.superficie },
      { numberValue: data.infobien.taxesMunicipale },
      { stringValue: data.infobien.typeBatiment },
    ];

    const evalcoprop = [
      { stringValue: data.infobien.anneeConstruction },
      { numberValue: data.infobien.evaluationMunicipale },
      { stringValue: data.infobien.genreProprietes },
      { stringValue: municipalite },
      { numberValue: data.infobien.chambres },
      { numberValue: data.infobien.pieces },
      { numberValue: data.infobien.bains },
      { numberValue: data.infobien.stationnement },
      { numberValue: data.infobien.superficie },
      { numberValue: data.infobien.taxesMunicipale },
    ];
    console.log("Données d évaluation Coprops", evalcoprop);
    const compareData = {
      nbComparable: 3,
      municipalite: municipalite,
      genreProprietes: data.infobien.genreProprietes,
      typeBatiment: data.infobien.typeBatiment,
      taxesMunicipale: data.infobien.taxesMunicipale,
      salleBains: data.infobien.bains,
      superficieTerrain: data.infobien.superficie,
      evalMunicTot: data.infobien.evaluationMunicipale,
      nbrChambres: data.infobien.chambres,
      anneeConstruction: data.infobien.anneeConstruction,
      stationnements: data.infobien.stationnement,
      nbrPieces: data.infobien.pieces,
      categorie: categorie,
    };
    console.log("Données comparables", compareData);

    const formValue = {
      evaluationMunicipale: data.infobien.evaluationMunicipale,
      genreProprietes: data.infobien.genreProprietes,
      typeBatiment: data.infobien.typeBatiment,
      region: data.infobien.region,
      pieces: data.infobien.pieces,
      chambres: data.infobien.chambres,
      bains: data.infobien.bains,
      location: data.infobien.location,
      municipalite: municipalite,
      garages: data.infobien.garages,
      stationnement: data.infobien.stationnement,
      pool: data.infobien.pool,
      taxesMunicipale: data.infobien.taxesMunicipale,
      anneeConstruction: data.infobien.anneeConstruction,
      standing: data.infobien.standing,
      typeVue: data.infobien.typeVue,
      nom: data.infobien.nom,
      prenom: data.infobien.prenom,
      email: data.infobien.email,
      telephone: data.infobien.telephone,
      proprietaire: data.infobien.proprietaire,
      superficieTerrain: data.infobien.superficie,
      raisonProprio: data.infobien.raisonProprio,
      raisonAcheteur: data.infobien.raisonAcheteur,
      raison: data.infobien.raison,
      annonce: data.infobien.annonce,
      profilResidence: data.infobien.profilResidence,
      categorie: categorie,
    };
    const promises = [];
    let est;

    if (data.infobien.type === "condo") {
      est = await axios.post(
        `https://us-central1-ziaway-dev.cloudfunctions.net/api/coproprietes`,
        { evalcoprop },
        { crossdomain: true }
      );
    } else {
      est = await axios.post(
        `https://us-central1-ziaway-dev.cloudfunctions.net/api/prediction`,
        { evalData },
        { crossdomain: true }
      );
    }
    //Evaluation du bien

    const intervalStart = est.data.payload[0].tables.predictionInterval.start;
    const intervalEnd = est.data.payload[0].tables.predictionInterval.end;
    const evaluation = est.data.payload[0].tables.value.numberValue;
    const estimation = {
      ziaEstimation: {
        prediction: evaluation,
        predictionStart: intervalStart,
        predictionEnd: intervalEnd,
      },
    };

    console.log("Résultat estimation:", estimation);
    console.log("appel des comparables");
    // Recherche de comparables
    const comparables = await axios.post(
      `https://us-central1-ziaapp-ac0eb.cloudfunctions.net/comparables`,
      compareData
    );

    // Recherche du min max et la moyenne

    //console.log("Résultat comparables:", comparables.data);

    //console.log("Résultat estimation:", comparables.data);
    // Retour du résultat
    /*
    const infosbien = {
      nbCourtier: 4,
      municipalite: municipalite,
      genreProprietes: data.infobien.genreProprietes,
      typeBatiment: data.infobien.typeBatiment,
      categorie: categorie,
      prixZia: evaluation,
    };
    console.log("infobien", infosbien);
    const broker_recommand = await axios.post(
      `https://us-central1-ziaapp-ac0eb.cloudfunctions.net/broker_recommend`,
      infosbien
    );
    console.log("broker recommand", broker_recommand.data);
*/
    const options = { year: "numeric", month: "numeric", day: "numeric" };

    // const recommandationCourtier = broker_recommand.data;
    const fichebien = {
      ...formValue,
      ...estimation,
      comparables: comparables.data,
      userID: context.auth.uid,
      userEmail: context.auth.token.email || null,
      // courtiers: recommandationCourtier,
      dateCreation: data.infobien.dateCreation,
    };

    /* const courtiersRecommandes = JSON.parse(
        JSON.stringify(recommandationCourtier)
      );

      const resUpdateProfil = await db
        .collection("users")
        .doc(context.auth.uid)
        .update({ recommandations: courtiersRecommandes });
   
*/
    const ficheEstimation = JSON.parse(JSON.stringify(fichebien));
    const res = await db.collection("RapportsEvaluations").add(ficheEstimation);

    return res.id;
  } catch (error) {
    throw new functions.https.HttpsError("failed to connect" + error.message);
  }
});

async function publishMessage(topicName, data) {
  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(JSON.stringify(data));

  // const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
  return messageId;
}
