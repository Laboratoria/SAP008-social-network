import { initializeApp } from './exports.js';
import {
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
} from './exports.js';
import { getFirestore } from './exports.js';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsVutF790zdwV46b7T9_o_D2BOE5uWPH4",
  authDomain: "booknoteslogin.firebaseapp.com",
  projectId: "booknoteslogin",
  storageBucket: "booknoteslogin.appspot.com",
  messagingSenderId: "758989628486",
  appId: "1:758989628486:web:f90898b4d0d5846a405647",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);