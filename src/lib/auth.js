/* eslint-disable no-alert */
/* eslint-disable no-console */
import { app } from './configuration.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from './firebase.js';

const auth = getAuth(app);

const logInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Usuário logado,', user);
  } else {
    console.log('Não há usuários logado');
  }
});

const provider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, provider);

const logOutUser = () => signOut(auth);

const createRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const updateDisplayName = (user, displayName) => updateProfile(user, { displayName });

const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export {
  logInUser,
  signInWithGoogle,
  logOutUser,
  createRegister,
  updateDisplayName,
  resetPassword,
};
