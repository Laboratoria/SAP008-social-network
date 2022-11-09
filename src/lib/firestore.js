/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { app, db } from './configuration.js';

import {
  deleteDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  getAuth,
  updateDoc,
} from './firebase.js';

export const auth = getAuth(app);

export const current = () => auth.currentUser;

export const nameUser = () => auth.currentUser.displayName;

export const createPost = async (textPost) => {
  addDoc(collection(db, 'posts'), {
    photo: current().photoURL,
    name: auth.currentUser.displayName,
    date: new Date().toLocaleDateString('pt-BR'),
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

export const removePost = async (id) => {
  const deletePost = await deleteDoc(doc(db, 'posts', id));
  return deletePost;
};

export const editPost = async (postId, newText) => {
  updateDoc(doc(db, 'posts', postId), { text: newText });
};
