export const getCurrentUser = () => firebase.auth().currentUser;

export const firestore = () => firebase.firestore().collection('posts');

export const updatePost = (updateButton, updateMovie, updateText) => {
  firebase.firestore().collection('posts').doc(updateButton)
    .update({
      movie: updateMovie,
      text: updateText,
    });
};

export const deletePost = (removeButtonId) => {
  firebase.firestore().collection('posts')
    .doc(removeButtonId)
    .delete();
};

export const likeFirebase = (id) => firestore().doc(id).update({
  like: firebase.firestore.FieldValue.increment(1),
})
  .then(() => true)
  .catch((error) => error);
