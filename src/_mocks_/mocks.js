export const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.pathname = '#page';
    })
    .catch(() => {
      // alert('Ops! Não foi possível acessar. Tente novamente mais tarde.');
    });
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#page';
    })
    .catch(() => {
      // alert('Ops! Não foi possível acessar. Tente novamente mais tarde.');
    });
};
