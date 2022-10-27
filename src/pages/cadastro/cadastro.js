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
            <span id='saidaRegistrationFirstNameAndLastName'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='email' name='emailRegistration' id='emailRegistration' class='inputs-cadastro' placeholder='E-mail'>
            <span id='saidaEmailRegistration'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='registrationPassword' id='registrationPassword' class='inputs-cadastro' placeholder='Senha'>
            <span id='saidaRegistrationPassword'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='passwordConfirmation' id='passwordConfirmation' class='inputs-cadastro'
            placeholder='Confirmação de senha'>
            <span id='saidaPasswordConfirmation'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='text' name='euSou' list='responsible' id='iamRegistration' class='inputs-cadastro' placeholder='Eu Sou'>
            <datalist id='responsible'>
            <option value='Mãe'></option>
            <option value='Pai'></option>
            <option value='Profissional'></option>
            <option value='Rede de Apoio'></option>
            <option value='Tentante'></option>
            <option value='Aprendiz'></option>
            </datalist>
            <span id='saidaIamRegistration'></span>
          </div>
          <div class='formCadastroInput'>
           <div class='checkBoxRegistration'>
              <input type='checkbox' checked="checked" name='checkBoxRegistration' id='confirmationBox'>
              <label for='checkBoxRegistration'>Concordo com os <a href='#termsOfUse'>termos de uso</a></label>
           </div>
           <span id='saidaConfirmationBox'></span>
          </div>
          <div class='formCadastroInput'>
            <div class='submitCadastro'>
            <p id='error'></p>
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

  const createAnAccount = containerRegistration.querySelector('#createAnAccount');
  createAnAccount.addEventListener('click', (e) => {
    e.preventDefault();
    const registrationFirstNameAndLastName = containerRegistration.querySelector('#registrationFirstNameAndLastName').value.trim();
    const registrationFirstNameAndLastNamevalue = registrationFirstNameAndLastName;
    const saidaRegistrationFirstNameAndLastName = containerRegistration.querySelector('#saidaRegistrationFirstNameAndLastName');
    const emailRegistration = containerRegistration.querySelector('#emailRegistration').value;
    const emailRegistrationValue = emailRegistration.trim();
    const saidaEmailRegistration = containerRegistration.querySelector('#saidaEmailRegistration');
    const registrationPassword = containerRegistration.querySelector('#registrationPassword').value;
    const registrationPasswordValue = registrationPassword.trim();
    const saidaRegistrationPassword = containerRegistration.querySelector('#saidaRegistrationPassword');
    const passwordConfirmation = containerRegistration.querySelector('#passwordConfirmation').value;
    const passwordConfirmationValue = passwordConfirmation.trim();
    const saidaPasswordConfirmation = containerRegistration.querySelector('#saidaPasswordConfirmation');
    const iamRegistration = containerRegistration.querySelector('#iamRegistration').value;
    const iamRegistrationValue = iamRegistration.trim();
    const saidaIamRegistration = containerRegistration.querySelector('#saidaIamRegistration');
    const confirmationBox = containerRegistration.querySelector('#confirmationBox');
    const saidaConfirmationBox = containerRegistration.querySelector('#saidaConfirmationBox');
    const errorMessage = containerRegistration.querySelector('#error');

    if (registrationFirstNameAndLastNamevalue === '') {
      saidaRegistrationFirstNameAndLastName.innerHTML = 'Preencha esse campo';
    }
    if (registrationFirstNameAndLastNamevalue !== '') {
      saidaRegistrationFirstNameAndLastName.innerHTML = '';
    }
    if (emailRegistrationValue === '') {
      saidaEmailRegistration.innerHTML = 'Preencha esse campo';
    }
    if (emailRegistrationValue !== '') {
      saidaEmailRegistration.innerHTML = '';
    }
    if (registrationPasswordValue === '') {
      saidaRegistrationPassword.innerHTML = 'Preencha esse campo';
    }
    if (registrationPasswordValue !== '') {
      saidaRegistrationPassword.innerHTML = '';
    }
    if (passwordConfirmationValue === '') {
      saidaPasswordConfirmation.innerHTML = 'Preencha esse campo';
    }
    if (passwordConfirmationValue !== '') {
      saidaPasswordConfirmation.innerHTML = '';
    }
    if (iamRegistrationValue === '') {
      saidaIamRegistration.innerHTML = 'Preencha esse campo';
    }
    if (iamRegistrationValue !== '') {
      saidaIamRegistration.innerHTML = '';
    }
    if (passwordConfirmationValue !== registrationPasswordValue) {
      saidaPasswordConfirmation.innerHTML = 'As senhas nao sao iguais';
    }
    if (!confirmationBox.checked) {
      saidaConfirmationBox.innerHTML = 'Você não concorda com os termos';
    }
    if (confirmationBox.checked) {
      saidaConfirmationBox.innerHTML = '';
    }
    if (registrationFirstNameAndLastNamevalue !== '' && emailRegistrationValue !== '' && registrationPasswordValue !== '' && passwordConfirmationValue !== '' && registrationPasswordValue === passwordConfirmationValue && iamRegistrationValue !== '' && confirmationBox.checked) {
      createUser(registrationFirstNameAndLastName, emailRegistration, registrationPassword)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          errorMessage.innerHTML = errorMessages(error);
        });
    }
  });
  return containerRegistration;
};
