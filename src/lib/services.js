import { firebaseApp } from "./config.js";
import{getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


// iniciando autenticação
const auth = getAuth(firebaseApp);

//As funções descritas na documentação serão inicializadas e escritas aqui. LEMBRAR de exportá-las para os templates!

export function signUp(email, pass){
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("entrou", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ":", errorMessage);
    });
}