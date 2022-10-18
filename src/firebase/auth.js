import {
  getAuth, // autenticação
  createUserWithEmailAndPassword, // criar usuário
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { app } from './config.js';

export const auth = getAuth(app);

// eslint-disable-next-line max-len
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
