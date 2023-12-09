// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh_yF_Fa-FLbbaOyiOG8zBH0ln79IXrIo",
  authDomain: "sena2024-8097b.firebaseapp.com",
  projectId: "sena2024-8097b",
  storageBucket: "sena2024-8097b.appspot.com",
  messagingSenderId: "822150443312",
  appId: "1:822150443312:web:255c60fb9d5d55fb12d8f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();