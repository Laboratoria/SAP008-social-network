// aqui exportaras las funciones que necesites//

import { app } from './config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from './export.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export const register = (
  email,
  password,
  profileName,
) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredencial) => {
    const user = userCredencial.user;
    console.log(user);
    updateProfile(auth.currentUser, {
      displayName: profileName,
    });
  });

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, provider);
