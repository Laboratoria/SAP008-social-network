// aqui exportaras las funciones que necesites//

import { app } from "./config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, } from "./export.js";
const auth = getAuth(app)
const provider = new GoogleAuthProvider(app);


export const register = (email, password, profileName) => {
  const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return updateProfile(auth.currentUser, {
        displayName: profileName,
      })
    })
}



export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signInGoogle = () => {
  return signInWithPopup(auth, provider);
};
