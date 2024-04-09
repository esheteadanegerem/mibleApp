// import axios from 'axios';
// import * as firebase from "firebase";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCgqmuAbGo9Skil-z04MsjtIAhsn5wkIKQ",
//     authDomain: "userauth-d48df.firebaseapp.com",
//     projectId: "userauth-d48df",
//     storageBucket: "userauth-d48df.appspot.com",
//     messagingSenderId: "865689404437",
//     appId: "1:865689404437:web:0ec8d936d1843e5bcd7a1c"
// };

// let app;


// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app();
// }

// // Set withCredentials to true for Axios
// axios.defaults.withCredentials = true;

// // Export Firebase authentication module
// const auth = firebase.auth();
// export { auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import {getDatabase,ref,onValue} from 'firebase/database'
import "firebase/database"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCgqmuAbGo9Skil-z04MsjtIAhsn5wkIKQ",
  authDomain: "userauth-d48df.firebaseapp.com",
  projectId: "userauth-d48df",
  storageBucket: "userauth-d48df.appspot.com",
  messagingSenderId: "865689404437",
  appId: "1:865689404437:web:0ec8d936d1843e5bcd7a1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(app)
//export const FIREBASE_DB=getFirestore(app)
 const DB=getDatabase()
 export {DB,ref,onValue}