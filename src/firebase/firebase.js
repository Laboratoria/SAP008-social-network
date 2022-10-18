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
} from './export.js';

import firebaseConfig from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const getUserName = () => auth.currentUser.displayName;

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
    likes: 0,
  });
};

/* const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
} */

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

export const editPost = async (author, artist, location, date, text) => {
  const post = doc(db, 'posts', author);

  await updateDoc(post, {
    artist,
    location,
    date,
    text,
  });
};
