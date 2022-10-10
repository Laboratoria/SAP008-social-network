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


export const getUserName = () => { 
  return auth.currentUser.displayName
}

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

const loginEmailPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
  
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

const logout = async () => {
  await signOut(auth);
};

export {
  auth,
  loginEmailPassword,
  createAccount,  
  signInGoogle,
  logout,
};
