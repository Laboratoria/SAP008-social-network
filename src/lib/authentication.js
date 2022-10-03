import { showErrors } from '../errors.js';

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

export const googleLogin = (provider) => {
  firebase.auth().signInWithPopup(provider).then((result) => {
    const credential = provider.credentialFromResult(result);
    const user = result.user;
    const token = credential.accessToken;
    localStorage.setItem('token', token);
    firebase.firestore().collection('users').doc(user.email).set(
      {
        email: user.email, image: user.photoURL, name: user.displayName, uid: user.uid,
      },
      { merge: true },
    );
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode) {
      showErrors(error);
    } else window.location.replace('#page');
  });
};

export const login = (email, password) => {
  if (!email) {
    // eslint-disable-next-line no-multi-assign
    document.querySelector('.login-error-div').innerHTML = 'Por favor, digite o endereço de email.';
  } else if (!password) {
    document.querySelector('.login-error-div').innerHTML = 'Por favor, digite sua senha.';
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.replace('#page');
      })
      .catch((error) => {
        showErrors(error);
      });
  }
};

export const recover = (email) => {
  firebase.auth().sendPasswordResetEmail(email).then(() => {
    alert('E-mail enviado com sucesso');
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode) {
      showErrors(error);
    }
  });
};

export const register = (email, password, userName) => {
  // eslint-disable-next-line max-len
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user.updateProfile({ displayName: userName });
    })
    .then(() => {
      window.location.replace('#page');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        document.querySelector('.register-error').innerHTML = 'E-mail já cadastrado. Insira um e-mail diferente.';
      } else if (errorCode === 'auth/invalid-email') {
        document.querySelector('.register-error').innerHTML = 'E-mail inválido';
      } else {
        document.querySelector('.register-error').innerHTML = 'Algo deu errado. Por favor, tente novamente.';
      }
    });
};
