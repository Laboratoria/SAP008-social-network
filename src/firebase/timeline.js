import { firestore } from './config.js';

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from './exports.js';

export const createDataPost = (messageContent, user) => {
  const date = new Date();
  return {
    message: messageContent,
    user: user,
    image: '',
    answers: [],
    likes: 0,
    publishDate: date.toJSON(),
    editDate: date.toJSON(),
  };
};
export const createDataAnswer = (messageContent, user) => {
  const date = new Date();
  return {
    message: messageContent,
    user: user,
    likes: 0,
    publishDate: date.toJSON(),
    editDate: date.toJSON(),
  };
};
export const newPost = (messageContent, user) => {
  const dataPost = createDataPost(messageContent, user);
  const docRef = addDoc(collection(firestore, 'posts'), dataPost);
  return docRef;
};

export const readAllPosts = () => {
  return getDocs(collection(firestore, 'posts'));
};

export const readOnePost = (idPost) => {
  return getDoc(doc(firestore, 'posts', idPost));
};

export const updatePost = (idPost, messageContent) => {
  const date = new Date();
  const post = doc(firestore, 'posts', idPost);
  return updateDoc(post, {
    message: messageContent,
    editDate: date.toJSON(),
  });
};
export const deletePost = (idPost) => {
  deleteDoc(doc(firestore, 'posts', idPost));
};
