import {
  getFirestore,
  addDoc,
  collection,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from './exports.js';

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogle = () => signInWithPopup(auth, provider);
// eslint-disable-next-line max-len
export const getUserName = () => auth.currentUser.displayName;
export const getUserId = () => auth.currentUser.uid;

// eslint-disable-next-line max-len
export const createUser = (name, email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  });

// nat
const db = getFirestore(app);

async function publishPost(post) {
  await addDoc(collection(db, 'posts'), {
    post,
  });
}

export { publishPost };
