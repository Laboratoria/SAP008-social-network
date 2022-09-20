import { firebaseApp } from "./main.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

const email= document.getElementById("emailRegister");
const pass= document.getElementById("passwordRegister");
const btnRegister= document.getElementById("btnRegister");

const auth = getAuth(firebaseApp);
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log ("entrou")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  btnRegister.addEventListener("click", createUserWithEmailAndPassword(email, pass));