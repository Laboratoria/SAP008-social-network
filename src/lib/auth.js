import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from './export.js';

import { auth, provider } from './config.js';

export const register = (
  email,
  password,
  profileName,
) => createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    updateProfile(auth.currentUser, {
      displayName: profileName,
    });
  });

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, provider);
