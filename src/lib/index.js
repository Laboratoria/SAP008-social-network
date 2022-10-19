import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from './exports.js';
import app from './config-firebase.js';

const provider = new GoogleAuthProvider();

export function createUser(email, senha) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function loginEmailPassword(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
}

export function signInGoogle() {
  const auth = getAuth(app);
  return signInWithPopup(auth, provider);
}


