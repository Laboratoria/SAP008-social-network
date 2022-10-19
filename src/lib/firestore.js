import { app } from './firebase.js';
import { getFirestore, collection, addDoc, getDocs, getAuth, doc, updateDoc, deleteDoc, arrayRemove, arrayUnion, } from './export.js'

const db = getFirestore(app);

const createPost = async (textPost) => {
    const auth = getAuth(app);
    try {
        const docRef = await addDoc(collection(db, 'post'), {
            name: auth.currentUser.displayName,
            author: auth.currentUser.uid,
            texto: textPost,
            like: [],
        });
    } catch (e) {
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
};

const upDatePost = async (author, textPost) => {
    const newPost = doc(db, 'post', author);

    await updateDoc(newPost, {
        texto: textPost,

    });
};

const deletePost = async (author) => {
    try {
        const postToBeDeleted = doc(db, 'post', author);
        await deleteDoc(postToBeDeleted);
        return postToBeDeleted.id;
    } catch (error) {
        return error;
    }
};

const likePost = async (postId, author) => {
    const postToBeLiked = doc(db, 'post', postId);
    return updateDoc(postToBeLiked, {
        like: arrayUnion(author)
    });
};

const unlikePost = async (postId, author) => {
    const postToBeLiked = doc(db, 'post', postId);
    return updateDoc(postToBeLiked, {
        like: arrayRemove(author)
    });
};

export { createPost, getPost, upDatePost, deletePost, likePost, unlikePost };
