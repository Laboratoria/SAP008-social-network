import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
} from './firebase.js';

import { app } from './configuration.js';

// import { db } from '... firebase-firestore.js'

const provider = new GoogleAuthProvider(app);

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
