const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendPush = functions.database.ref('/Messages/{MessageId}').onWrite(event => {
    let projectStateChanged = false;
    let projectCreated = false;
    let MessageData = event.data.val();
    if (!event.data.previous.exists()) {
        projectCreated = true;
    }
    if (!projectCreated && event.data.changed()) {
        projectStateChanged = true;
    }

    let msg = 'A Message state was changed';

		if (projectCreated) {
			msg = `The following new Message was added to the Theme: ${MessageData.Theme}`;
		}

    return loadUsers().then(users => {
        let tokens = [];
        for (let user of users) {
            tokens.push(user.pushToken);
        }

        let payload = {
            notification: {
                title: 'Firebase Notification',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };

        return admin.messaging().sendToDevice(tokens, payload);
    });
});

function loadUsers() {
    let dbRef = admin.database().ref('/Passagers');
    let defer = new Promise((resolve, reject) => {
        dbRef.once('value', (snap) => {
            let data = snap.val();
            let users = [];
            for (var property in data) {
                users.push(data[property]);
            }
            resolve(users);
        }, (err) => {
            reject(err);
        });
    });
    return defer;
}