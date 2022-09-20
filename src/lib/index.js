import { app } from './firebase-configuration.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { db } from '... firebase-firestore.js'

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);


export function registerWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
  return signInWithPopup(auth, provider)
}
// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');