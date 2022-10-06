//aqui exportaras las funciones que necesites
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from './firebase.js';
import { app } from './configuration.js';


const auth = getAuth(app)

export const newUser = async (email, password) => {
  try {
    const newUserLocal = await createUserWithEmailAndPassword(auth, email, password)
    console.log(newUserLocal);
  }
  catch (error) {
    console.log(error)
  }
};

const provider = new GoogleAuthProvider();

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
