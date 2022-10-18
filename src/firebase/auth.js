import {
  getAuth, // autenticação
  createUserWithEmailAndPassword, // criar usuário
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// eslint-disable-next-line import/no-unresolved
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

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
