// aqui exportaras las funciones que necesites//

import { app } from "../config-firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
const auth = getAuth(app)


export const register = (email, password, profileName, realName) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((banana) => {
      // Signed in
      const user = banana.user;
      console.log(user)
      updateProfile(auth.currentUser, {
        displayName: profileName,
        realName: realName 
      }).then(() => {
        // Profile updated!
        console.log("funcionou")
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
      // ...
    })
    .then(function () {
      alert("Bem vindo" + email.value);
      window.location.hash = "login";
    })
    .catch(function (error) {
      console.error(error.code)
      alert("falhou")

    });

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
