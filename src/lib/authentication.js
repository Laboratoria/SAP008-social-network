/* eslint-disable max-len */

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const recover = (email) => firebase.auth().sendPasswordResetEmail(email);

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();
