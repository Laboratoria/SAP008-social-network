import { loginGoogle, newUser } from '../../firebase/auth.js';
import { getErrorMessage } from '../../firebase/errors.js';
import { redirect } from '../../routes.js';

export default () => {
  const container = document.createElement('div');

  const template = `
      <figure class='img-logo-mobile imgFlip'>
          <img src='./imagens/logo-mobile.png' alt='logo'>
      </figure>

        <figure class='img-logo-desktop'>
          <img src='./imagens/logo-desktop.svg' alt='logo'>
        </figure>

        <form class='form-signup bounce'>
            <h1 class='title-signup'>Cadastre-se</h1>
            <section class='inputs-signup'>
            <label for='name-signup' class='label'>Nome completo</label>
            <input type='name-signup' placeholder='Nome e sobrenome' id='name-signup' class='input-name-signup' />
            <label for='email-signup' class='label'>E-mail</label>
            <input type='email-signup' placeholder='E-mail' id='signup-email' class='input-email-signup' />
            <label for='passwordsignup'class='label'>Digite sua senha</label>
            <input type='password-signup' placeholder='****' id='signup-password' class='input-password-signup' />
            </section>
            <p id='error-code'></p>
            <section class='buttons-signup'>
            <button type='submit' class='btn-signup'>Cadastrar</button>
            <button type='submit' class='btn-google-signup'><img src='./imagens/google.svg'/>Cadastro com Google</button>
            </section>
        </form>
    `;

  container.innerHTML = template;

  const inputEmail = container.querySelector('#signup-email');
  const inputPassword = container.querySelector('#signup-password');
  const form = container.querySelector('.form-signup');
  const btnGoogle = container.querySelector('.btn-google-signup');
  const errorMessage = container.querySelector('#error-code');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    newUser(inputEmail.value, inputPassword.value)
      .then(() => {
        redirect('#login');
      })
      .catch((error) => {
        errorMessage.innerHTML = getErrorMessage(error);
      });
  });
  btnGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    await loginGoogle();
    redirect('#login');
  });

  return container;
};
