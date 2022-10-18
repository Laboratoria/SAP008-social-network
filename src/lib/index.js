import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './exports.js';
import app from './config-firebase.js'

export function createUser(email, senha){
    const auth= getAuth(app)
    return createUserWithEmailAndPassword(auth, email, senha)
}

export function loginEmailPassword(email, password) {
    const auth= getAuth(app)
    return signInWithEmailAndPassword(auth, email, password);