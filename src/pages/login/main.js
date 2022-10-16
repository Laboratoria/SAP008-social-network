import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from '../../lib/index.js';

import {
  handleFirebaseErrors,
  validateLoginForm,
} from '../../lib/validation.js';

export default () => {
  const loginContainer = document.createElement('div');
  const template = `
    <header class="header-login display-flex">
        <a href="#homepage" class="return-btn" id="return-btn"><img class="return-btn" src="img/returnBtn.svg" alt="back arrow"></a>
        <h1><img class="img-logo-login" src="img/Rebu.svg" alt="Rebu Logo"></h1>
    </header>

    <div class="gif-side-desktop" id="desktop-page">
        <video autoplay loop class="bg-gif-desktop">
          <source src="img/gifDesktop.mp4" type="video/mp4">
        </video>
        <img src="img/Rebu.svg" alt="Rebu Logo" class="rebu-logo-desktop">
    </div>

    
    <main id="login-page" class="login-page display-flex">
    
      <h1 class="text-desktop">CONECTE-SE</h1>

      <form class="login-form display-flex">

        <h2 class="login-text">ENTRAR</h2>
        <input type="email" placeholder="E-MAIL" id="email-input-login" class="input-text-login">
        <input type="password" placeholder="SENHA" id="password-input-login" class="input-text-login">

        <p id="form-validation-messages" class="form-warning-messages hide"></p>
        <p id="firebase-warning-messages" class="form-warning-messages hide"></p>

        <a href="#resetPassword" class="password-reset-login">ESQUECEU SUA SENHA? CLIQUE AQUI</a>
  
        <button id="btn-login-page" class="btn-login">ENTRAR</button>
  
        <a href="#register" class="link-text-login">NÃO POSSUI UMA CONTA? CADASTRE-SE!</a>

        <button class="btn-google-login display-flex" id="google-btn"><img class="google-icon" src="img/icons/googleIcon.png" alt="google logo">ENTRE COM O GOOGLE</button>

      </form>

    </main>
  `;
  loginContainer.innerHTML = template;

  const email = loginContainer.querySelector('#email-input-login');
  const password = loginContainer.querySelector('#password-input-login');
  const btnLogin = loginContainer.querySelector('#btn-login-page');
  const formValidationMessages = loginContainer.querySelector('#form-validation-messages');
  const firebaseWarningMessages = loginContainer.querySelector('#firebase-warning-messages');
  const returnBtn = loginContainer.querySelector('#return-btn');

  returnBtn.addEventListener('click', () => window.history.back());

  btnLogin.addEventListener('click', () => {
    const formValidation = validateLoginForm(email.value, password.value);
    if (formValidation) {
      formValidationMessages.classList.remove('hide');
      firebaseWarningMessages.classList.add('hide');
      formValidationMessages.innerHTML = formValidation;
    } else {
      loginWithEmailAndPassword(email.value, password.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          const userFriendlyMessage = handleFirebaseErrors(error.code);
          firebaseWarningMessages.classList.remove('hide');
          formValidationMessages.classList.add('hide');
          firebaseWarningMessages.innerHTML = userFriendlyMessage;
        });
    }
  });

  const googleBtn = loginContainer.querySelector('#google-btn');

  googleBtn.addEventListener('click', () => {
    loginWithGoogle()
      .catch((error) => error);
  });

  return loginContainer;
};
