export const getDisplayName = () => firebase.auth().currentUser.displayName;

export const getUserUid = () => firebase.auth().currentUser.uid;

export const getPhotoUser = () => firebase.auth().currentUser.photoURL;

export const firestore = () => firebase.firestore().collection('posts');

// export const updatePost = (updateButton, updateMovie, updateText) => {
//   firebase.firestore().collection('posts').doc(updateButton)
//     .update({
//       movie: updateMovie,
//       text: updateText,
//     });
// };

// export const deletePost = (removeButtonId) => {
//   firebase.firestore().collection('posts')
//     .doc(removeButtonId)
//     .delete();
// };

export const likeFirebase = (id) => firestore().doc(id).update({
  like: firebase.firestore.FieldValue.increment(1),
})
  .then(() => true)
  .catch((error) => error);
