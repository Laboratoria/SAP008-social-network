import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  getFirestore,
} from './exports.js';

import { auth } from './auth.js';
import { app } from './config.js';

export const db = getFirestore(app);

// criar post na coleção
async function publishPost(postText, postSubject) {
  await addDoc(collection(db, 'posts'), {
    userPhoto: 'img',
    userName: auth.currentUser.displayName,
    text: postText,
    subject: postSubject,
    publishDate: new Date().toLocaleDateString('pt-BR'),
    like: 0,
  });
}

// mostrar post no feed
async function getAllPosts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsFeed = [];
    querySnapshot.forEach((post) => {
      postsFeed.push({ ...post.data(), id: post.id });
    });
    return postsFeed;
  } catch (error) {
    return error;
  }
}

// delete post
async function deletePost(postId) {
  await deleteDoc(doc(db, 'posts', postId));
}

export { publishPost, getAllPosts, deletePost };
