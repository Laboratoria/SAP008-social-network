import {
  getFirestore,
  getDocs,
  query,
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
export const nameUser = () => auth.currentUser.displayName;

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

export const createPost = async (post) => {
  await addDoc(collection(db, 'posts'), {
    name: auth.currentUser.displayName,
    text: post,
    like: [],
  })
    .then(() => true)
    .catch((e) => { throw e; });
};

export const q = query(collection(db, 'posts'));

export const publishPost = async () => {
  try {
    const arrayPost = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((posts) => {
      arrayPost.push({ ...posts.data(), id: posts.id });
    });
    return arrayPost;
  } catch (error) {
    return error;
  }
};
