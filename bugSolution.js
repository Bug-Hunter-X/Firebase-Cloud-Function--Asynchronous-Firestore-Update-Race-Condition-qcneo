const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.updateDocuments = functions.https.onCall(async (data, context) => {
  const promises = [];
  //Array of updates
  const updates = data.updates; 

  updates.forEach(update =>{
    promises.push(db.collection('myCollection').doc(update.docId).update(update.data));
  });
  await Promise.all(promises);
  return { success: true };
});