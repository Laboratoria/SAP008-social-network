import {
  getAuth, // autenticação
  createUserWithEmailAndPassword, // criar usuário
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// eslint-disable-next-line import/no-unresolved
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

import { app } from './config.js';

export const auth = getAuth(app);

// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

//nat
const db = getFirestore(app);

async function publishPost(post) {
  await addDoc(collection(db, 'posts'), {
    post,
  });
}

export { publishPost };
