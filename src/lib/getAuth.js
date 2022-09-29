import { app } from "../config-firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const auth = getAuth(app);

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then(function (){
        window.location.hash=("#feed")
        alert ("Bem vindo" + email.value);
      })
      .catch(function(error){
        console.error(error.code)
        alert("falhou")

      });

}
