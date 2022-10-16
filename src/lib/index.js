import {
  getAuth, // autenticação
  // createUserWithEmailAndPassword, // criar usuário
  signInWithEmailAndPassword, // fazer login
  // signOut, // sair da conta
  GoogleAuthProvider, // entrar com o Google
  signInWithPopup,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

import { app } from '../firebase.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogle = () => signInWithPopup(auth, provider);
