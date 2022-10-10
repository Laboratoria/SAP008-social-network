/* eslint-disable no-alert */
import { app } from './configuration.js';

import { getAuth, signInWithEmailAndPassword } from './firebase.js';

// onAuthStateChanged
const auth = getAuth(app);
export function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert('Algo deu errado');
      return errorMessage;
    });
}
