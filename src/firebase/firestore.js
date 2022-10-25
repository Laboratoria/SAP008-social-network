import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from './exports.js';

import { db } from './auth.js';

// criar post na coleção
async function publishPost(postText, postSubject) {
  await addDoc(collection(db, 'posts'), {
    userPhoto: 'img',
    userName: 'ciclano',
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
