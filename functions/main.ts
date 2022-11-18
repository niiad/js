const functions  = require('firebase-functions');

// firestore triggers examples (onWrite, onCreate, onUpdate, onDelete)
// anticipates the changes `Teachers` in collection `College`
exports.myFunctionName = functions.firestore.document('College/teachers').onWrite((event) => {
    // ... when new teacher joins the institution
});

// when a new document is created
exports.createUser = functions.Firestore.document('users/{userId}').onCreate((event) => {
    // object referencing to the document
    // e.g. {'name': 'Patinitha', 'age': 4}
    let newValue = event.data.data();

    // fetching a particular field
    let name = newValue.name;

    // perform any actions ...
});

// when a document is updated or has some change values
exports.updateUser = functions.firestore.document('users/{userId}').onUpdate((event) => {
    // e.g. {'name': 'Srinivasa', 'age': 61}
    // indicates the new value
    let newValue = event.data.data();

    // indicates the old value
    let previousValue = event.data.previous.data();

    let name = newValue.name;

    // perform desired operations ...
});

// deletes the appropriate document
exports.deleteUser = functions.firestore.document('users/{userId}').onDelete((event) => {
    // e.g. {'name': 'Srinivas', 'age': 61}

    let deletedValue = event.data.previous.data();

    // perform desired operations ...
});

// listen to all kinds of events occurring in Firestore
exports.modifyUser = functions.firestore.document('users/{userId}').onWrite((event) => {
    let document = event.data.data();

    // update or delete the data
    let oldDocument = event.data.previous.data();

    // perform desired operations ...
});

// monitor complex document structure
exports.useMultipleWildcards = functions.firestore.document('users/{userId}/{messageCollectionId}/{messageId}').onWrite((event) => {
    // if we set `/users/Vinisha/incoming_messages/167` to {body: "Hello"} then
    // event.params.userId == "Vinisha";
    // event.params.messageId == "167";
    // ... and ...
    // event.data.data() == {body: "Hello"}
});

// realtime firebase

// like firestore above but path is defined as below
// use of functions.database.ref to pass the path and listening to the changes in the event
// anticipates for change
exports.buildUpperCase = functions.database.ref('/messages/{pushId}/original').onWrite((event) => {
    // fetches the data written to database
    const original = event.data.val();
    console.log('Uppercasing', event.params.pushId, original);

    const uppercase = original.toUpperCase();

    // update the data to upper case and set it
    return event.data.ref.parent.child('uppercase').set(uppercase);
});

// firebase authentication

// a new user added using firebase authentication
exports.sendEmail = functions.auth.user().onCreate((event) => {
    // ...
});

// when a user deletes account
exports.sendEmailSorryToSeeYouGo = functions.auth.user().onDelete((event) => {
    // ...
});

// analytics and crashlytics triggers

// when a user's conversion event occurs, use the AnalyticsEvent class to perform an action (such as sending a notification)
exports.sendCouponOnPurchase = functions.analytics.event('in_app_purchase').onLog((event) => {
    // ...
});

// cloud storage triggers

// listens to changes occuring in the default bucket
exports.thumbnail = functions.storage.object().onChange((event) => {
    // ...
});

// http triggers
// make use of http methods such as GET, POST, PUT, DELETE and OPTIONS, using the onRequest function
// passing a request and response as a parameter
exports.date = functions.https.onRequest((request, response) => {
    // ...
});














































