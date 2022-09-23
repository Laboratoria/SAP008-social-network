import { auth, signInWithEmailAndPassword} from "./auth.js";

export const loginEmailPassword = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
    }
    catch (error) {
        console.log(error);
    }
}

