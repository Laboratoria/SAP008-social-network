import {
  getFirestore,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from './exports.js';

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogle = () => signInWithPopup(auth, provider);
export const nameUser = () => auth.currentUser.displayName;
// eslint-disable-next-line max-len
export const createUser = (name, email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  });

export const db = getFirestore(app);
