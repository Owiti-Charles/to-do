import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDK4sBXL1lY82GqZfgcpuqu8aCJ794_Yw",
    authDomain: "todo-app-a5a1e.firebaseapp.com",
    databaseURL: "https://todo-app-a5a1e.firebaseio.com",
    projectId: "todo-app-a5a1e",
    storageBucket: "todo-app-a5a1e.appspot.com",
    messagingSenderId: "1049535842528",
    appId: "1:1049535842528:web:39caf463e8158d59a06885",
    measurementId: "G-1JJSG8E3DE"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth()

export default db;