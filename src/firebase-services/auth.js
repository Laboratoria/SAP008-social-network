import { signOut, signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
   } from './exports.js';
import { auth } from '../firebase-services/firebase-config.js';

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user)
      window.location.hash = '#feed';
  }) 

  export const  initWithGoogle = () => {
   const provider = new GoogleAuthProvider();
   return signInWithPopup(auth, provider)
  }; 

  export function userLogOut() {
    return signOut(auth);
  }

  export function createNewUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  
  export function loginEmailPassword(email , password) {
   return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    return true;
    
  }).catch(e => {
    return false;
  })

  
  };
  