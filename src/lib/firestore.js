import { getFirestore, collection, addDoc, getAuth } from './exports.js';
import app from './config-firebase.js';

export async function createPost(text) {
  const db = getFirestore(app);
  const auth = getAuth(app);

  try {
    const postRef = collection(db, 'posts');
    const docRef = await addDoc(postRef, {
      name: auth.currentUser.displayName,
      text,
    });
    console.log('Document written with ID: ', docRef.id);
    return  {
      name: auth.currentUser.displayName,
      text,
    }
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
