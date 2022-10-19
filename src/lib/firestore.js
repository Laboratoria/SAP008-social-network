import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from './export.js';
import { auth, db } from './config.js';

export const current = () => auth.currentUser;

export const createPost = (postText) => addDoc(collection(db, 'post'), {
  photo: current().photoURL,
  displayName: current().displayName,
  email: current().email,
  data: new Date().toLocaleDateString('pt-BR'),
  hour: new Date().toLocaleTimeString(),
  post: postText,
  user: current().uid,
});

export async function getAllPosts() {
  const collPost = query(
    collection(db, 'post'),
    orderBy('data', 'desc'),
    orderBy('hour', 'desc'),
  );
  const postSnapshot = await getDocs(collPost);
  const listPost = postSnapshot.docs.map((docColl) => {
    const id = docColl.id;
    const data = docColl.data();
    const post = {
      id,
      ...data,
    };
    return post;
  });
  return listPost;
}
