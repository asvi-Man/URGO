// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf3e-q1iQCq6BMwSzAINqiBmnRgWjPj5M",
  authDomain: "urgo-f5426.firebaseapp.com",
  projectId: "urgo-f5426",
  storageBucket: "urgo-f5426.firebasestorage.app",
  messagingSenderId: "732017223380",
  appId: "1:732017223380:web:b35f153adb3a51db527d41",
  measurementId: "G-9QG1KSRME8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);