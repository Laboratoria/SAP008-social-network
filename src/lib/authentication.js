export const googleLogin = (provider) => {
  firebase.auth().signInWithPopup(provider).then((result) => {
    const credential = provider.credentialFromResult(result);
    const user = result.user;
    const token = credential.accessToken;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    firebase.firestore().collection('users').doc(user.email).set(
      {
        email: user.email, image: user.photoURL, name: user.displayName, uid: user.uid,
      },
      { merge: true },
    );
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/popup-closed-by-user') {
      alert('A janela pop-up foi fechada pelo usuário sem concluir o login no provedor');
    } else window.location.replace('#page');
  });
};

export const login = (email, password) => {
  if (!email) {
    alert('Por favor, digite o endereço de email.');
  } else if (!password) {
    alert('Por favor, digite sua senha.');
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.replace('#page');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          alert('Endereço de email não é válido');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Não há nenhum usuário correspondente ao e-mail fornecido.');
        } else if (errorCode === 'auth/wrong-password') {
          alert('A senha é inválida para o e-mail fornecido.');
        } else {
          alert('Algo deu errado. Por favor, tente novamente.');
        }
      });
  }
};

export const recover = (email) => {
  firebase.auth().sendPasswordResetEmail(email).then(() => {
    alert('Email enviado com sucesso');
  }).catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/invalid-email') {
      alert('E-mail inválido');
    } else {
      alert('Algo deu errado. Por favor, tente novamente.');
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
        alert('E-mail já cadastrado, insira um e-mail diferente');
      } else if (errorCode === 'auth/invalid-email') {
        alert('E-mail inválido');
      } else {
        alert('Algo deu errado. Por favor, tente novamente.');
      }
    });
};
