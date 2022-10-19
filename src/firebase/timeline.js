import { firestore } from './config.js';

import { collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc  } from './exports.js';

import { getUser } from './auth.js';

const createDataPost = (messageContent) => {
  const date = new Date();
  return {
    message: messageContent,
    user: getUser().uid,
    image: '',
    answers: [],
    likes: 0,
    publishDate: date.toJSON(),
    editDate: date.toJSON(),
  };
};

const createDataAnswer = (messageContent) => {
  const date = new Date();
  return {
    message: messageContent,
    user: getUser().uid,
    likes: 0,
    publishDate: date.toJSON(),
    editDate: date.toJSON(),
  };
};

export const newPost = async (messageContent) => {
  const dataPost = createDataPost(messageContent);
  const docRef = addDoc(collection(firestore, 'posts'), dataPost);
  console.log('Document written with ID: ', docRef.id);
  return docRef;
};

export const readAllPosts = async () => {
  try {
    const allPosts = await getDocs(collection(firestore, 'posts'));
    const arrPosts = [];
    allPosts.forEach((post) => {
      arrPosts.push({ ...post.data(), id: post.id });
    });
    return arrPosts;
  } catch (error) {
    return error;
  };
};

export const readOnePost = async (idPost) => {
  const post = await getDoc(doc(firestore, 'posts', idPost));
  return { ...post.data(), id: post.id };
}

export const updatePost = async (idPost, messageContent) => {
  const date = new Date();
  const post = await doc(firestore, 'posts', idPost);
  await updateDoc(post, {
    message: messageContent,
    editDate: date.toJSON()
  });
}

  export const deletePost = async (idPost) => {
    await deleteDoc(doc(firestore, 'posts', idPost));
};
debugger;
