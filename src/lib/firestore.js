import { getFirestore, collection, addDoc, getAuth, query, getDocs, deleteDoc, doc, updateDoc,arrayUnion} from './exports.js';
import app from './config-firebase.js';

export async function getPosts(){
  const db = getFirestore(app)
  const q = query(collection(db, "posts")); // query = pesquisa

  const querySnapshot = await getDocs(q);
  const posts = []
  querySnapshot.forEach((doc) => {
      posts.push({id: doc.id, ...doc.data()});
  });
  return posts;
}
export async function createPost(text) {
  const db = getFirestore(app);
  const auth = getAuth(app);

  try {
    const postRef = collection(db, 'posts');
    const docRef = await addDoc(postRef, {
      name: auth.currentUser.displayName,
      text: text,
      like:[],
    });
    console.log('Document written with ID: ', docRef.id);

  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
export async function deletePost(postId){
  const db = getFirestore(app);
  await deleteDoc(doc(db, "posts", postId));
}
export async function editarPost(postId, textoNovo){
  const db = getFirestore(app);
  const docRef = doc(db, "posts", postId);
  await updateDoc(docRef, {
    text: textoNovo,
  });
}
export async function curtirPost(postId){
  const db = getFirestore(app)
  const docRef = doc(db, "posts", postId);
  console.log(docRef,"aaaaaaaa")
  await updateDoc(docRef, {
    like: arrayUnion("")
});
};