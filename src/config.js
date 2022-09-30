// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDpqgJjoK34Ci6UNeTLQqDL8qNN-yjQzrg',
  authDomain: 'espectro-social-network.firebaseapp.com',
  databaseURL: 'https://espectro-social-network-default-rtdb.firebaseio.com',
  projectId: 'espectro-social-network',
  storageBucket: 'espectro-social-network.appspot.com',
  messagingSenderId: '292875700930',
  appId: '1:292875700930:web:ec15779bc2599423ae895b',
  measurementId: 'G-3QPGF7SHTP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
