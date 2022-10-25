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
};

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

export const googleAccess = () => { // função acessar com google
  return signInWithPopup(auth, provider);
};

export const create = (restaurant, adress, review) => { // função criar novo dado (posts)
  return addDoc(collection(dataBase, 'Posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    restaurant,
    adress,
    review,
  });
};

export const getPosts = () => { // função printar posts na tela
  const querySnapshot = getDocs(collection(dataBase, 'Posts'));
  const allPosts = [];
  querySnapshot.forEach((Posts) => {
    allPosts.push({ ...Posts.data(), id: Posts.id });
  });
  return allPosts;
};

// export const checkedUser = (check) => {
//   return onAuthStateChanged(auth, check);
// };

// por que a variável não funciona (const userAuth = auth.currentUser) se é global?;
// por que algumas estruturas que possuem async funcionam sem await? (ex function googleAccess);
// o que é o new na frente de algumas functions?;
