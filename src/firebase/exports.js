export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'; // eslint-disable-line import/no-unresolved

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'; // eslint-disable-line import/no-unresolved

export {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'; // eslint-disable-line import/no-unresolved
