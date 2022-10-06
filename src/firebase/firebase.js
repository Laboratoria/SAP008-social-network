import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, sendPasswordResetEmail, updateProfile} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import firebaseConfig from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

/*export const userName = auth.currentUser.displayName;*/

export const registerUser = (name, email, password) => {        
  return createUserWithEmailAndPassword(auth, email, password) 
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name, /*photoURL: "https://example.com/jane-q-user/profile.jpg"*/
      })
    })
}

export const loginGoogle = () => {
  signInWithRedirect(auth, provider)
 // window.location.hash = "#timeline";
}

export const userLogin = (email, password) => {         
  return signInWithEmailAndPassword(auth, email, password)      
}

export const checkLoggedUser = (check) => {
  onAuthStateChanged(auth, check);
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail (auth, email)
}

export const signOut = () => {
 auth.signOut();
}

export const createPost = async(artist, location, date, post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      artist, 
      location,
      date,
      post,
      likes: 0,
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}  
  
