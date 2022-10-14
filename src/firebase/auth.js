import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from './exports.js'; // eslint-disable-line import/no-unresolved

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

export async function newUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth);
}