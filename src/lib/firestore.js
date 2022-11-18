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

export const current = () => getAuth(app).currentUser;

export const nameUser = () => current().displayName;

export const createPost = (textPost) => addDoc(collection(db, 'posts'), {
  photo: current().photoURL,
  name: current().displayName,
  date: new Date().toLocaleDateString('pt-BR'),
  author: current().uid,
  text: textPost,
  like: [],
});

export const getPostId = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const arrayPost = [];
  querySnapshot.forEach((posts) => {
    arrayPost.push({ ...posts.data(), id: posts.id });
  });
  return arrayPost;
};

export const removePost = async (id) => {
  const deletePost = await deleteDoc(doc(db, 'posts', id));
  return deletePost;
};

export const editPost = async (postId, newText) => {
  updateDoc(doc(db, 'posts', postId), { text: newText });
};
