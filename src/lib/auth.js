import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase.js';
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

export const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};

// export const loginUser = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     console.log('entrou')
//   }
//   catch (error) {
//     console.log(error)
//   }
// };
