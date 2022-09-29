import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import firebaseConfig from "./firebase-config.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const checkLoggedUser = (check) => {
  onAuthStateChanged(auth, check);
}

export const userLogin = (email, password) => {         
  return signInWithEmailAndPassword(auth, email, password)      
}

export const registerUser = (email, password) => {        
  return createUserWithEmailAndPassword(auth, email, password)   

}

export const loginGoogle = () => {
  signInWithRedirect(auth, provider)
 // window.location.hash = "#timeline";
}
 

export const signOut = () => {
 auth.signOut();
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail (auth, email)
}

  
