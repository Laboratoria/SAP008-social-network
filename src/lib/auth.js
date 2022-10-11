// aqui exportaras las funciones que necesites//

import { app } from './config.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, } from "./export.js";
const auth = getAuth(app);

export const register = (email, password, profileName) => createUserWithEmailAndPassword(auth, email, password);
  .then(() => updateProfile(auth.currentUser, {
    displayName: profileName,
  }));

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
