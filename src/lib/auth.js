// aqui exportaras las funciones que necesites//

import { app } from "./config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, } from "./export.js";
const auth = getAuth(app)


export const register = (email, password, profileName) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return updateProfile(auth.currentUser, {
        displayName: profileName,
      })
    })

}


export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(function () {
      window.location.hash = ("#feed")
      alert("Bem vindo" + email.value);
    })
    .catch(function (error) {
      console.error(error.code)
      alert("falhou")

    });

}

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
