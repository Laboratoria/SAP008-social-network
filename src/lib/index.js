// aqui exportaras las funciones que necesites
import { getAuth, createUserWithEmailAndPassword } from './firebase.js';
import { app } from './configuration.js';
import { async } from 'regenerator-runtime';

const auth = getAuth(app)

export const addUser = async (email, password) => {
  try { const newUser = await createUserWithEmailAndPassword (auth, email, password)
  console.log(newUser);
  }
  catch(error){
  console.log(error)
  }
};