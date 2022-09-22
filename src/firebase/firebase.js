import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import firebaseConfig from "./firebase-config.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


onAuthStateChanged(auth, (user) => {
  if (user) {
    alert(user.email)
    window.location.hash = "#timeline"
  } else {
   window.location.hash = "";
  }
});


export const userLogin = (email, password) => {         
  signInWithEmailAndPassword(auth, email, password)      
  .then((userCredential) => {                             
    const user = userCredential.user;                     
    window.location.hash = "#timeline";    
  })                                                      
  .catch((error) => {                                     
    const errorCode = error.code;                         
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
}

export const registerUser = (email, password) => {        
  createUserWithEmailAndPassword(auth, email, password)   
  .then((userCredential) => {                              
    const user = userCredential.user;                       
    window.location.hash = "";   
  })                                                                                                     
  .catch((error) => {                                         
    const errorCode = error.code;                           
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
}

export const loginGoogle = () => {
  signInWithRedirect(auth, provider)
 // window.location.hash = "#timeline";
}
 

export const signOut = () => {
 auth.signOut();
}

