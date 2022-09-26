import { app } from "./config.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

export const auth = getAuth(app);

export function loginUser(email, password) {
   return signInWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredential => {
            window.location.hash('')

            console.log('sucess!')

            alert('Sucesso! Você está logado!')

            return userCredential.user;
        })
        .catch((error) => {
            alert(getErrorMessage(error));

            console.log("error!")

            alert('Ops! Algo deu errado, tente novamente!')
        });

}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    return `Aconteceu um erro não identificado, por favor entre em contato com as desenvolvedoras e indique o código ${error.code}`;
}

export function createAccount(email, password, user) {

    return createUserWithEmailAndPassword(auth, email.value, password.value, user.value)
        .then(userCredential => {
            window.location.hash('#Signup')

            alert('Sucesso! Conta criada!')

            return userCredential.user;
        })
        .catch((error) => {
            alert(getErrorMessage(error));

            alert('Ops! Algo deu errado, tente novamente')
        });

};
export function logout() {
    return signOut(auth)
};