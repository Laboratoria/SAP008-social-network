import { firestore } from './config.js'
import { collection, addDoc, getDocs, orderBy } from './exports.js'

const createDataPost = (messageContent, user) => {
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
const createDataAnswer = (messageContent, user) => {
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
    console.log("Document written with ID: ", docRef.id);
    return docRef;
};
export const readAllPosts = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'posts'));
};


