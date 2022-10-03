//aqui exportaras las funciones que necesites
import { getAuth, createUserWithEmailAndPassword } from './firebase.js';
import { app } from './configuration.js';


const auth = getAuth(app)

export const newUser = async (email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    console.log(newUser);
  }
  catch (error) {
    console.log(error)
  }
};