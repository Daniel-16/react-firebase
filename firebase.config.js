// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI3clWe9YwtqR6db0qn6G9lk8CJD9sUbw",
  authDomain: "react-firebase-32667.firebaseapp.com",
  projectId: "react-firebase-32667",
  storageBucket: "react-firebase-32667.appspot.com",
  messagingSenderId: "648049024107",
  appId: "1:648049024107:web:0cb00201660f9f1ca3e52e",
  measurementId: "G-QKZT38BMJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
