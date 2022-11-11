export{
getFirestore, 
collection,
addDoc,
getDocs,
getDoc,
doc, 
updateDoc, 
deleteDoc,
arrayRemove,
arrayUnion,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';//eslint-disable-line

export {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,  
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';//eslint-disable-line

export { initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';//eslint-disable-line
