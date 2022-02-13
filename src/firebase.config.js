// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

if (!process.env.REACT_APP_FIREBASE_CONFIG) console.log("Firebase confing no found...");

const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);