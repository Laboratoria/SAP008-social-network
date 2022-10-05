import {
    getAuth, // autenticação
    createUserWithEmailAndPassword, // criar usuário
    // signInWithEmailAndPassword, // fazer login
    // signOut, // sair da conta
    // GoogleAuthProvider, // entrar com o google
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import { app } from '../firebase.js'

const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
