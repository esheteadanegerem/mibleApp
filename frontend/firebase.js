import axios from 'axios';
import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgqmuAbGo9Skil-z04MsjtIAhsn5wkIKQ",
    authDomain: "userauth-d48df.firebaseapp.com",
    projectId: "userauth-d48df",
    storageBucket: "userauth-d48df.appspot.com",
    messagingSenderId: "865689404437",
    appId: "1:865689404437:web:0ec8d936d1843e5bcd7a1c"
};

let app;


if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

// Set withCredentials to true for Axios
axios.defaults.withCredentials = true;

// Export Firebase authentication module
const auth = firebase.auth();
export { auth };
