import { loginUser, loginGoogle } from '../../firebase/auth.js';
import { getErrorMessage } from '../../firebase/errors.js';
import { loginValidation } from '../../validations.js';
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

        <form id='form' class='form-login bounce'>
            <h1 class='title-login'>Acesse a sua conta</h1>
            <section class='inputs'>
            <label for='email' class='label'>Digite seu e-mail</label>
            <input type='email' placeholder='seuemail@gmail.com' class='input-email'/>
            </section>
            <p id='error-code' class='error-email'></p>

            <section class='inputs'>
            <label for='password' class='label'>Digite sua senha</label>
            <input type='password' placeholder='******' class='input-password'/>
            </section>
            <p id='error-code' class='error-password'></p>
            <p id='error-message'></p>
            <section class='buttons'>
            <button type='submit' class='btn-login'>Iniciar Sessão</button>
            <button type='submit' class='btn-google'><img class='img-google' src='./imagens/google.svg'/> Entrar com Google</button>
            </section>

            <h6 class='text'> Não possui conta?</h6>
            <button type='submit' class='btn-register'>Criar nova conta</button>
            </form>    
    `;

  container.innerHTML = template;

  const form = container.querySelector('#form');
  const buttonRegister = container.querySelector('.btn-register');
  const inputEmail = container.querySelector('.input-email');
  const inputPassword = container.querySelector('.input-password');
  const buttonGoogle = container.querySelector('.btn-google');
  const errorMessage = container.querySelector('#error-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const validation = loginValidation(
      inputEmail.value,
      inputPassword.value,
    );
    if (validation === null) {
      loginUser(inputEmail.value, inputPassword.value)
        .then(() => {
          redirect('#timeline');
        })
        .catch((error) => {
          errorMessage.innerHTML = getErrorMessage(error);
        });
    } else {
      clearErrors();
      document.querySelector(`.error-${validation.src}`).innerHTML = validation.msg;
      document.querySelector(`.input-${validation.src}`).classList.add('input-error');
    } 
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#signup';
  });

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        redirect('#timeline');
      })
      .catch((error) => error);
  });

  return container;
};
