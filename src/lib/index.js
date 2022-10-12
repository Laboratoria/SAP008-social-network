// // aqui exportaras las funciones que necesites

import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

import { app } from '../firebase.js';

const db = getFirestore(app);

function openMenu(contentMenu) {
  contentMenu.style.display = 'block';
}

function closeMenu(contentMenu) {
  contentMenu.style.display = 'none';
}

async function publishPost(post) {
  await addDoc(collection(db, 'posts'), {
    post,
  });
}

export { openMenu, closeMenu, publishPost };
