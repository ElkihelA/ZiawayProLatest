const functions = require("firebase-functions");
const admin = require("firebase-admin");
let stripeConfig = require('./config/stripe.json').dev;
if(process.env.NODE_ENV === "production") {
    stripeConfig = require('./config/stripe.json').prod;
}
const stripe = require('stripe')(stripeConfig.stripe_private_key);

exports.webhooks = functions.https.onRequest(async (request, response) => {
    const sig = request.headers['stripe-signature'];
    let event;
    try {
    let result = false;
      event = stripe.webhooks.constructEvent(request.rawBody, sig, stripeConfig.endpointSecret);
        if(event.type.indexOf('customer.subscription.') === 0){
            result = await updateSubscription(event.data.object);
        } else if(event.type.indexOf('invoice.') === 0){
            result = await updateInvoice(event.data.object, event.type);
        }
        if (result){
            response.json({received: true});
        } else {
            throw Error("unknown error");
        }
        return true;
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
});

const updateSubscription = async (subscription) => {
    const snapshot = await admin.firestore().collection("account").where("subscription", "==", subscription.id).get();
    const products = (await stripe.products.list({active: true})).data;
    if(!snapshot.empty) {
        snapshot.forEach(async (data) => {
            console.log('[update subscription]', data.id, subscription.id);
            await admin.auth().updateUser(data.id, {
                disabled: subscription.status === "canceled" || subscription.status === "paused",
            })
            const planName = products.find(item => item.id === subscription.plan.product).name
            // Update user depends on the new plan
            
            await admin.firestore().collection("account").doc(data.id).set({
                ...data.data(),
                userId: data.id,
                plan: subscription.plan.id,
                planName: planName,
                amount: subscription.plan.amount,
                customerId: subscription.customer,
                subscription: subscription.id,
                subscriptionStatus: subscription.status,
                subscriptionCreated: subscription.created,
                subscriptionCurrentPeriodStart: subscription.current_period_start,
                subscriptionCurrentPeriodEnd: subscription.current_period_end,
            })
        },{merge: true})
        return true;
    }
    console.log(`Subscription with customerId = ${subscription.customer} not exists in database`)
    return true;
}

const updateInvoice = async (invoice, type) => {
    const snapshot = await admin.firestore().collection("account").where("subscription", "==",invoice.subscription).get();
    if(!snapshot.empty) {
        snapshot.forEach(async (account) => {
            console.log('[update invoice]', account.id, invoice.id);
            await admin.auth().updateUser(account.id, {
                disabled: type === "invoice.payment_failed",
            })
            await admin.firestore().collection("account").doc(account.id).collection("invoices").doc(invoice.id).set({
                'id': invoice.id,
                'total': invoice.total,
                'subTotal': invoice.subtotal,
                'amountDue': invoice.amount_due,
                'amountPaid': invoice.amount_paid,
                'currency': invoice.currency,
                'created': invoice.created,
                'status': invoice.status,
                'hostedInvoiceUrl': invoice.hosted_invoice_url
            }, {
                merge: true
            })
        })
        return true;
    }
    console.log(`Subscription with subscriptionId = ${invoice.subscription} not exists in database`)
    return true;
}
