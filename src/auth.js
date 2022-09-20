import { app } from "./config.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/6.3.2/firebase-auth.js"

export const auth = getAuth(app);

export function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        }).catch((error) => {
        });
    const user = userCredential.user;
    return user;
}