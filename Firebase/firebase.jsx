
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbjGNzpgi-yw7duJdNH9wkem1QGbe0wQ8",
    authDomain: "ecommrce-41b31.firebaseapp.com",
    projectId: "ecommrce-41b31",
    storageBucket: "ecommrce-41b31.appspot.com",
    messagingSenderId: "52844951325",
    appId: "1:52844951325:web:56a4d81f0bdb8b097c53f4",
    measurementId: "G-0BNJK5V6FB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'})
export const signInwithGoogle = () => auth.signInWithPopup(provider)