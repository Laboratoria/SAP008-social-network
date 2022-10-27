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
            <input type='text' name='registrationFirstNameAndLastName' id='registrationFirstNameAndLastName' 
            placeholder='Nome e Sobrenome'>
            <span id='saidaRegistrationFirstNameAndLastName'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='email' name='emailRegistration' id='emailRegistration' placeholder='E-mail'>
            <span id='saidaEmailRegistration'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='registrationPassword' id='registrationPassword' placeholder='Senha'>
            <span id='saidaRegistrationPassword'></span>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='passwordConfirmation' id='passwordConfirmation'
            placeholder='Confirmação de senha'>
            <span id='saidaPasswordConfirmation'></span>
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
    const iamRegistration = containerRegistration.querySelector('#list').value;
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
      saidaEmailRegistration.innerHTML = 'Peencha esse campo';
    }
    if (emailRegistrationValue !== '') {
      saidaEmailRegistration.innerHTML = '';
    }
    if (registrationPasswordValue === '') {
      saidaRegistrationPassword.innerHTML = 'Peencha esse campo';
    }
    if (registrationPasswordValue !== '') {
      saidaRegistrationPassword.innerHTML = '';
    }
    if (passwordConfirmationValue === '') {
      saidaPasswordConfirmation.innerHTML = 'Peencha esse campo';
    }
    if (passwordConfirmationValue !== '') {
      saidaPasswordConfirmation.innerHTML = '';
    }
    if (iamRegistrationValue === '') {
      saidaIamRegistration.innerHTML = 'Peencha esse campo';
    }
    if (iamRegistrationValue !== '') {
      saidaIamRegistration.innerHTML = '';
    }
    // alert('preencha esse campo');
    if (passwordConfirmationValue !== registrationPasswordValue) {
      saidaPasswordConfirmation.innerHTML = 'As senhas nao sao iguais';
      // alert('as senhas nao sao iguais');
    }
    if (!confirmationBox.checked) {
      saidaConfirmationBox.innerHTML = 'Você não concorda com os termos';
      // alert('Você não concorda com os termos');
    }
    if (confirmationBox.checked) {
      saidaConfirmationBox.innerHTML = '';
    }
    if (
      registrationFirstNameAndLastNamevalue !== '' && emailRegistrationValue !== '' && registrationPasswordValue !== '' && passwordConfirmationValue !== '' && iamRegistrationValue !== '' && confirmationBox.checked) {
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
