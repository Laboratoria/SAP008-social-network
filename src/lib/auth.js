import { app } from './firebase.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,  
} from './export.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

const getUserName = async () => { 
  return await auth.currentUser.displayName;
};

const loginEmailPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);  
};

const createAccount = async (name, email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name, 
    })
  })
};

const signInGoogle = async () => {
  return await signInWithPopup(auth, provider);    
};

const logout = async () => {
  await signOut(auth);
};

export {
  auth,
  getUserName,
  loginEmailPassword,
  createAccount,  
  signInGoogle,
  logout,
};
