/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
export {
  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
export {
  collection, addDoc, getFirestore, getDocs, doc, deleteDoc, updateDoc, getDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
