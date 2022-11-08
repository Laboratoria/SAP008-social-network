/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
import { app } from './configuration.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, collection, addDoc, getFirestore, signInWithEmailAndPassword,
  signOut, updateProfile, getDocs, doc, deleteDoc, updateDoc, getDoc,
} from './firebase.js';

export const auth = getAuth(app);
export const dataBase = getFirestore(app);
const provider = new GoogleAuthProvider(app);
// export const user = auth.currentUser;

export const newUser = (email, password, name) => { // função criar usuário
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    });
};

export function loginUser(email, password) { // função login
  return signInWithEmailAndPassword(auth, email, password);
}

export function logoutUser() { // função logout
  return signOut(auth).then(() => {
    window.location.hash = '#entrar';
  }).catch((error) => error);
}

export const googleAccess = () => { // função acessar com google
  return signInWithPopup(auth, provider);
};

export const create = (restaurant, address, review) => { // função criar novo dado (posts)
  return addDoc(collection(dataBase, 'Posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    restaurant,
    address,
    review,
    like: [],
  });
};

export const getPosts = async () => { // função printar posts na tela
  const querySnapshot = await getDocs(collection(dataBase, 'Posts'));
  const allPosts = [];
  querySnapshot.forEach((post) => {
    allPosts.push({ ...post.data(), id: post.id });
  });
  return allPosts;
};

export const deletePost = (postID) => { // função deletar post
  return deleteDoc(doc(dataBase, 'Posts', postID));
};

export const forEditPost = (postID, restaurant, address, review) => {
  const docRef = doc(dataBase, 'Posts', postID);
  return updateDoc(docRef, {
    restaurant,
    address,
    review,
  });
};

export const getPostById = async (postID) => {
  const docRef = doc(dataBase, 'Posts', postID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const likePost = async (postID, userID) => {
  const post = await getPostById(postID);
  let arrLikes = post.like;
  const action = !arrLikes.includes(userID);

  if (action) {
    arrLikes.push(userID);
  } else {
    arrLikes = arrLikes.filter((id) => id !== userID);
  }

  return updateDoc(doc(dataBase, 'Posts', postID), {
    like: arrLikes,
  });
};

// por que a variável não funciona (const userAuth = auth.currentUser) se é global?;
// por que algumas estruturas que possuem async funcionam sem await? (ex function googleAccess);
// o que é o new na frente de algumas functions?;
