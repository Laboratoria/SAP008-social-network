import {
  registerWithEmailAndPassword,
  loginWithGoogle,
} from '../../lib/index.js';

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
              <p id="name-message" class="warning-message hide"></p>
              
              <img class="signup-icons" src="img/email-icon.png" alt="email icon"></img>
              <input id="register-input" class="input-style" type="email" placeholder="E-MAIL">
              <p id="email-message" class="warning-message hide"></p>
              
              <img class="signup-icons" src="img/unlocked-icon.png" alt="password icon"></img>
              <input type="password" id="password-register" class="input-style" placeholder="SENHA">
              <p id="password-message" class="warning-message hide"></p>
              
              <img class="signup-icons" src="img/padlock-icon.png" alt="password locked icon"></img>
              <input type="password" id="password-register-confirm" class="input-style" placeholder="CONFIRME SUA SENHA">
              <p id="confirm-password-message" class="warning-message hide"></p>
              
              <input type="submit" class="btn-register" value="CADASTRAR">
              <button type="button" class="btn-google-register display-flex"><img class="google-icon" src="img/googleIcon.png" alt="google logo">CADASTRE-SE COM O GOOGLE</button>
              
              <a href="/#login" class="link-text-login">JÁ POSSUI UMA CONTA? CONECTE-SE!</a>
              
          </form>

        </main>
  `;

  registerContainer.innerHTML = template;

  const returnBtn = registerContainer.querySelector('#return-btn');
  returnBtn.addEventListener('click', () => window.location.replace('#homepage'));
  const name = registerContainer.querySelector('#name-input');
  const email = registerContainer.querySelector('#register-input');
  const password = registerContainer.querySelector('#password-register');
  const confirmPw = registerContainer.querySelector('#password-register-confirm');
  const form = registerContainer.querySelector('.register-login');
  const btnGoogleRegister = registerContainer.querySelector('.btn-google-register');
  const nameErrorMessage = registerContainer.querySelector('#name-message');
  const confirmPwErrorMessage = registerContainer.querySelector('#confirm-password-message');
  // const emailErrorMessage = registerContainer.querySelector('#email-message');
  const passwordErrorMessage = registerContainer.querySelector('#password-message');

  /* function handleErrors(errorCode) {
    let errorMessage;
    switch (errorCode) {
      case 'auth/email-already-in-use':
        errorMessage = 'Este e-mail já foi registrado.';
        emailErrorMessage.classList.remove('hide');
        emailErrorMessage.innerHTML = errorMessage;
        break;
      case 'auth/invalid-email':
        errorMessage = 'Endereço de e-mail inválido.';
        emailErrorMessage.classList.remove('hide');
        emailErrorMessage.innerHTML = errorMessage;
        break;
      case 'auth/weak-password':
        errorMessage = 'Sua senha deve ter, pelo menos, 6 dígitos.';
        passwordErrorMessage.classList.remove('hide');
        passwordErrorMessage.innerHTML = errorMessage;
        break;
      default:
        alert('Confira se todos os campos foram preenchidos');
    }
  } */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (name.value !== ''
      && confirmPw.value !== ''
      && password.value === confirmPw.value) {
      registerWithEmailAndPassword(name.value, email.value, password.value)
        .then(() => {
          // const errorCode = response.code;
          // console.log(response.code);
          // if (errorCode) {
          //   return handleErrors(errorCode);
          // }
          window.location.hash = '#feed';
          // alert('Bem-vinda ao Rebu');
        })
        .catch((/* error */) => {
          // console.log(error);
        });
    } else {
      if (name.value === '') {
        nameErrorMessage.classList.remove('hide');
        nameErrorMessage.innerHTML = 'Por favor, digite seu nome.';
      }
      if (password.value.length < 6) {
        passwordErrorMessage.classList.remove('hide');
        passwordErrorMessage.innerHTML = 'Sua senha deve ter, no mínimo, 6 dígitos.';
      }
      if (password.value === '') {
        confirmPwErrorMessage.classList.remove('hide');
        confirmPwErrorMessage.innerHTML = 'Por favor, digite sua senha';
      }
      if (confirmPw.value === '') {
        confirmPwErrorMessage.classList.remove('hide');
        confirmPwErrorMessage.innerHTML = 'Por favor, confirme sua senha';
      }
      if (password.value !== confirmPw.value) {
        confirmPwErrorMessage.classList.remove('hide');
        confirmPwErrorMessage.innerHTML = 'Senhas não conferem.';
      }
    }
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
