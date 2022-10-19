/* eslint-disable no-console */
import { app, db } from './configuration.js';

import {
  collection,
  addDoc,
  getDocs,
  getAuth,
} from './firebase.js';

const auth = getAuth(app);

export const nameUser = () => auth.currentUser.displayName;

export const createPost = async (textPost) => {
  addDoc(collection(db, 'posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    texto: textPost,
    like: [],
  })
    .then(() => true)
    .catch((e) => { throw e; });
};

export const postScreen = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const arrayVazio = [];
    querySnapshot.forEach((posts) => {
      arrayVazio.push({ ...posts.data(), id: posts.id });
    });
    console.log();
  } catch (e) {
    console.log(e);
  }
};
