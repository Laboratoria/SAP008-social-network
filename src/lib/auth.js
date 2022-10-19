/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { async } from 'regenerator-runtime';
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

const nomeUsuario = () => auth.currentUser.displayName;

const idUsuario = () => auth.currentUser.uid;

const criarPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      texto: textPost,
      like: [],
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  /*criar um map aqui ao inves do foreach e push*/

  const postsTela = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const arrayVazio = [];
      querySnapshot.forEach((posts) => {
        arrayVazio.push({ ...posts.data(), id: posts.id });
      });
      console.log(postArray);
    } catch (e) {
    console.log(e)
  }
};

export {
  logInUser,
  signInWithGoogle,
  logOutUser,
  createRegister,
  updateDisplayName,
  resetPassword,
  criarPost,
  nomeUsuario,
  idUsuario,
};
