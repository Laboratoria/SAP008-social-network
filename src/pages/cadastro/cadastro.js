import { createUser } from '../../firebase/auth.js';

export default () => {
  const containerRegistration = document.createElement('div');
  const registration = `
    <header>
      <picture>
        <img src="pages/cadastro/icone.png" alt="icone" class="icone">
        <img src="pages/cadastro/logo.png" alt="logo" class="logo">
      </picture>
      <h1>Cadastre-se</h1>
    </header>
    <form class="form" id="form">
      <div class="formCadastro ">
        <input type="text" name="registrationFirstNameAndLastName" id="registrationFirstNameAndLastName" 
          placeholder="Nome e Sobrenome">
      </div>
      <div class="formCadastro ">
         <input type="text" name="registrationUsername" id="registrationUsername" placeholder="Nome de usuário">
      </div>
      <div class="formCadastro">
         <input type="email" name="emailRegistration" id="emailRegistration" placeholder="E-mail">
      </div>
      <div class="formCadastro">
         <input type="password" name="registrationPassword" id="registrationPassword" placeholder="Senha">
         </div>
      <div class="formCadastro">
         <input type="password" name="passwordConfirmation" id="passwordConfirmation"
         placeholder="Confirmação de senha">
      </div>
      <div class="formCadastro">
         <input type="text" name="euSou" list="responsible" id="iamRegistration" placeholder="Eu Sou">
         <datalist id="responsible">
         <option value="Mãe"></option>
         <option value="Pai"></option>
         <option value="Profissional"></option>
         <option value="RedeDeApoio"></option>
         <option value="Tentante"></option>
         <option value="Aprendiz"></option>
         </datalist>
      </div>
      <div class="formCadastro">
         <div class="checkBoxRegistration">
          <input type="checkbox" name="checkBoxRegistration" id="confirmationBox">
          <label for="checkBoxRegistration">Concordo com os <a href="#">termos de uso</a></label>
         </div>
      </div>
      <div class="formCadastro">
         <div class="submitCadastro">
         <button id="createAnAccount" href="#feed">Criar conta</button>
         </div>
         <span id="saida"></span>
      </div>
    </form>
    `;
  containerRegistration.innerHTML = registration;
  const createAnAccount = containerRegistration.querySelector('#createAnAccount');
  createAnAccount.addEventListener('click', (e) => {
    console.log(createAnAccount);
    e.preventDefault();
    const registrationFirstNameAndLastName = containerRegistration.querySelector('#registrationFirstNameAndLastName').value;
    const registrationFirstNameAndLastNamevalue = registrationFirstNameAndLastName;
    containerRegistration.querySelector('#saida').innerHTML = registrationFirstNameAndLastNamevalue;
    const registrationUsername = containerRegistration.querySelector('#registrationUsername').value;
    const registrationUsernameValue = registrationUsername;
    containerRegistration.querySelector('#saida').innerHTML = registrationUsernameValue;
    const emailRegistration = containerRegistration.querySelector('#emailRegistration').value;
    const emailRegistrationValue = emailRegistration;
    containerRegistration.querySelector('#saida').innerHTML = emailRegistrationValue;
    const registrationPassword = containerRegistration.querySelector('#registrationPassword').value;
    const registrationPasswordValue = registrationPassword;
    containerRegistration.querySelector('#saida').innerHTML = registrationPasswordValue;
    const passwordConfirmation = containerRegistration.querySelector('#passwordConfirmation').value;
    const passwordConfirmationValue = passwordConfirmation;
    containerRegistration.querySelector('#saida').innerHTML = passwordConfirmationValue;
    const iamRegistration = containerRegistration.querySelector('#iamRegistration').value;
    const iamRegistrationValue = iamRegistration;
    containerRegistration.querySelector('#saida').innerHTML = iamRegistrationValue;
    const confirmationBox = containerRegistration.querySelector('#confirmationBox');
    const username = containerRegistration.querySelector('#registrationUsername').value;
    if (
      registrationFirstNameAndLastNamevalue === '' || registrationUsernameValue === '' || emailRegistrationValue === '' || registrationPasswordValue === '' || passwordConfirmationValue === '' || iamRegistration === '') {
      alert('preencha esse campo');
    }
    if (passwordConfirmationValue !== registrationPasswordValue) {
      alert('as senhas nao sao iguais');
    }
    if (!confirmationBox.checked) {
      alert('Você não concorda com os termos');
    }
    if (
      registrationFirstNameAndLastNamevalue !== '' && registrationUsernameValue !== '' && emailRegistrationValue !== '' && registrationPasswordValue !== '' && passwordConfirmationValue !== '' && iamRegistration !== '' && confirmationBox.checked) {
      // alert('formulario validado');
      createUser(username, emailRegistration, registrationPassword)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
        // const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage);
        });
    }
  });
  return containerRegistration;
};
