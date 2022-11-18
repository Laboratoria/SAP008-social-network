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
  getFirestore,
  getDoc,
} from './firebase.js';

export const auth = getAuth(app);

export const current = () => getAuth(app).currentUser;

export const dataBase = getFirestore(app);

export const nameUser = () => current().displayName;

export const createPost = (textPost) => addDoc(collection(db, 'posts'), {
  photo: current().photoURL,
  name: current().displayName,
  date: new Date().toLocaleDateString('pt-BR'),
  author: current().uid,
  text: textPost,
  like: [],
});


export const getPosts = async () => {
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

export const getPostById = async (postID) => {
  const docRef = doc(dataBase, 'posts', postID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const likePost = async (postId, userId) => {
  const post = await getPostById(postId);
  let likes = post.like;
  const liking = !likes.includes(userId);
  if (liking) {
    likes.push(userId);
  } else {
    likes = likes.filter((id) => id !== userId);
  }
  return updateDoc(doc(dataBase, 'posts', postId), {
    like: likes,
  });
};
