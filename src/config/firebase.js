import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBVNfTFVSBTlGp1LQFcelT3INzA6Xtv_dA",
    authDomain: "notifrete-bb825.firebaseapp.com",
    databaseURL: "https://notifrete-bb825.firebaseio.com",
    projectId: "notifrete-bb825",
    storageBucket: "notifrete-bb825.appspot.com",
    messagingSenderId: "868524390661",
    appId: "1:868524390661:web:51b56440f3bf4e74c05f6c",
    measurementId: "G-J97VMGGD1M"
});

export default app;
