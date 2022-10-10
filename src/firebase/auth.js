import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from './exports.js'; // eslint-disable-line import/no-unresolved

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

export const newUser = async (email, password) => {
  try {
    const newUserLocal = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return newUserLocal;
  } catch (error) {
    return error;
  }
};

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  return signInWithPopup(auth, provider);
}
