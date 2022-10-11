import { app } from '../../lib/configuration.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from '../../lib/firebase.js';
import { redirectFeed } from '../../lib/redirect.js';
import { logInUser } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const conteudo = createTemplate();
  container.innerHTML = conteudo;
  const btnGoogle = container.querySelector('#btn-google');
  initWithGoogle(btnGoogle);
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
        const errorMessage = error.message;
        return errorMessage;
      });

    return container;
  });
};

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
  <form class='form' id='form'>
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
    <button class='btnEntrar' id='btn-Login-User'>Entrar</button>
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
