import { getAuth, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, collection, addDoc, getFirestore, onAuthStateChanged, signInWithEmailAndPassword } from './firebase.js';
import { app } from './configuration.js';


const auth = getAuth(app)

export const newUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  catch (error) {
    console.log(error)
  }
};

const provider = new GoogleAuthProvider(app);

export const googleAccess = async () => {
  signInWithPopup(auth, provider)
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
}

export const dataBase = getFirestore(app);

export const create = async () => {
  const signInName = document.querySelector('#name');
  const signInEmail = document.querySelector('#email');
  const signInPassword = document.querySelector('#password');
  try {
    const docRef = await addDoc(collection(dataBase, "Users"), {
      name: signInName.value,
      email: signInEmail.value,
      password: signInPassword.value

    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};
