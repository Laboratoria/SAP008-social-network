import { getAuth, signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider, } from './exports.js';
import { auth, app } from '../firebase-services/firebase-config.js';
 
  export const  initWithGoogle = () => {
   const provider = new GoogleAuthProvider();
   return signInWithPopup(auth, provider)
  }; 

  export function createNewUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   // ...
    //   return user;
    // })
    // .then(() => {
    //   updateProfile(auth.currentUser, {
    //     displayName: name,
    //   });
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    
    // })
  };
  
  export function loginEmailPassword(email , password) {
   return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    return user;
  })
  .catch((e) => {
    switch (e.code) {
      case 'auth/user-not-found':
        alert('Usuário não encontrado! Por favor, verifique seus dados.');
        break;
      case 'auth/wrong-password':
        alert('Senha incorreta! Por favor, verifique seus dados.');
        break;
      case 'auth/invalid-email':
        alert('E-mail inválido! Por favor, verifique seus dados.');
        break;
      case 'auth/user-disabled':
        alert('Usuário desativado! Por favor, reative sua conta.')
    }
  });
  }
  