/* eslint-disable no-alert */
/* eslint-disable no-console */
import { app, db } from './configuration.js';

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
  collection,
  getDocs,
  addDoc,
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

export const criarPost = (artist, location, date, text) => { //eslint-disable-line
  return addDoc(collection(db, 'posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    artist,
    location,
    date,
    text,
    likes: 0,
  });
};

export {
  logInUser,
  signInWithGoogle,
  logOutUser,
  createRegister,
  updateDisplayName,
  resetPassword,
};
