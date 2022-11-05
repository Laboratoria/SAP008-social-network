import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, updateProfile, signOut,
} from './exports.js';

import app from './config-firebase.js';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function createUser(name, email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));   
}
export function loginEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signInGoogle() {
  return signInWithPopup(auth, provider);
}
export function signOutUser(){
  return signOut(auth);
}
