/* eslint-disable max-len */

export const googleLogin = (provider) => firebase.auth().signInWithPopup(provider);

export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const register = (email, password, username) => firebase.auth().createUserWithEmailAndPassword(email, password, username);

export const signOut = () => firebase.auth().signOut();

export const getDisplayName = () => firebase.auth().currentUser.displayName;

export const getUserUid = () => firebase.auth().currentUser.uid;

export const getPhotoUser = () => firebase.auth().currentUser.photoURL;

export const firestore = () => firebase.firestore().collection('posts');

export const createCollection = (postCollection) => firebase.firestore().collection('posts').add(postCollection);
// teste commit;
// teste commit;
