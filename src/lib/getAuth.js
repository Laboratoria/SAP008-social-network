// aqui exportaras las funciones que necesites//
import "./config-firebase.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth.js";
import { app } from "../config-firebase.js";

const auth = getAuth(app);
export const banana = (auth, email, password)=>
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return userCredential
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error
    });



