import { register } from '../../lib/auth.js';
import { errorsFirebase } from '../../lib/error.js';
import { validateFormRegister } from '../../lib/authenticate.js';

export default () => {
  const containerRegistration = document.createElement('div');
  containerRegistration.classList.add('container-register');
  const template = `
  <main class="main">
      <div class =logo-e-form>
        <div class = 'field-logo'>
          <img class='logo' src="imagens/logoINspire.png" alt="Logo" />
        </div>

        <div class='register'>
          <form class = 'form-register'>
            <p id= 'error-message' class = 'error-message'> </p>
            <p id= 'message-welcome' class = 'welcome-message'> </p>
            <input class='input' type='text' name='profile-name' id='input-profile-name'  placeholder='Nome do perfil ' required>
            <input class='input' type='email' name='email' id='input-email-registration' placeholder='Digite seu email' required>
            <input class='input' type='password' id='password' placeholder="Senha de 6 dígitos" required>
          </form>

          <div class='field-button'>
            <button type='button' id='button-registration' class='button-register' >Finalizar cadastro</button>
          </div>
          <p class="text">Já possui cadastro?<br><a href="#login" class= "link">Faça seu login</a></p>
        </div>
      </div>
  </main>
  
  `;
  containerRegistration.innerHTML = template;

  const nameProfile = containerRegistration.querySelector('#input-profile-name');
  const email = containerRegistration.querySelector('#input-email-registration');
  const password = containerRegistration.querySelector('#password');
  const btnRegistration = containerRegistration.querySelector('#button-registration');
  const messageError = containerRegistration.querySelector('#error-message');
  const messageWelcome = containerRegistration.querySelector('#message-welcome');

  btnRegistration.addEventListener('click', (e) => {
    e.preventDefault();
    messageError.innerHTML = '';
    const validate = validateFormRegister(nameProfile.value, email.value, password.value);
    if (validate) {
      messageError.classList.add('show');
      messageError.innerHTML = validate;
    } else {
      register(email.value, password.value, nameProfile.value)
        .then(() => {
          messageWelcome.innerHTML = `'Bem vindo(a) ${nameProfile.value}!'`;
          messageWelcome.classList.add('show');
          setTimeout(() => {
            window.location.hash = '#feed';
          }, 2000);
        })
        .catch((error) => {
          const errorCode = errorsFirebase(error.code);
          messageError.innerHTML = errorCode;
          messageError.classList.add('show');
        });
    }
  });

  return containerRegistration;
};
