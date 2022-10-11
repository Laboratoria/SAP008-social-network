/* eslint-disable no-console */
import { app } from './configuration.js';

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from './firebase.js';

const auth = getAuth(app);s
const logInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Usuário logado');
  } else {
    console.log('Não há usuários logado');
  }
});

export { logInUser };