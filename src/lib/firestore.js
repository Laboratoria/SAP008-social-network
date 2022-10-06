import { app } from './firebase.js';
import { getFirestore, collection, addDoc, getDocs } from './export.js'

const db = getFirestore(app);

const addDocFirestore = () => {
    try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
};

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

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});

// Allow read/write access on all documents to any user signed in to the application
// service cloud.firestore {
//     match /databases/{database}/documents {
//      match /{document=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }

export {addDocFirestore, querySnapshot};