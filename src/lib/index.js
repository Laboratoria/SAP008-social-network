import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getFirestore} from './exports.js';
import app from './config-firebase.js';

const provider = new GoogleAuthProvider();
const db = getFirestore(app); 
const auth = getAuth(app);

export function createUser(email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function loginEmailPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signInGoogle() {
  return signInWithPopup(auth, provider);
}


