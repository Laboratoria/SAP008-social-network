import {
  registerWithEmailAndPassword,
  loginWithGoogle,
} from '../../lib/index.js';

import {
  handleFirebaseErrors,
  validateRegisterForm,
} from '../../lib/validation.js';

export default () => {
  const registerContainer = document.createElement('div');
  const template = `
        <header id="return-btn" class="register-login-header display-flex">
          <a href="/#homepage" class="return-btn" id="return-btn"><img class="return-btn" src="img/returnBtn.png" alt="back arrow"></a>
          <img class="img-logo-register" src="img/Rebu.png" alt="rebu logo">
        </header>

        <div class="gif-side-desktop" id="desktop-page">
          <video autoplay loop class="bg-gif-desktop">
            <source src="img/gifDesktop.mp4" type="video/mp4">
          </video>
          <img src="img/Rebu.png" alt="Rebu Logo" class="rebu-logo-desktop">
        </div>

        <main class="register-content display-flex">

          <h1 class="text-desktop">CADASTRE-SE</h1>
          
          <form class="register-login display-flex">
              
              <h2 class="register-text">CADASTRAR</h2>
              <img class="signup-icons" src="img/user-icon.png" alt="user icon"></img>
              <input id="name-input" class="input-style register-name" type="text" placeholder="NOME">
              
              <img class="signup-icons" src="img/email-icon.png" alt="email icon"></img>
              <input id="register-input" class="input-style" type="email" placeholder="E-MAIL">
              
              <img class="signup-icons" src="img/unlocked-icon.png" alt="password icon"></img>
              <input type="password" id="password-register" class="input-style" placeholder="SENHA">
              
              <img class="signup-icons" src="img/padlock-icon.png" alt="password locked icon"></img>
              <input type="password" id="password-register-confirm" class="input-style" placeholder="CONFIRME SUA SENHA">

              <p id="form-validation-messages" class="form-warning-messages hide"></p>

              <p id="firebase-warning-messages" class="form-warning-messages hide"></p>
              
              <input type="submit" class="btn-register" value="CADASTRAR">
              <button type="button" class="btn-google-register display-flex"><img class="google-icon" src="img/googleIcon.png" alt="google logo">CADASTRE-SE COM O GOOGLE</button>
              
              <a href="/#login" class="link-text-login">JÁ POSSUI UMA CONTA? CONECTE-SE!</a>
              
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

  returnBtn.addEventListener('click', () => window.location.replace('#homepage'));

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
        .catch((error) => {
          const userFriendlyMessage = handleFirebaseErrors(error.code);
          firebaseWarningMessages.classList.remove('hide');
          formValidationMessages.classList.add('hide');
          firebaseWarningMessages.innerHTML = userFriendlyMessage;
        });
    }
  });

  btnGoogleRegister.addEventListener('click', () => {
    loginWithGoogle()
      .catch((/* error */) => {
        /* const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error); */
      });
  });
  return registerContainer;
};
