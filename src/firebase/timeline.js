import { firestore } from './config.js'
import { collection, addDoc, getDocs } from './exports.js'

export const createDataPost = (messageContent, user) => {
  const date = new Date();
  return {
    "message": messageContent,
    "user": user,
    "image": "",
    "answers": [],
    "likes": 0,
    "publishDate": date.toJSON(),
    "editDate": date.toJSON()
  };
};
export const createDataAnswer = (messageContent, user) => {
  const date = new Date();
  return {
    "message": messageContent,
    "user": user,
    "likes": 0,
    "publishDate": date.toJSON(),
    "editDate": date.toJSON()
  };
};
export const newPost = async (messageContent, user) => {
  const dataPost = createDataPost(messageContent, user);
  const docRef = addDoc(collection(firestore, 'posts'), dataPost);
  return docRef;
};

export const readAllPosts = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'posts'));
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
