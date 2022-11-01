import { createUser } from '../../firebase/auth.js';
import { errorMessages } from '../../firebase/error.js';

export default () => {
  const containerRegistration = document.createElement('div');

  const registration = `
    <div class='body-cadastro'>
      <header class='header-cadastro'>
        <picture>
          <img src='pages/cadastro/icone.png' alt='icone' class='icone' id='icone'>
          <img src='pages/cadastro/logo.png' alt='logo' class='logo'>
        </picture>
        <h1>Cadastre-se</h1>
      </header>
    
      <form class='form-cadastro' id='form-cadastro'>
        <div class='cadastro-inteiro'>
          <div class='formCadastroInput'>
            <input type='text' name='registrationFirstNameAndLastName' id='registrationFirstNameAndLastName' class='inputs-cadastro'
            placeholder='Nome e Sobrenome'>
          </div>
          <div class='formCadastroInput'>
            <input type='email' name='emailRegistration' id='emailRegistration' class='inputs-cadastro' placeholder='E-mail'>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='registrationPassword' id='registrationPassword' class='inputs-cadastro' placeholder='Senha'>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='passwordConfirmation' id='passwordConfirmation' class='inputs-cadastro'
            placeholder='Confirmação de senha'>
          </div>
          <div class='formCadastroInput' id='selection-input'>
          <label>Selecione:</label>
            <select name='list' id='list'>
              <option value='Eu sou' selected disabled>Eu sou</option>
              <option value='Mãe'>Mãe</option>
              <option value='Pai'>Pai</option>
              <option value='Tentante'>Tentante</option>
              <option value='Grávida'>Grávida</option>
              <option value='Aprendiz'>Aprendiz</option>
              <option value='Rede de apoio'>Rede de Apoio</option>
              <option value='Profissional'>Profissional</option>
            </select>
          </div>
          <div class='formCadastroInput'>
           <div class='checkBoxRegistration'>
              <input type='checkbox' checked="checked" name='checkBoxRegistration' id='confirmationBox'>
              <label for='checkBoxRegistration'>Concordo com os <a href='#termsOfUse'>termos de uso</a></label>
           </div>
          </div>
          <p class='errors'></p>
          <div class='formCadastroInput'>
            <div class='submitCadastro'>
              <button id='createAnAccount'>Criar Conta</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `;

  containerRegistration.innerHTML = registration;

  const icone = containerRegistration.querySelector('#icone');
  icone.addEventListener('click', () => {
    window.history.back();
  });
  const registrationFirstNameAndLastName = containerRegistration.querySelector('#registrationFirstNameAndLastName');
  const emailRegistration = containerRegistration.querySelector('#emailRegistration');
  const registrationPassword = containerRegistration.querySelector('#registrationPassword');
  // const passwordConfirmation = containerRegistration.querySelector('#passwordConfirmation');
  // const iamRegistration = containerRegistration.querySelector('#list');
  // const confirmationBox = containerRegistration.querySelector('#confirmationBox');
  const errorRegister = containerRegistration.querySelector('.errors');

  const createAnAccount = containerRegistration.querySelector('#createAnAccount');
  createAnAccount.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    // const validationRegister = validateRegister(registrationFirstNameAndLastName.value, emailRegistration.value, registrationPassword.value, passwordConfirmation.value, iamRegistration.value, confirmationBox.value);
    // eslint-disable-next-line max-len
    // if (validationRegister === '') {
    // eslint-disable-next-line max-len
    createUser(registrationFirstNameAndLastName.value, emailRegistration.value, registrationPassword.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        errorRegister.innerHTML = errorMessages(error);
      });
    // } else {
    //   errorRegister.innerHTML = validationRegister;
    // }
  });
  return containerRegistration;
};
