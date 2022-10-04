export const getDisplayName = () => firebase.auth().currentUser.displayName;

export const getUserUid = () => firebase.auth().currentUser.uid;

export const getPhotoUser = () => firebase.auth().currentUser.photoURL;

export const firestore = () => firebase.firestore().collection('posts');

export const updatePost = (id, updateMovie, updateText) => firebase.firestore().collection('posts').doc(id).update({ movie: updateMovie, text: updateText });

export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

// eslint-disable-next-line max-len
export const likeFirebase = (id) => firestore().doc(id).update({ like: firebase.firestore.FieldValue.increment(1) }).then(() => true)
  .catch((error) => error);

export const createCollection = (postCollection) => firebase.firestore().collection('posts').add(postCollection);

export const createForm = () => firebase.firestore().collection('posts').get();
