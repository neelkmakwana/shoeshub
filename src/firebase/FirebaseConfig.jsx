// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzzLA9zDBF5XSoeIZcd2RuScD8Eeb1j0",
  authDomain: "myecom-be317.firebaseapp.com",
  projectId: "myecom-be317",
  storageBucket: "myecom-be317.appspot.com",
  messagingSenderId: "630726448429",
  appId: "1:630726448429:web:1a19a39b8cf85114f92fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB  = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth };