/* eslint-disable max-len */

export const googleLogin = (provider) => firebase.auth().signInWithPopup(provider);

export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const recover = (email) => firebase.auth().sendPasswordResetEmail(email);

export const register = (email, password, username) => firebase.auth().createUserWithEmailAndPassword(email, password, username);

export const signOut = () => firebase.auth().signOut();
