import {getFirestore, collection, addDoc} from './exports.js';
import app from './config-firebase.js';


// const db = getFirestore(app); 
// const auth = getAuth(app); 

export async function createPost(text){
    const db = getFirestore(app)
  
    try {
      const postRef = collection(db, "posts")
      const docRef = await addDoc(postRef, {
        text: text
      })
      console.log("Document written with ID: ", docRef.id);
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  };