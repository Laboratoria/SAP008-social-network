import { auth, loginGoogle, newUser } from '../../firebase/auth.js';
import { getErrorMessage } from '../../firebase/errors.js';
import { updateProfile } from '../../firebase/exports.js';
import { redirect } from '../../routes.js';
import { registerValidation } from '../../validations.js';
import { clearErrors } from '../../validations.js';

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
            <input type='name-signup' placeholder='Nome e sobrenome' id='name-signup' class='input-signup-name'/>
            </section>
            <p id='error-code' class='error-name'></p>
            <section class='inputs-signup'>
            <label for='email-signup' class='label'>E-mail</label>
            <input type='email-signup' placeholder='E-mail' id='signup-email' class='input-signup-email'/>
            </section>
            <p id='error-code' class='error-email'></p>
            <section class='inputs-signup'>
            <label for='passwordsignup'class='label'>Digite sua senha</label>
            <input type='password-signup' placeholder='****' id='signup-password' class='input-signup-password' />
            </section>
            <p id='error-code' class='error-password'></p>
            <p id='error-message'></p>  
            <section class='buttons-signup'>
            <button type='submit' class='btn-signup'>Cadastrar</button>
            <button type='submit' class='btn-google-signup'><img src='./imagens/google.svg'/>Cadastro com Google</button>
            </section>
        </form>
    `;

  container.innerHTML = template;

  const inputEmail = container.querySelector('.input-signup-email');
  const inputPassword = container.querySelector('.input-signup-password');
  const form = container.querySelector('.form-signup');
  const btnGoogle = container.querySelector('.btn-google-signup');
  const inputName = container.querySelector('.input-signup-name');
  const errorMessage = container.querySelector('#error-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const validation = registerValidation(
      inputName.value,
      inputEmail.value,
      inputPassword.value,
    );
    if (validation === null) {
      newUser(inputEmail.value, inputPassword.value, inputName.value)
        .then(() => updateProfile(auth.currentUser, {
          displayName: inputName.value,
        }))
        .then(() => {
          redirect('#timeline');
        })
        .catch((error) => {
          errorMessage.innerHTML = getErrorMessage(error);
        });
    } else {
      clearErrors();
      document.querySelector(`.error-${validation.src}`).innerHTML = validation.msg;
      document.querySelector(`.input-signup-${validation.src}`).classList.add('input-error');
    }
  });
  btnGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    await loginGoogle();
    redirect('#timeline');
  });
  return container;
};


