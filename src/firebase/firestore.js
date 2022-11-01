import {
  addDoc,
  collection,
  getDocs,
  doc,
  query,
  deleteDoc,
  updateDoc,
  getDoc,
  orderBy,
  getFirestore,
  arrayUnion,
  arrayRemove,
} from './exports.js';

import { auth } from './auth.js';
import { app } from './config.js';

export const db = getFirestore(app);

// criar post na coleção
async function publishPost(postText, postSubject) {
  await addDoc(collection(db, 'posts'), {
    userId: auth.currentUser.uid,
    userName: auth.currentUser.displayName,
    text: postText,
    subject: postSubject,
    publishDate: new Date().toLocaleDateString('pt-BR'),
    like: [],
  });
}

// buscar todos os posts
async function getAllPosts() {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('publishDate', 'desc')));
    const postsFeed = [];
    querySnapshot.forEach((post) => {
      postsFeed.push({ ...post.data(), id: post.id });
    });
    return postsFeed;
  } catch (error) {
    return error;
  }
}

// buscar um post especifico
async function getPost(postId) {
  const querySnapshot = await getDoc(doc(db, 'posts', postId));
  return { ...querySnapshot.data(), id: querySnapshot.id };
}

// deletar post
async function deletePost(postId) {
  await deleteDoc(doc(db, 'posts', postId));
}

// editar post
async function editPost(postId, postText, postSubject) {
  await updateDoc(doc(db, 'posts', postId), {
    text: postText,
    subject: postSubject,
  });
}

// likes
async function likePost(postId) {
  let post = await getPost(postId);

  if (post.like.indexOf(auth.currentUser.uid) === -1) {
    await updateDoc(doc(db, 'posts', postId), {
      like: arrayUnion(auth.currentUser.uid),
    });
  } else {
    await updateDoc(doc(db, 'posts', postId), {
      like: arrayRemove(auth.currentUser.uid),
    });
  }

  post = await getPost(postId);

  return post.like;
}

export {
  publishPost, getAllPosts, deletePost, editPost, getPost, likePost,
};
