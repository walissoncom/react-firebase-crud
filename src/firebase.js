import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0RK-hDdZFBdDRdw1b5wEbdGrdoSSIDTw",
    authDomain: "react-crud-b58c0.firebaseapp.com",
    databaseURL: "https://react-crud-b58c0.firebaseio.com",
    projectId: "react-crud-b58c0",
    storageBucket: "react-crud-b58c0.appspot.com",
    messagingSenderId: "851808995738",
    appId: "1:851808995738:web:791a34eba03d8f36db1223"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();