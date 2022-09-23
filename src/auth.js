import { app } from "./config.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/6.3.2/firebase-auth.js"

export const auth = getAuth(app);

export function loginUserEmail(email, password) {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredential => {
            window.location.hash('')

            alert('SUCCESS')

            return userCredential.user;
        })
        .catch((error) => {
            alert(getErrorMessage(error));

            alert('Failure!')
        });

};

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return alert("Usuário não encontrado");
    }
    return error.message;
}

export function loginUserEmail(email, password, user) {

    createUserWithEmailAndPassword(auth, email.value, password.value, user.value)
        .then(userCredential => {
            window.location.hash('#Signup')

            alert('SUCCESS')

            return userCredential.user;
        })
        .catch((error) => {
            alert(getErrorMessage(error));

            alert('Failure!')
        });

};