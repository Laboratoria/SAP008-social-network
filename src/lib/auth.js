import { app } from './configuration.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, collection, addDoc, getFirestore, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from './firebase.js';


const auth = getAuth(app)
const provider = new GoogleAuthProvider(app);
export const dataBase = getFirestore(app);

export const newUser = async (email, password) => { // função criar usuário
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  catch (error) {
    console.log(error)
  }
};

export const googleAccess = async () => { // função acessar com google
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const create = async (displayName, createEmail, createPassword) => { // função criar novo dado (nome)

  try {
    const docRef = await addDoc(collection(dataBase, "Users"), {
      name: displayName,
      email: createEmail,
      password: createPassword

    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
      console.log(error);
  }
};

export function loginUser(email, password) { // função login
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    });
  };

export function logoutUser() { // função logout
  signOut(auth).then(() => {
    window.location.hash = '#entrar';
  }).catch((error) => error);
};
