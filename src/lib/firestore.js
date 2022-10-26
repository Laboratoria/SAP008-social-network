import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  onAuthStateChanged,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from './export.js';
import { auth, db } from './config.js';

export const current = () => auth.currentUser;

export const createPost = (postText) => addDoc(collection(db, 'posts'), {
  displayName: current().displayName,
  email: current().email,
  data: new Date().toLocaleDateString('pt-BR'),
  hour: new Date().toLocaleTimeString([], { timeStyle: 'short' }),
  post: postText,
  user: current().uid,
  like: [],
});

export async function getAllPosts() {
  const collPost = query(
    collection(db, 'posts'),
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

export const logout = () => {
  const logoutUser = auth.signOut();
  return logoutUser;
};

export function stayLoggedIn(callback) {
  return onAuthStateChanged(auth, (user) => {
    callback(user !== null);
  });
}

// função de like//
export const postLike = async (idPost, idUser) => {
  const postRef = doc(db, 'posts', idPost);
  await updateDoc(postRef, {
    like: arrayUnion(idUser),
  });
};

export const postDislike = async (idPost, idUser) => {
  const postRef = doc(db, 'posts', idPost);
  await updateDoc(postRef, {
    like: arrayRemove(idUser),
  });
};

export const deletePost = async (idPost) => {
  const del = await deleteDoc(doc(db, 'post', idPost));
  return del;
};
