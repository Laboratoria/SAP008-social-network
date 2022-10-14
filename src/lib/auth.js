// aqui exportaras las funciones que necesites//

import { app } from './config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  getFirestore,
  doc, 
  setDoc, 
} from './export.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);

export const register = (
  email,
  password,
  profileName,
) => createUserWithEmailAndPassword(auth, email, password)
  .then(() => updateProfile(auth.currentUser, {
    displayName: profileName,
  }));

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signInGoogle = () => signInWithPopup(auth, provider);

//função firestore//

export const creatPost = () => setDoc(doc(db, 'cities', 'LA'), {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
});
