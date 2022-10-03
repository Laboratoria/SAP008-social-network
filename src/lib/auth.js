import { app } from './firebase.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from './export.js';

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

const loginEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  } catch (error) {
    txtError.setAttribute('style', 'display: block')
    txtError.setAttribute('style', 'color: red')
    txtError.innerHTML = 'Usuário ou senha incorretos'
    txtPassword.focus()
  }
};

const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
  } catch (error) {
    console.log('erro de criar conta');
  }
};

const logout = async () => {
  await signOut(auth);
};

const provider = new GoogleAuthProvider();
const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  auth,
  loginEmailPassword,
  createAccount,
  logout,
  signInGoogle,
};
