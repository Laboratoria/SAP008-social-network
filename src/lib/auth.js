import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
} from './export.js';

import { auth, provider } from './config.js';

// função de cadastrar usuário //

export const register = (
  email,
  password,
  profileName,
) => createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    updateProfile(auth.currentUser, {
      displayName: profileName,
    });
  });

// função de login com email e senha //
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// função de login com o google //
export const signInGoogle = () => signInWithPopup(auth, provider);

// função de redefinição de senha //
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

// função de deslogar //
export const logout = () => {
  const logoutUser = auth.signOut();
  return logoutUser;
};
