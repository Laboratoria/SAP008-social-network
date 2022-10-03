export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'; //eslint-disable-line

export {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  getDocs,
  orderBy,
  getDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  where,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'; // eslint-disable-line

export {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'; //eslint-disable-line