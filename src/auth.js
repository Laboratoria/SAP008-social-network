import { app } from "./config.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

export function createAccount(email, password, name) {

    return createUserWithEmailAndPassword(auth, email, password, name)
        .then(userCredential => {
            const user = userCredential.user;
            return user;
        })
        .then(() => {
            updateProfile(auth.currentUser, {
              displayName: name,
            });
          })
        .catch((error) => {
            console.log(error)
            
        });
};

export function loginUser(email, password) {
   return signInWithEmailAndPassword(auth, email, password);
};

export function loginGoogle () {
    return signInWithPopup(auth, provider);
}


function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    return `Aconteceu um erro não identificado, por favor entre em contato com as desenvolvedoras e indique o código ${error.code}`;
};

export function logout() {
    return signOut(auth)
};