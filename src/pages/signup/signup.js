import { loginGoogle, newUser } from '../../firebase/auth.js';
import { getErrorMessage } from '../../firebase/errors.js';
import { redirect } from '../../routes.js';
import { validationRegister } from '../../validations.js';

export default () => {
  const container = document.createElement('div');

  const template = `
      <figure class='img-logo-mobile imgFlip'>
          <img src='./imagens/espectro-mobile.svg' alt='logo'>
      </figure>

        <figure class='img-logo-desktop'>
          <img src='./imagens/espectro-desktop.svg' alt='logo'>
        </figure>

        <form class='form-signup bounce'>
            <h1 class='title-signup'>Cadastre-se</h1>
            <section class='inputs-signup'>
            <label for='name-signup' class='label'>Nome completo</label>
            <input type='name-signup' placeholder='Nome e sobrenome' id='name-signup' class='input-signup-name'/>
            </section>
            <p id='error-code' class='error-name'></p>
            <section class='inputs-signup'>
            <label for='signup-email' class='label'>E-mail</label>
            <input type='email-signup' placeholder='E-mail' id='signup-email' class='input-signup-email'/>
            </section>
            <p id='error-code' class='error-email'></p>
            <section class='inputs-signup'>
            <label for='signup-password'class='label'>Digite sua senha</label>
            <input type='password' placeholder='******' id='signup-password' class='input-signup-password' />
            </section>
            <p id='error-code' class='error-password'></p>
            <p class='error-message'></p>  
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
  const errorMessage = container.querySelector('.error-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validation = validationRegister(
      inputName.value,
      inputEmail.value,
      inputPassword.value,
    );
    if (validation === null) {
      newUser(inputEmail.value, inputPassword.value, inputName.value)
        // .then(() => updateProfile(auth.currentUser, {
        //   displayName: inputName.value,
        // }))
        .then(() => {
          redirect('#timeline');
        })
        .catch((error) => {
          errorMessage.innerHTML = getErrorMessage(error);
        });
    } else {
      clearErrors();
      container.querySelector(`.error-${validation.src}`).innerHTML = validation.msg;
      container.querySelector(`.input-signup-${validation.src}`).classList.add('input-error');
    }
  });
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
    redirect('#timeline');
  });

  function clearErrors() {
    container.querySelectorAll('.error-email, .error-password, .error-name')
      .forEach( p => {
        p.innerHTML = '';
      });
    container.querySelectorAll('.input-signup-password, .input-signup-name, .input-signup-email')
      .forEach( p => {
        p.classList.remove('input-error');
      });
  }
  return container;
};
