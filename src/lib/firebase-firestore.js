import {
  getAuth,
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from './exports.js';

import { app } from './configuration.js';

const db = getFirestore(app);

export const createPost = async (textPost, category) => {
  const auth = getAuth(app);
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      data: new Date().toLocaleDateString('pt-BR'),
      tag: category,
      text: textPost,
      like: [],
    });
    return docRef.id;
  } catch (error) {
    return error;
  }
};

export const postById = async (idPost) => {
  const docRef = doc(db, 'post', idPost);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const like = async (idPost, idUser) => {
  const likePost = await postById(idPost);
  const likes = likePost.like;
  const userLiked = likes.indexOf(idUser);
  if (userLiked !== -1) {
    likes.splice(userLiked, 1);
  } else {
    likes.push(idUser);
  }
  await updateDoc(doc(db, 'post', idPost), {
    like: likes,
  });
  return likes;
};

export const updatePost = async (idPost, textValue) => {
  const newAttPost = doc(db, 'post', idPost);
  await updateDoc(newAttPost, {
    text: textValue,
  });
};

export const deletePost = async (postId) => {
  try {
    const docRef = doc(db, 'post', postId);
    await deleteDoc(docRef);
    return docRef.id;
  } catch (error) {
    return error;
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await getDocs(collection(db, 'post'));
    const arrPosts = [];
    posts.forEach((post) => {
      arrPosts.push({ ...post.data(), id: post.id });
    });
    arrPosts.sort((a, b) => {
      if (a.data < b.data) {
        return 1;
      }
      return -1;
    });
    return arrPosts;
  } catch (error) {
    return error;
  }
};
