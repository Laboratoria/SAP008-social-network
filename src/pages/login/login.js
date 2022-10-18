/* eslint-disable no-return-assign */
import { loginUser, googleAccess, auth } from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  if (auth.currentUser === true) {
    window.location.hash = '#home';
  } else {
    const container = document.createElement('div');
    const template = `<section class="container">
      <div class="frame">
        <h1 class="titles">Entrar no<br>BatePrato</h1>
  
        <button id="google-login" class="signin-btn">Entrar com Google <img  class="google-icon" src="./external/svg/google-icon.svg"/></button>
  
        <div class="lines">
          <hr style="margin-right: 5%">
          <p>ou</p>
          <hr style="margin-left: 5%">
        </div>
        <form class="form-login">
          <input type="text" id="email" class="email-login" placeholder="E-mail"><br>
          <p id="msg-error"></p>
          <div>
            <input type="password" id="password" class="pswd-login" placeholder="Senha">
            <button id="ok-login-btn">OK</button><br>
          </div>
        </form>
        <p class="instructions">Não tem uma conta?<a id="first-page" class="cta"href="/#cadastre-se"> Cadastre-se</a></p>
      </div>
      <div class="logo"></div>
    </section>`;

    container.innerHTML = template;

    const googleBtn = container.querySelector('#google-login');
    const logInEmail = container.querySelector('#email');
    const logInPassword = container.querySelector('#password');
    const loginBtn = container.querySelector('#ok-login-btn');
    const pMsg = container.querySelector('#msg-error');

    googleBtn.addEventListener('click', () => {
      googleAccess().then(() => {
        window.location.hash = '#home';
      });
    });

    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (logInEmail !== '' || logInPassword !== '') {
        await loginUser(logInEmail.value, logInPassword.value)
          .then((user) => {
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userId', user.uid);
            window.location.hash = '#home';
          })
          // eslint-disable-next-line consistent-return
          .catch((error) => {
            const errorMessage = error.message;
            if (logInEmail.value === '' || logInPassword.value === '') {
              return pMsg.innerHTML = 'Todos os campos devem ser preenchidos';
            }
            if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
              return pMsg.innerHTML = 'Usuário não cadastrado';
            }
            if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
              return pMsg.innerHTML = 'E-mail inválido';
            }
            if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
              return pMsg.innerHTML = 'Senha inválida';
            }
          });
      }
    });

    return container;
  }
};
