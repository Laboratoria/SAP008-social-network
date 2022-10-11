/* eslint-disable no-alert */
/* eslint-disable no-console */
import { app } from './configuration.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from './firebase.js';
import { redirectFeed } from './redirect.js';

const auth = getAuth(app);

const logInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Usuário logado,', user);
  } else {
    console.log('Não há usuários logado');
  }
});

const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(credential);
      redirectFeed();
    })
    .catch((error) => {
      console.log('Algo deu errado na function signInWithGoogle', error);
    });
};

const logOutUser = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#home';
      console.log('Deu certo caramba, user deslogou kkk');
    })
    .catch((error) => {
      console.log('Ocorreu um erro ao deslogar usuário', error);
    });
};

export { logInUser, signInWithGoogle, logOutUser };
