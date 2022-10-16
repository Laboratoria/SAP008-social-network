import {
    getAuth, // autenticação
    createUserWithEmailAndPassword, // criar usuário
    // signInWithEmailAndPassword, // fazer login
    // signOut, // sair da conta
    // GoogleAuthProvider, // entrar com o Google
    // signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { app } from '../firebase.js';

const auth = getAuth(app);

export const createUser = (email, password) => {
    console.log(email);
    return createUserWithEmailAndPassword(auth, email, password);
};
