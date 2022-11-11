/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup, 
  GoogleAuthProvider, 
  updateProfile,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

export {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  deleteDoc,
  increment,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
