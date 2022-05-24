// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dJ3CAr_cXRcLgn8_3igqDDeIiGodd1E",
  authDomain: "tandemly.firebaseapp.com",
  projectId: "tandemly",
  storageBucket: "tandemly.appspot.com",
  messagingSenderId: "225728447270",
  appId: "1:225728447270:web:9f722d8fb6c2f3aa1fb7e7",
  measurementId: "G-6MQVSBZM0S",
};

// Database
const db = getFirestore();

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
