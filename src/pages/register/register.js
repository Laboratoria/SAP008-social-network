import { register } from '../../lib/auth.js';
import { errorsFirebase, validateFormRegister } from '../../lib/error.js';

export default () => {
  const containerRegistration = document.createElement('div');
  const template = `
    <main class="container-registration">
      <button type="button" class="btn-back">&#11013 voltar</button>

      <figure class="logo-tittle">
        <img id="one-logo-coração" src="./imagens/image-2.png">
        <p class="tittle-logotype">INspire</p>
      </figure>

      <forms class="registration-input">
        <p id= 'message-welcome' class = 'welcome-message' role='dialog'> </p>
        <input type="text" name="profile-name" id="input-profile-name" class="input" placeholder="Nome do perfil " required>
        <input type="email" name="email" id="input-email-registration" class="input" placeholder="Digite seu email". required>
        <input type="password" id="password" class="input" placeholder="Senha de 6 dígitos" required>
      </forms>
      <button type="button" id="button-registration" class="button">Finalizar cadastro</button>

      <p id= 'error-message' class = 'error-message'> </p>
  
    </main>
  
  `;
  containerRegistration.innerHTML = template;

  const nameProfile = containerRegistration.querySelector('#input-profile-name');
  const email = containerRegistration.querySelector('#input-email-registration');
  const password = containerRegistration.querySelector('#password');
  const btnRegistration = containerRegistration.querySelector('#button-registration');
  const btnBack = containerRegistration.querySelector('.btn-back');
  const messageError = containerRegistration.querySelector('#error-message');
  const messageWelcome = containerRegistration.querySelector('#message-welcome');

  btnBack.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  btnRegistration.addEventListener('click', (e) => {
    e.preventDefault();
    messageError.innerHTML = '';
    const validate = validateFormRegister(nameProfile.value, email.value, password.value);
    if (validate) {
      messageError.innerHTML = validate;
    } else {
      register(email.value, password.value, nameProfile.value)
        .then(() => {
          messageWelcome.innerHTML = `'Bem vindo(a) ${nameProfile.value}!'`;
          setTimeout(() => {
            window.location.hash = '#feed';
          }, 2000);
        })
        .catch((error) => {
          const errorCode = errorsFirebase(error.code);
          messageError.innerHTML = errorCode;
        });
    }
  });

  return containerRegistration;
};
