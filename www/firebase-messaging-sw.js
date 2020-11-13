//importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-messaging.js');

importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

firebase.initializeApp({
    
    messagingSenderId: '400236234696',
    apiKey: "AIzaSyB0bupmph7F3yazBwjcXj1GrfU3n6l-iKo",
    projectId: "blassa-df986",
    appId: "1:400236234696:web:2bd8c5fcac28140e2e62fd"
});

const messaging = firebase.messaging();



