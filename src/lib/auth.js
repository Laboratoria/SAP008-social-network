/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
import { app } from './configuration.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, collection, addDoc, getFirestore, signInWithEmailAndPassword,
  signOut, updateProfile, getDocs,
} from './firebase.js';

export const auth = getAuth(app);
export const dataBase = getFirestore(app);

const provider = new GoogleAuthProvider(app);

export const newUser = (email, password, name) => { // função criar usuário
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  });
  }

export function loginUser(email, password) { // função login
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    }).catch((error) => {
      throw error;
    });
}

export function logoutUser() { // função logout
  return signOut(auth).then(() => {
    window.location.hash = '#entrar';
  }).catch((error) => error);
}

export const googleAccess = async () => { // função acessar com google
  return signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(token, user);
  }).catch((error) => {
    throw error;
  });
};

export const create = async (restaurant, adress, review) => { // função criar novo dado (posts)
  try {
    const docRef = await addDoc(collection(dataBase, 'Posts'), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      restaurant,
      adress,
      review,

    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => { // função printar posts na tela
  try {
    const querySnapshot = await getDocs(collection(dataBase, 'Posts'));
    const allPosts = [];
    querySnapshot.forEach((Posts) => {
      allPosts.push({ ...Posts.data(), id: Posts.id });
    });
    return allPosts;
  } catch (error) {
    throw error;
  }
};

// por que a variável não funciona (const userAuth = auth.currentUser) se é global?;
// por que algumas estruturas que possuem async funcionam sem await? (ex function googleAccess);
// o que é o new na frente de algumas functions?;
