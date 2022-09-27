import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from '../../lib/index.js';

export default () => {
  const loginContainer = document.createElement('div');
  const template = `
    <header class="header-login display-flex">
        <a href="/#homepage" class="return-btn" id="return-btn"><img class="return-btn" src="img/returnBtn.png" alt="back arrow"></a>
        <h1><img class="img-logo-login" src="img/Rebu.png" alt="Rebu Logo"></h1>
    </header>

    <main id="login-page" class="login-page display-flex">

      <form class="login-form display-flex">

        <h2 class="login-text">ENTRAR</h2>
        <input type="email" placeholder="E-MAIL" id="email-input-login" class="input-text-login">
        <input type="password" placeholder="SENHA" id="password-input-login" class="input-text-login">

      </form>

      <a href="/#resetPassword" class="password-reset-login">ESQUECEU SUA SENHA? CLIQUE AQUI</a>

      <a href="/#feed"><button type="button" id="btn-login-page" class="btn-login">ENTRAR</button></a>

      <button class="btn-google-login display-flex" id="google-btn"><img class="google-icon" src="img/googleIcon.png" alt="google logo">ENTRE COM O GOOGLE</button>

      <a href="/#register" class="link-text-login">NÃO POSSUI UMA CONTA? CADASTRE-SE!</a>
    </main>

    <div class="desktop-login">
      <div class="gif-side-desktop" id="desktop-page">
        <video autoplay loop class="bg-gif-desktop">
          <source src="img/gifDesktop.mp4" type="video/mp4">
        </video>
        <img src="img/Rebu.png" alt="Rebu Logo" class="rebu-logo">
      </div>
      <main class="login-side-desktop">
        <h1 class="text-desktop">CONECTE-SE</h1>
        <form class="desktop-form">
          <input type="email" placeholder="E-MAIL" id="email-input-login" class="input-desktop">
          <input type="password" placeholder="SENHA" id="password-input-login" class="input-desktop">
          <a href="/#resetPassword" class="password-reset-login">ESQUECEU SUA SENHA? CLIQUE AQUI</a>
  
          <a href="/#feed"><button type="button" id="btn-login-page" class="btn-login-desktop btn-login">ENTRAR</button></a>
  
          <button class="btn-google-desktop display-flex" id="google-btn"><img class="google-icon" src="img/googleIcon.png" alt="google logo">ENTRE COM O GOOGLE</button>
  
          <a href="/#register" class="register-desktop">NÃO POSSUI UMA CONTA? CADASTRE-SE!</a>
        </form>
      </main>
  </div>
  `;
  loginContainer.innerHTML = template;

  const returnBtn = loginContainer.querySelector('#return-btn');
  returnBtn.addEventListener('click', () => window.location.replace('#homepage'));

  const inputEmail = loginContainer.querySelector('#email-input-login');
  const inputPasssword = loginContainer.querySelector('#password-input-login');
  const btnLogin = loginContainer.querySelector('#btn-login-page');
  // const btnResetPassword = loginContainer.querySelector('.password-reset-login');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(inputEmail.value, inputPasssword.value)
      .then(() => {
        // const user = userCredential.user; <- visualiza user
        window.location.hash = '#feed';
      })
      .catch((/* error */) => {
        /* const errorCode = error.code;
        const errorMessage = error.message; */
      });
  });

  const googleBtn = loginContainer.querySelector('#google-btn');

  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((/* error */) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
  return loginContainer;
};
