/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup, // popup do formulario entrar com o google
  GoogleAuthProvider, // autenticação do google
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

export {
  getFirestore
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'