import { app } from './configuration.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, collection, addDoc, getFirestore, signInWithEmailAndPassword, signOut, updateProfile
} from './firebase.js';


export const auth = getAuth(app)
export const dataBase = getFirestore(app);
const provider = new GoogleAuthProvider(app);
//export const user = auth.currentUser;
//const uid = user.uid;


export const newUser = async (email, password, name) => { // função criar usuário
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser, {
      displayName: name,
    })

  }
  catch (error) {
    throw error
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

export const create = async (local, adress, review) => { // função criar novo dado (nome)

  try {
    const docRef = await addDoc(collection(dataBase, 'Posts' ), {
      nomeRest: local,
      endRest: adress,
      critica: review

    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    throw error;
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

