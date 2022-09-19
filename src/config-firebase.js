
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'
import { btnLogin, btnSignup, btnLogout, txtEmail, txtPassword, formSignup } from './main.js';

const firebaseConfig = {
  apiKey: "AIzaSyC0LYibd7iDrRSG9t2pNqWjxVVpcZxuyuo",
  authDomain: "teste-689a5.firebaseapp.com",
  projectId: "teste-689a5",
  storageBucket: "teste-689a5.appspot.com",
  messagingSenderId: "584087173369",
  appId: "1:584087173369:web:d5c821c45f15ff5cde0a28"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const creatAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
    formSignup();
  }
  catch (error) {
    console.log(error)
  }
}
btnSignup.addEventListener("click", creatAccount);

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch (error) {
    console.log(error);
  }
}
btnLogin.addEventListener("click", loginEmailPassword);

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

const logout = async () => {
  await signOut(auth);
}
btnLogout.addEventListener("click", logout)

