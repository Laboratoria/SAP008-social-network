import {
  getAuth, signInWithEmailAndPassword,
  signOut, GoogleAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'; // eslint-disable-line import/no-unresolved

import { app } from './config.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

// export function createAccount(email, password, name) {
//   return createUserWithEmailAndPassword(auth, email, password, name);
//     // .then((userCredential) => {
//     //   const user = userCredential.user;
//     //   return user;
//     // })
//     // .then(() => {
//     //   updateProfile(auth.currentUser, {
//     //     displayName: name,
//     //   });
//     // })
//     // .catch(() => {

//     // });
// }
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  return signInWithPopup(auth, provider);
}

// export function getErrorMessage(error) {
//   switch (error.code) {
//     case 'auth/user-not-found':
//       errorMessage.innerHTML = 'Ops! Usuário não encontrado!';
//       break;
//     case 'auth/invalid-email':
//       errorMessage.innerHTML = 'Ops! O endereço de e-mail não é válido!';
//       break;
//     case 'auth/wrong-password':
//       errorMessage.innerHTML = 'Ops! Senha incorreta!';
//       break;
//     case 'auth/invalid-display-name':
//       errorMessage.innerHTML = 'Ops! O nome do usuário é inválido.';
//       break;
//     default:
//   }
// }

export function logout() {
  return signOut(auth);
}
