import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  signOut,
} from './firebase.js';

import { app } from './configuration.js';

const db = getFirestore(app);

const provider = new GoogleAuthProvider(app);

export function userStateChanged(callback) {
  const auth = getAuth(app);
  onAuthStateChanged(auth, callback);
}

// function getUserData(uid) {
//   const auth = getAuth(app);
//   auth.getUser(uid);
// }
// window.getUserData = getUserData;

export function registerWithEmailAndPassword(name, email, password) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => updateProfile(auth.currentUser, {
      displayName: name,
    }));
}

export function loginWithEmailAndPassword(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
  const auth = getAuth(app);
  return signInWithPopup(auth, provider);
}

export function resetPassword(email) {
  const auth = getAuth(app);
  return sendPasswordResetEmail(auth, email);
}

export const createPost = async (textPost, category) => {
  const auth = getAuth(app);
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      data: new Date().toLocaleDateString(),
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
    return arrPosts;
  } catch (error) {
    return error;
  }
};

export function logoff() {
  const auth = getAuth(app);
  return signOut(auth);
}
