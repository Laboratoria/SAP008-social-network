// // aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import { app } from "../firebase.js";

const db = getFirestore(app);

function openMenu(contentMenu) {
  contentMenu.style.display = "block";
}

function closeMenu(contentMenu) {
  contentMenu.style.display = "none";
}

async function publishPost(post) {
  console.log(post)
  await addDoc(collection(db, "posts"), {
    post: post
  }) 
}

export { openMenu, closeMenu, publishPost };
