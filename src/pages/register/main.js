import {
  registerWithEmailAndPassword,
  loginWithGoogle,
} from '../../lib/firebase-auth.js';

import {
  handleFirebaseErrors,
  validateRegisterForm,
} from '../../lib/validation.js';

export default () => {
  const registerContainer = document.createElement('div');
  const template = `
        <header id="return-btn" class="register-login-header display-flex">
          <a href="#homepage" class="return-btn" id="return-btn"><img class="return-btn" src="img/returnBtn.svg" alt="back arrow"></a>
          <img class="img-logo-register" src="img/Rebu.svg" alt="rebu logo">
        </header>

        <div class="gif-side-desktop" id="desktop-page">
          <video autoplay loop class="bg-gif-desktop">
            <source src="img/gifDesktop.mp4" type="video/mp4">
          </video>
          <img src="img/Rebu.svg" alt="Rebu Logo" class="rebu-logo-desktop">
        </div>

        <main class="register-content display-flex">

          <h1 class="text-desktop">CADASTRE-SE</h1>
          
          <form class="register-login display-flex">
              
              <h2 class="register-text">CADASTRAR</h2>
              <img class="signup-icons" src="img/icons/user-icon.png" alt="user icon">
              <input id="name-input" class="input-style register-name" type="text" placeholder="NOME">
              
              <img class="signup-icons" src="img/icons/email-icon.png" alt="email icon">
              <input id="register-input" class="input-style" type="email" placeholder="E-MAIL">
              
              <img class="signup-icons" src="img/icons/unlocked-icon.png" alt="password icon">
              <input type="password" id="password-register" class="input-style" placeholder="SENHA">
              
              <img class="signup-icons" src="img/icons/padlock-icon.png" alt="password locked icon"></img>
              <input type="password" id="password-register-confirm" class="input-style" placeholder="CONFIRME SUA SENHA">

              <p id="form-validation-messages" class="form-warning-messages hide"></p>

              <p id="firebase-warning-messages" class="form-warning-messages hide"></p>
              
              <button class="btn-register">CADASTRAR</button>
              <button class="btn-google-register display-flex"><img class="google-icon" src="img/icons/googleIcon.png" alt="google logo">CADASTRE-SE COM O GOOGLE</button>
              
              <a href="#login" class="link-text-login">JÁ POSSUI UMA CONTA? CONECTE-SE!</a>
              
          </form>

        </main>
  `;

  registerContainer.innerHTML = template;

  const name = registerContainer.querySelector('#name-input');
  const email = registerContainer.querySelector('#register-input');
  const password = registerContainer.querySelector('#password-register');
  const confirmPassword = registerContainer.querySelector('#password-register-confirm');
  const form = registerContainer.querySelector('.register-login');
  const btnGoogleRegister = registerContainer.querySelector('.btn-google-register');
  const formValidationMessages = registerContainer.querySelector('#form-validation-messages');
  const firebaseWarningMessages = registerContainer.querySelector('#firebase-warning-messages');
  const returnBtn = registerContainer.querySelector('#return-btn');

  returnBtn.addEventListener('click', () => window.history.back());

  function handleErrors(error) {
    const userFriendlyMessage = handleFirebaseErrors(error.code);
    firebaseWarningMessages.classList.remove('hide');
    formValidationMessages.classList.add('hide');
    firebaseWarningMessages.innerHTML = userFriendlyMessage;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValidation = validateRegisterForm(
      name.value,
      email.value,
      password.value,
      confirmPassword.value,
    );
    if (formValidation) {
      formValidationMessages.classList.remove('hide');
      formValidationMessages.innerHTML = formValidation;
    } else {
      registerWithEmailAndPassword(name.value, email.value, password.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          handleErrors(error);
        });
    }
  });

  btnGoogleRegister.addEventListener('click', () => {
    loginWithGoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        handleErrors(error);
      });
  });
  return registerContainer;
};
