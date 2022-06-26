const functions = require("firebase-functions");
const admin = require("firebase-admin");
const _ = require("lodash");
const axios = require("axios");
const cors = require("cors")({ origin: '*' });
let stripeConfig = require("./config/stripe.json").dev;
if (process.env.NODE_ENV === "production") {
  stripeConfig = require("./config/stripe.json").prod;
}
const stripe = require("stripe")(stripeConfig.stripe_private_key);

exports.createNewAccount = functions.https.onCall(async (data, context) => {
  try {
    const auth = admin.auth();
    const old = await checkUserInFirebase(data.email);
    let user = null;
    // TODO: must add this check if the user is enabled
    if (old.doesExist && !old.disabled) {
      return { error: true, message: "User already exists" };
    } else if (old.doesExist && old.disabled) {
      user = await auth.updateUser(old.uid, {
        password: data.password,
        displayName: data.username,
      });
    } else {
      user = await auth.createUser({
        email: data.email,
        displayName: data.username,
        password: data.password,
        emailVerified: true,
        disabled: true,
      });
    }

    // create firestore user
    delete data.password;
    delete data.repassword;
    await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        ...data,
        userId: user.uid,
        userEmail: data.email,
        licenseId: data.licenseId,
    });
    return { id: user.uid, ...data };
  } catch (e) {
    return { error: true, message: e.message };
  }
});

async function checkUserInFirebase(email) {
  return new Promise((resolve) => {
    admin
      .auth()
      .getUserByEmail(email)
      .then((user) => {
        const disabled = user.disabled || false;
        return resolve({
          isError: false,
          doesExist: true,
          disabled,
          uid: user.uid,
        });
      })
      .catch((err) => {
        return resolve({ doesExist: false, isError: true, err });
      });
  });
}

exports.getAllPlans = functions.https.onCall(async (data, context) => {
  const response = await getStripePlans(data.priceId);
  return response;
});

exports.createSubscription = functions.https.onCall(async (data, context) => {
  try {
    const { user, source } = data;
    /**
     * 1: Get plan by it's id and verify it's active
     */
    const plan = await stripe.plans.retrieve(data.plan.id);
    if (!plan.active) {
      return { error: true, message: "Plan is not active" };
    }
    /**
     * 2: Create Customer
     */
    const customer = await stripe.customers.create({
      email: user.email,
      description: data.cardName || user.username,
      source: data.source,
    });
    /**
     * 3: Create Subscription
     */
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      trial_from_plan: true, // indicate to use trial period from plan
      items: [
        {
          plan: plan.id,
        },
      ],
    });
    /**
     * 4: Enable user
     */
    await admin.auth().updateUser(data.user.id, {
      disabled: false,
    });
    /**
     * 5: Update user data and set subscription data
     */
    await admin.firestore().collection("users").doc(user.id).set(
      {
        customerId: customer.id,
        role: "membre",
        disabled: false,
      },
      { merge: true }
    );
    await admin.firestore().collection("account").doc(user.id).set({
      customerId: customer.id,
      plan: plan.id,
      planName: data.plan.name,
      amount: subscription.plan.amount,
      subscription: subscription.id,
      subscriptionStatus: subscription.status,
      subscriptionCreated: subscription.created,
      subscriptionCurrentPeriodStart: subscription.current_period_start,
      subscriptionCurrentPeriodEnd: subscription.current_period_end,
    });
    /**
     * 6: Create Custom Token
     */
    const token = await admin.auth().createCustomToken(user.id)
    return { success: true, token };
  } catch (e) {
    return { error: true, message: e.message };
  }
});

exports.createSocialMediaUser = functions.https.onCall(
  async (data, context) => {
    try {
      const auth = admin.auth();
      /**
       * 1: Disable the current user only in firestore
       */
      const user = await (
        await admin.firestore().collection("users").doc(data.uid).get()
      ).data();
      if (user && !user.disabled) {
        return { error: true, message: "User already exists" };
      }
      /**
       * 2: User is disabled then create firestore user
       */

      await admin
        .firestore()
        .collection("users")
        .doc(data.uid)
        .set({
          ...data,
          id: data.uid,
          disabled: true,
        });
      return { id: data.uid, ...data };
    } catch (e) {
      return { error: true, message: e.message };
    }
  }
);

exports.fixCustomerSubscription = functions.https.onCall(
  async (data, context) => {
    try {
      const { email } = data;
      /**
       * 1: find the user
       */
      const user = await checkUserInFirebase(email);
      /**
       * 2: get current user;
       */
      const fuser = (
        await admin.firestore().collection("users").doc(user.uid).get()
      ).data();
      /**
       * 3: get user portal
       */
      return { current: { uid: user.uid, ...fuser } };
    } catch (error) {
      return { error: true, message: error.message };
    }
  }
);

