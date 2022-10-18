import { app } from './config.js';
import {
  getFirestore,
  collection,
  addDoc,
  getAuth,
  getDocs,
} from './export.js';

const db = getFirestore(app);
const auth = getAuth(app);

export const creatPost = (textPost) => {
  addDoc(collection(db, 'posts'), {
    textPost,
    userId: auth.currentUser.uid,
    userName: auth.currentUser.displayName,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((e) => {
      console.error('Error adding document: ', e);
    });
};

export const getPost = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const posts = [];
  console.log(posts);
  querySnapshot.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });
  return posts;
};
