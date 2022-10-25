/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup, // popup do formulario entrar com o google
  GoogleAuthProvider, // autenticação do google
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

export {
  getFirestore,
  collection, 
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'