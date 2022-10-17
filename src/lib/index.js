import {
  getAuth,
  // createUserWithEmailAndPassword, // criar usuário
  signInWithEmailAndPassword,
  // signOut, // sair da conta
  GoogleAuthProvider,
  signInWithPopup,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

import { app } from '../firebase.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogle = () => signInWithPopup(auth, provider);
