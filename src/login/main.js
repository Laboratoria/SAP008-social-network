import { firebaseConfig } from "../firebase/firebase-config.js"

function login() {
  firebase.auth().signInWithEmailAndPassword(document.getElementById('inputEmail').value, document.getElementById('inputPassword').value).then((user) => {
    window.location.href = "https://pokemongolive.com/pt_br/";
  }).catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage)
  });
}

function register() {
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    window.location.href = "https://pokemongolive.com/pt_br/";
  }).catch(error => {
    alert("Esse e-mail já está cadastrado");
  });
}
document.getElementById("button-enter").addEventListener("click", login);
document.getElementById("signUp").addEventListener("click", register);