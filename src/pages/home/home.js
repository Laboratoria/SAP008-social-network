/* eslint-disable no-console */
/* eslint-disable no-alert */
import { redirectFeed } from '../../lib/redirect.js';
import { logInUser, signInWithGoogle } from '../../lib/auth.js';
import { errorFire } from '../../lib/errorFirebase.js';

function createTemplate() {
  return `
  <div class='container' id='template-form'>
    <div class='boxModelForm'>
      <form class='form' id='form'>
        <img class='logo' src='../../img/logoTranp.png' alt='Logo Wanderlust'>
        <p class='register'>
          <input id='email-login' class='emailSenha' name='email-login' required='required' type='text' placeholder='Digite seu email'/>
        </p>
        <p class='register'>
          <input id='senha-login' class='emailSenha' name='senha-login' required='required' type='password' placeholder='Digite sua senha'/>
        </p>
        <p>
          <div id='erro-Firebase' class='msgErro'></div>
        </p>
        <p class='register'>
          <a href='#recuperarsenha' class='esqueciSenhaCadastre'>Esqueci minha senha!</a>
        </p>
      </form>
      <p class='form'>
        <button class='btnEntrar' id='btn-Login-User'>Entrar</button>
      </p>
      <p class='form'>
        <a href='#paracadastro' class='cadastre'>Cadastre-se</a>
      </p>
      <p class='form'>
        <div class='textEntrarGlg'>Entre também com:</div>
      </p>
      <p class='form'>
        <a class='loginGoogle' id='btn-google'><img src='../../img/logoGoogle.jpg' alt='Logo Google'></a>
      </p>
      <p class='form'>
        <div class='sectionSobre'>
          <a href='#sobre' class='sobrepage'>Sobre</a>
        </div>
      </p>
    </div> 
  </div> `;
}

export default () => {
  const container = document.createElement('div');
  const conteudo = createTemplate();
  container.innerHTML = conteudo;
  const btnGoogle = container.querySelector('#btn-google');
  const inputEmail = container.querySelector('#email-login');
  const inputSenha = container.querySelector('#senha-login');
  const btnlogin = container.querySelector('#btn-Login-User');
  const msgFire = container.querySelector('#erro-Firebase');

  btnlogin.addEventListener('click', (e) => {
    e.preventDefault();
    logInUser(inputEmail.value, inputSenha.value)
      .then(() => {
        redirectFeed();
      })
      .catch((error) => {
        const errorCode = errorFire(error.code);
        msgFire.innerHTML = errorCode;
      });
  });

  btnGoogle.addEventListener('click', () => {
    signInWithGoogle()
      .then(() => {
        redirectFeed();
      })
      .catch((error) => {
        const errorCode = errorFire(error.code);
        msgFire.innerHTML = errorCode;
      });
  });
  return container;
};
