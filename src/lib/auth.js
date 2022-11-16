import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from './exports';

import {
  app,
} from './config.js';

export const auth = getAuth(app);

export const createUser = async (email, password) => {
  const signinUser = await createUserWithEmailAndPassword(auth, email, password);
  return signinUser.user;
};

export const signIn = async (email, password) => {
  const useCredential = await signInWithEmailAndPassword(auth, email, password);
  return useCredential.user;
};

export function logout() {
  return signOut(auth);
}
