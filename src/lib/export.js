export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js'; // eslint-disable-line

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js'; // eslint-disable-line

export {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'; // eslint-disable-line
