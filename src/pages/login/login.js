import { loginUser, loginGoogle } from '../../firebase/auth.js';
import { getErrorMessage } from '../../firebase/errors.js';
import { newPost } from '../../firebase/timeline.js';

export default () => {
  const container = document.createElement('div');

  const template = `
        <figure class='img-logo-mobile imgFlip'>
            <img src='./imagens/logo-mobile.png' alt='logo'>
        </figure>

        <main class='container-main-login'>
          <figure class='img-logo-desktop'>
            <img src='./imagens/logo-desktop.svg' alt='logo'>
          </figure>

          <form id='form' class='form-login bounce'>
            <h1 class='title-login'>Acesse a sua conta</h1>
            <section class='inputs'>
              <label for='email' class='label'>Digite seu e-mail</label>
              <input type='email' placeholder='seuemail@gmail.com' id='email' class='input-email' />
            </section>

            <section class='inputs'>
              <label for='password' class='label'>Digite sua senha</label>
              <input type='password' placeholder='******' id='password' class='input-password' />
            </section>
            <p id='error-code'></p>
            <section class='buttons'>
              <button type='submit' class='btn-login'>Iniciar Sessão</button>
              <button type='submit' class='btn-google'><img class='img-google' src='./imagens/google.svg'/> Entrar com Google</button>
            </section>

            <h6 class='text'> Não possui conta?</h6>
            <button type='submit' class='btn-register'>Criar nova conta</button>
            </form>   
          </main>     
    `;

  container.innerHTML = template;

  const form = container.querySelector('#form');
  const buttonRegister = container.querySelector('.btn-register');
  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const buttonGoogle = container.querySelector('.btn-google');
  const errorMessage = container.querySelector('#error-code');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    loginUser(inputEmail.value, inputPassword.value)
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        errorMessage.innerHTML = getErrorMessage(error);
      });
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#signup';
  });

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => error);
  });

  return container;
};
