import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from './export.js';

import firebaseConfig from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const getUserName = () => auth.currentUser.displayName;

/* function criada para recolher o id do usuário logado,
com a intenção de validar se o usuário é o dono de um
post na timeline */
export const getUserId = () => auth.currentUser.uid;

// eslint-disable-next-line max-len
export const registerUser = (name, email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    updateProfile(auth.currentUser, {
      displayName: name, /* photoURL: "https://example.com/jane-q-user/profile.jpg" */
    });
  });

export const loginGoogle = () => {
  signInWithRedirect(auth, provider);
  // window.location.hash = "#timeline";
};

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const checkLoggedUser = (check) => {
  onAuthStateChanged(auth, check);
};

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export const signOut = () => {
  auth.signOut();
};

export const createPost = (artist, location, date, text) => { //eslint-disable-line
  return addDoc(collection(db, 'posts'), {
    name: auth.currentUser.displayName,
    author: auth.currentUser.uid,
    artist,
    location,
    date,
    text,
    likes: [],
  });
};

export const getAllPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsGroup = []; // array meninas
    querySnapshot.forEach((posts) => {
      postsGroup.push({ ...posts.data(), id: posts.id });
    });
    return postsGroup;
  } catch (error) {
    return error;
  }
};

export const editPost = async (postId, artist, location, date, text) => {
  const post = doc(db, 'posts', postId);

  await updateDoc(post, {
    artist,
    location,
    date,
    text,
  });
};

export const deletePost = async (postId) => {
  await deleteDoc(doc(db, 'posts', postId));
};

export const getPostById = async (postId) => {
  const docRef = doc(db, 'posts', postId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export async function likePost(post, postId, userId) {
  let likes = post.likes;
  const liking = !post.likes.includes(userId);
  if (liking) {
    likes.push(userId);
    alert('Voce deu like no post!');
  } else {
    likes = likes.filter((id) => id !== userId);
    alert('Voce descurtiu o post!');
  }
  await updateDoc(doc(db, 'posts', postId), {
    likes,
  });

  return { liked: liking, count: likes.length };
}
