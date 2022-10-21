/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { app, db } from './configuration.js';

import {
  collection,
  addDoc,
  getDocs,
  getAuth,
} from './firebase.js';

export const auth = getAuth(app);

export const nameUser = () => auth.currentUser.displayName;

export const createPost = async (textPost) => {
  addDoc(collection(db, 'posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    text: textPost,
    like: [],
  })
    .then(() => true)
    .catch((e) => { throw e; });
};

export const postScreen = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const arrayPost = [];
    querySnapshot.forEach((posts) => {
      arrayPost.push({ ...posts.data(), id: posts.id });
    });
    return arrayPost;
  } catch (e) {
    console.log(e);
  }
};
