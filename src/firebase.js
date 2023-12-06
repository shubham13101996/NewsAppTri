// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCavJ-Pvz4yOWuQEFipUiFYNbfDlo27xek",
  authDomain: "newsapp-auth-3b1e7.firebaseapp.com",
  projectId: "newsapp-auth-3b1e7",
  storageBucket: "newsapp-auth-3b1e7.appspot.com",
  messagingSenderId: "812972686268",
  appId: "1:812972686268:web:58eb957acb8bdff6c4c9b9",
  measurementId: "G-QCF56X5DTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };