import { resetPassword } from '../../lib/auth.js';
import { errorsFirebase } from '../../lib/error.js';
import { validateEmail } from '../../lib/authenticate.js';

export default () => {
  const containerPassword = document.createElement('div');
  const password = `
  <main class = 'container-password'>
  <div class = 'field-logo'>
    <img class="logo" src="imagens/logoINspire.png" alt="Logo" />
  </div>

  <p class = 'message-password'>
    Problemas para entrar?

    Insire seu e-mail cadastrado e enviaremos um link para fazer uma nova senha.
  </p>

  <form class = 'input-reset-password'>
    <p id= 'error-message' class = 'error-message'></p>
    <p id= 'message-welcome' class = 'welcome-message'></p>
    <input class='input' type='email' name='email' id='input-email-password-reset' placeholder='Digite seu email'>
  </form>

  
  <button id="reset-button" class='reset-btn'>Enviar
  </button>        
  </main>
  `;
  containerPassword.innerHTML = password;

  const btnReset = containerPassword.querySelector('#reset-button');
  const email = containerPassword.querySelector('#input-email-password-reset');
  const messageError = containerPassword.querySelector('#error-message');
  const messageWelcome = containerPassword.querySelector('#message-welcome');

  btnReset.addEventListener('click', () => {
    const validate = validateEmail(email.value);
    if (validate) {
      messageError.innerHTML = validate;
      messageError.classList.add('show');
    } else {
      resetPassword(email.value)
        .then(() => {
          messageWelcome.innerHTML = '\'Enviamos um link para o seu e-mail.\'';
          messageError.classList.remove('show');
          messageWelcome.classList.add('show');
        })
        .catch((error) => {
          const errorCode = errorsFirebase(error.code);
          messageError.innerHTML = errorCode;
          messageWelcome.classList.remove('show');
          messageError.classList.add('show');
        });
    }
  });
  return containerPassword;
};
