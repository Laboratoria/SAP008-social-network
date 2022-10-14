import { app } from './firebase.js';
import { getFirestore, collection, addDoc, getDocs, getAuth } from './export.js'

const db = getFirestore(app);

const createPost = async (texto) => {
    const auth = getAuth(app);
    try {
        const docRef = await addDoc(collection(db, 'post'), {
            name: auth.currentUser.displayName,
            author: auth.currentUser.uid,
            text: texto,
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
        return postArray;
    } catch (error) {
        return error;
    }
}

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "Alan",
//         middle: "Mathison",
//         last: "Turing",
//         born: 1912
//     });

//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }



// Allow read/write access on all documents to any user signed in to the application
// service cloud.firestore {
//     match /databases/{database}/documents {
//      match /{document=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }

export { createPost, getPost};