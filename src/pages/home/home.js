/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import { app } from '../../lib/configuration.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from '../../lib/firebase.js';
import { redirectFeed } from '../../lib/redirect.js';
import { logInUser } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const conteudo = createTemplate();
  container.innerHTML = conteudo;
  const formLogin = container.querySelector('#form');
  const inputEmail = container.querySelector('#email-login').value;
  const inputSenha = container.querySelector('#senha-login').value;
  const btnlogin = container.querySelector('#btn-Login-User');
  const btnGoogle = container.querySelector('#btn-google');
  initWithGoogle(btnGoogle);
  logInUser(formLogin, btnlogin, inputEmail, inputSenha);
  return container;
};

function LoginUserFeed(btnlogin, email, password) {
  btnlogin.addEventListener('click', (e) => {
    e.preventDefault(app);
    logInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        redirectFeed();
      })
      .cath((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  });
}

function initWithGoogle(btnGoogle) {
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault(app);
    const authgoogle = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(authgoogle, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        redirectFeed();
      })
      .catch((error) => {
        alert('Ops confira seus dados!');
      });
  });
}

function createTemplate() {
  return `
  <div class='container' id='template-form'>
  <form class='form' id="form">
    <img src='img/logo.png' class='logo' alt='Logo Wanderlust'>
    <p class='register'>
      <label for='email-login' >Email:</label>
      <input id='email-login' class='emailSenha' name='email-login' required='required' type='text' placeholder='Digite seu email'/>
    </p>
    <p class='register'>
      <label for='senha-login'>Senha:</label>
      <input id='senha-login' class='emailSenha' name='senha-login' required='required' type='password' placeholder='Digite sua senha'/>
    </p>
    <p class='register'>
      <a href='#recuperarsenha' class='esqueciSenhaCadastre'>Esqueci minha senha!</a>
    </p>
  </form>
  <p class='register'>
    <input type='submit' id="btn-Login-User" value='Entrar' class='btnEntrar'/>
  </p>
  <p class='register'>
    <a href='#paracadastro' class='cadastre'>Cadastre-se</a>
  </p>
  <p class='textGoogle'>Entre também com:</p>
  <p class='textGoogle'>
    <button class='loginGoogle' id='btn-google' class='imgGoogle'> Google</button>
  </p>
  <p>
  <a href='#sobre' class='sobrepage'>Sobre</a>
  </p>`;
}
