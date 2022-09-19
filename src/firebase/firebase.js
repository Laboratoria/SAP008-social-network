import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import firebaseConfig from "./firebase-config.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const userLogin = (email, password) => {         
  signInWithEmailAndPassword(auth, email, password)      
  .then((userCredential) => {                             
    const user = userCredential.user;                     
    window.alert(`O e-mail logado foi ${user.email}`);    
  })                                                      
  .catch((error) => {                                     
    const errorCode = error.code;                         
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
}

export const registerUser = (email, password) => {        
  createUserWithEmailAndPassword(auth, email, password)   
  .then((userCredential) => {                              
    const user = userCredential.user;                       
    window.alert(`O e-mail cadastrado foi ${user.email}`);    
  })                                                                                                     
  .catch((error) => {                                         
    const errorCode = error.code;                           
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
}

export const loginGoogle = () => {
  signInWithRedirect(auth, provider)
  .then(() =>{
     alert("logou");
  }) 
  .catch((error) => {
     alert(error.message)
  })

}
 //Ignoramos o token

