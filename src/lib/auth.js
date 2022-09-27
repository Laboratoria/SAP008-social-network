import { app } from "./firebase.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    console.log(user)
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});

const loginEmailPassword = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
    }
    catch (error) {
        console.log(error);
    }
}

const createAccount = async (email, password) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);

    }
    catch (error) {
        console.log(error)
    }
}

const logout = async () => {
    await signOut(auth);
}

const provider = new GoogleAuthProvider;
const signInGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}


export { auth, loginEmailPassword, createAccount, logout, signInGoogle};


