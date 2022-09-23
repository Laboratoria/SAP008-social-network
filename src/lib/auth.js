import { app } from "./firebase.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };

