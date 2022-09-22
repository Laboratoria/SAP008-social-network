import { app } from "./config.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/6.3.2/firebase-auth.js"

export const auth = getAuth(app);

export const userEmail = document.querySelector('#email')
export const userPassword = document.querySelector('#password')
export const form = document.querySelector(".bounce")
export const user = document.querySelector("#username")

form.addEventListener("submit", (e) => {

    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then(userCredential => {
            window.location.hash('')

            alert('SUCCESS')

            return userCredential.user;
        })
        .catch((error) => {
            alert(getErrorMessage(error));

            alert('Failure!')
        });

});

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return alert("Usuário não encontrado");
    }
    return error.message;
}

form.addEventListener("submit", (e) => {

    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value, user.value)
        .then(userCredential => {
            window.location.hash('#Signup')

            alert('SUCCESS')

            return userCredential.user;
        })
        .catch((error) => {
            alert(getErrorMessage(error));

            alert('Failure!')
        });

});