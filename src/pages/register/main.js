import {
  registerWithEmailAndPassword,
  loginWithGoogle,
} from '../../lib/index.js';

export default () => {
  const registerContainer = document.createElement('div');
  const template = `
        <header id="return-btn" class="register-login-header display-flex">
        <a href="/#homepage" class="return-btn" id="return-btn"><img class="return-btn" src="img/returnBtn.png" alt="back arrow"></a>
            <h1><img class="img-logo-register" src="img/Rebu.png" alt="rebu logo"></h1>
        </header>
        <main class="register-content display-flex">
            <form class="register-login display-flex">
                <legend class="register-text">CADASTRAR</legend>
                <img class="signup-icons" src="img/user-icon.png" alt="user icon"></img>
                <input id="name-input" class="input-style register-name" type="text" placeholder="NOME">
                <img class="signup-icons" src="img/email-icon.png" alt="email icon"></img>
                <input id="register-input" class="input-style" type="email" placeholder="E-MAIL">
                <img class="signup-icons" src="img/unlocked-icon.png" alt="password icon"></img>
                <input type="password" id="password-register" class="input-style" placeholder="SENHA">
                <img class="signup-icons" src="img/padlock-icon.png" alt="password locked icon"></img>
                <input type="password" id="password-register-confirm" class="input-style" placeholder="CONFIRME SUA SENHA">
            </form>
            <input type="submit" class="btn-register" value="CADASTRAR">
            <button class="btn-google-register display-flex"><img class="google-icon" src="img/googleIcon.png" alt="google logo">CADASTRE-SE COM O GOOGLE</button>
        </main>
    `;

  registerContainer.innerHTML = template;

  const returnBtn = registerContainer.querySelector('#return-btn');
  returnBtn.addEventListener('click', () => window.location.replace('#homepage'));

  const inputName = registerContainer.querySelector('#name-input');
  const inputEmail = registerContainer.querySelector('#register-input');
  const inputPassword = registerContainer.querySelector('#password-register');
  // const inputConfirmPassword = registerContainer.querySelector('#password-register-confirm');
  const btnRegister = registerContainer.querySelector('.btn-register');
  const btnGoogleRegister = registerContainer.querySelector('.btn-google-register');

  btnRegister.addEventListener('click', () => {
    registerWithEmailAndPassword(inputName.value, inputEmail.value, inputPassword.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((/* error */) => {
      /* aqui a gente trata os erros por ex campo vazio ou senha menor que 6 digitos
      const errorCode = error.code;
        const errorMessage = error.message; */
      });
  });

  btnGoogleRegister.addEventListener('click', () => {
    loginWithGoogle()
      .then((/* result */) => {
        window.location.hash = '#feed';
      })
      .catch((/* error */) => {
        /* const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error); */
      });
  });

  return registerContainer;
};
