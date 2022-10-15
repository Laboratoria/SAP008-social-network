import { app } from './firebase.js';
import { auth } from './auth.js';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from './export.js'

const db = getFirestore(app);

const createPost = async (texto) => {
    try {
        const docRef = await addDoc(collection(db, "post"), {
            name: auth.currentUser.displayName,
            author: auth.currentUser.uid,
            texto,
            //date: Date.now(),
        });        
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getPost = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "post"));
        const postArray = [];
        querySnapshot.forEach((post) => {
            postArray.push({ ...post.data(), id: post.id });
        });
        console.log(postArray);
        return postArray;
    } catch (error) {
        return error;
    }
}

const editPost = async (idPost, textValue) => {
    const updatePost = doc(db, "texto", idPost);

    await updateDoc(updatePost, {
        text: textValue,
    });
}

export { createPost, getPost, editPost };