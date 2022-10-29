import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
} from './export.js';

import { auth, provider } from './config.js';

export const register = (
  email,
  password,
  profileName,
) => createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    // const user = userCredencial.user;
    // console.log(user);
    updateProfile(auth.currentUser, {
      displayName: profileName,
    });
  });

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, provider);

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
