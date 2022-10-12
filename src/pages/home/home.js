/* eslint-disable no-console */
/* eslint-disable no-alert */
import { redirectFeed } from '../../lib/redirect.js';
import { logInUser, signInWithGoogle } from '../../lib/auth.js';

function createTemplate() {
  return `
  <div class='container' id='template-form'>
    <form class='form' id='form'>
      <img class='logo' alt='Logo Wanderlust'>
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
    <p class='form'>
      <button class='btnEntrar' id='btn-Login-User'>Entrar</button>
    </p>
    <p class='form'>
      <a href='#paracadastro' class='cadastre'>Cadastre-se</a>
    </p>
    <p class='form'>
      Entre também com:
    </p>
    <p class='form'>
      <button class='loginGoogle' id='btn-google' class='imgGoogle'> Google</button>
    </p>
    <p class='form'>
      <a href='#sobre' class='sobrepage'>Sobre</a>
    </p>
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

  btnlogin.addEventListener('click', (e) => {
    e.preventDefault();
    logInUser(inputEmail.value, inputSenha.value)
      .then(() => {
        redirectFeed();
      })
      .catch((error) => {
        alert('Algo deu errado', error);
      });
  });
  btnGoogle.addEventListener('click', signInWithGoogle);
  return container;
};
