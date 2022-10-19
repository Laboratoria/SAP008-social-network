import {
  getFirestore,
  addDoc,
  collection,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from './exports.js';

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogle = () => signInWithPopup(auth, provider);

// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// nat
const db = getFirestore(app);

async function publishPost(post) {
  await addDoc(collection(db, 'posts'), {
    post,
  });
}

export { publishPost };