exports.getCurrentUserPortal = functions.https.onCall(async (data, context) => {
  try {
    /**
     * 1: Get current user
     */
    const uid = context.auth.uid;
    const user = (
      await admin.firestore().collection("users").doc(uid).get()
    ).data();
    if (user.customerId) {
      const session = await stripe.billingPortal.sessions.create({
        customer: user.customerId,
        return_url: stripeConfig.fronturl,
      });
      return { url: session.url };
    }
    return { error: true, message: "User do not have a subscription" };
  } catch (e) {
    return { error: true, message: e.message };
  }
});

/**
 * Verify if the user is disabled in firestore or not
 */
exports.createOrLoginWithGoogle = functions.https.onCall(
  async (data, context) => {
    try {
      const { tokenId, googleId, profileObj } = data;
      /**
       * 1: Verify if the user is valid
       */
      const verifRes = await axios({
        method: "get",
        url: `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`,
      });
      if (verifRes.data.sub !== googleId) {
        return { error: true, message: "Google id not correct" };
      }
      /**
       * 2: Check if the user exists or not in database:
       */
      const old = await checkUserInFirebase(verifRes.data.email);
      let user = null;
      if (!old.doesExist) {
        user = await admin.auth().createUser({
          ...profileObj,
          displayName: profileObj.name,
          disabled: true,
          providerToLink: {
            uid: googleId,
            displayName: profileObj.name,
            email: profileObj.email,
            providerId: "google.com",
          },
        });
      } else if (old.doesExist && !old.disabled) {
        // Create User Token
        const token = await admin.auth().createCustomToken(old.uid);
        return { error: true, token, message: "User Already Exists" };
      } else {
          user = {
              uid: old.uid,
              ...profileObj,
          }
      }
      await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        ...profileObj,
        role: "membre",
        id: user.uid,
        userId: user.uid,
        userEmail: profileObj.email,
    });
    return {error: false, user: {id: user.uid, ...profileObj, role: "membre"}};
    } catch (e) {
        console.log(e);
      return { error: true, message: e.message };
    }
  }
);


exports.createOrLoginWithFacebook = functions.https.onCall(
    async (data, context) => {
      try {
        const { accessToken, name, email, userID } = data;
        /**
         * 1: Verify if the user is valid
         */
        const verifRes = await axios({
          method: "get",
          url: `https://graph.facebook.com/me?access_token=${accessToken}`,
        });
        if (verifRes.data.id !== userID) {
          return { error: true, message: "Facebook id not correct" };
        }
        /**
         * 2: Check if the user exists or not in database:
         */
        const old = await checkUserInFirebase(email);
        let user = null;
        if (!old.doesExist) {
          user = await admin.auth().createUser({
            displayName: name,
            email: email,
            disabled: true,
            providerToLink: {
              uid: userID,
              displayName: name,
              email: email,
              providerId: "facebook.com",
            },
          });
        } else if (old.doesExist && !old.disabled) {
          // Create User Token
          const token = await admin.auth().createCustomToken(old.uid);
          return { error: true, token, message: "User Already Exists" };
        } else {
            user = {
                uid: old.uid,
            }
        }
        await admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
          name,
          email,
          uid: user.uid,
          facebookId: userID,
          role: "membre",
          id: user.uid,
          userId: user.uid,
          userEmail:email,
      });
      return {error: false, user: {id: user.uid, name, email, role: "membre"}};
      } catch (e) {
          console.log(e);
        return { error: true, message: e.message };
      }
    }
  );

const getStripePlans = async (priceId) => {
  try {
    // get products
    let selectedPlan = null;
    const products = (await stripe.products.list({ active: true })).data;
    let plans = (await stripe.plans.list({ active: true })).data;
    plans = plans.filter((item) => {
      if(priceId === item.id) {
        selectedPlan = item;
      }
      const product = products.find((elem) => elem.id === item.product);
      if (product) {
        item.name = product.name;
        item.image = product.images ? product.images[0] : null;
        let metadata = [];
        if (product.metadata) {
          for ([k, v] of Object.entries(product.metadata)) {
            metadata.push({ key: k, value: v.split(",") });
          }
        }
        item.metadata = metadata;
        return item;
      }
      return false;
    });
    plans = _.sortBy(plans, "amount", "asc");
    plans = _.groupBy(plans, "interval");
    for(const [key, value] of Object.entries(plans)) {
      for(let i = 0; i<value.length; i++) {
        let metadata = value[i].metadata;
        for(let j = 0; j < metadata.length; j++) {
          const split = metadata[j].key.split(":");
          metadata[j].key = split[0];
          metadata[j].order = split[1] || j;
          metadata[j].enabled = split[2] || true;
        }
        metadata = _.orderBy(metadata, 'order', 'asc');
        value[i].metadata = metadata;
      }
      plans[key] = value;
    }
    return {plans, selectedPlan};
  } catch (e) {
    return { error: true, message: e.message };
  }
}

exports.getZiawayPlans = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const response = await getStripePlans();
    res.json(response.plans)
  })
})