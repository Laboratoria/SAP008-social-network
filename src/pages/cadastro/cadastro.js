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
          </div>
          <div class='formCadastroInput'>
            <input type='email' name='emailRegistration' id='emailRegistration' placeholder='E-mail'>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='registrationPassword' id='registrationPassword' placeholder='Senha'>
          </div>
          <div class='formCadastroInput'>
            <input type='password' name='passwordConfirmation' id='passwordConfirmation'
            placeholder='Confirmação de senha'>
          </div>
          <div class='formCadastroInput'>
            <input type='text' name='euSou' list='responsible' id='iamRegistration' placeholder='Eu Sou'>
            <datalist id='responsible'>
            <option value='Mãe'></option>
            <option value='Pai'></option>
            <option value='Profissional'></option>
            <option value='RedeDeApoio'></option>
            <option value='Tentante'></option>
            <option value='Aprendiz'></option>
            </datalist>
          </div>
          <div class='formCadastroInput'>
           <div class='checkBoxRegistration'>
              <input type='checkbox' checked="checked" name='checkBoxRegistration' id='confirmationBox'>
              <label for='checkBoxRegistration'>Concordo com os <a href='#termsOfUse' id='terms'>termos de uso</a></label>
           </div>
           <p id='erro'></p>
          </div>
          <div class='formCadastroInput'>
            <div class='submitCadastro'>
              <button type='click' id='createAnAccount'>Criar Conta</button>
            </div>
            <span id='saida'></span>
          </div>
        </div>
      </form>
    </div>
    `;
  containerRegistration.innerHTML = registration;
  const createAnAccount = containerRegistration.querySelector('#createAnAccount');
  createAnAccount.addEventListener('click', (e) => {
    e.preventDefault();
    const errorMessage = containerRegistration.querySelector('#erro');
    const completeName = containerRegistration.querySelector('#registrationFirstNameAndLastName').value;
    const registrationFirstNameAndLastName = containerRegistration.querySelector('#registrationFirstNameAndLastName').value;
    const registrationFirstNameAndLastNamevalue = registrationFirstNameAndLastName;
    const emailRegistration = containerRegistration.querySelector('#emailRegistration').value;
    const emailRegistrationValue = emailRegistration;
    const registrationPassword = containerRegistration.querySelector('#registrationPassword').value;
    const registrationPasswordValue = registrationPassword;
    const passwordConfirmation = containerRegistration.querySelector('#passwordConfirmation').value;
    const passwordConfirmationValue = passwordConfirmation;
    const iamRegistration = containerRegistration.querySelector('#iamRegistration').value;
    const iamRegistrationValue = iamRegistration;
    const confirmationBox = containerRegistration.querySelector('#confirmationBox');
    if (
      registrationFirstNameAndLastNamevalue === '' || emailRegistrationValue === '' || registrationPasswordValue === '' || passwordConfirmationValue === '' || iamRegistrationValue === '') {
      alert('preencha esse campo');
    }
    if (passwordConfirmationValue !== registrationPasswordValue) {
      alert('as senhas nao sao iguais');
    }
    if (!confirmationBox.checked) {
      alert('Você não concorda com os termos');
    }
    if (
      registrationFirstNameAndLastNamevalue !== '' && emailRegistrationValue !== '' && registrationPasswordValue !== '' && passwordConfirmationValue !== '' && iamRegistrationValue !== '' && confirmationBox.checked) {
      alert('formulario validado');
      createUser(completeName, emailRegistration, registrationPassword)
        .then(() => {
          console.log('conta criada');
        })
        .catch((error) => {
          errorMessage.innerHTML = errorMessages(error);
        });
    }
  });

  const icone = containerRegistration.querySelector('#icone');
  icone.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  return containerRegistration;
};
