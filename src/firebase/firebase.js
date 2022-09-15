// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgjINGIqA3XMCdF9ZWfq9Zw3fsMtEvGm0",
  authDomain: "social-network-f3eab.firebaseapp.com",
  projectId: "social-network-f3eab",
  storageBucket: "social-network-f3eab.appspot.com",
  messagingSenderId: "654603154835",
  appId: "1:654603154835:web:e1c7b6f13b14b6b3a7a466",
  measurementId: "G-7Y1PN36PHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


