import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from './exports.js';

import { app } from './configuration.js';

const provider = new GoogleAuthProvider(app);

export function userStateChanged(callback) {
  const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
}

export function registerWithEmailAndPassword(name, email, password) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
}

export function loginWithEmailAndPassword(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
  const auth = getAuth(app);
  return signInWithPopup(auth, provider);
}

export function resetPassword(email) {
  const auth = getAuth(app);
  return sendPasswordResetEmail(auth, email);
}

export function logoff() {
  const auth = getAuth(app);
  return signOut(auth);
}
