import { auth, createUser } from '../../lib/index.js';
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
          <i><img class"img-success" src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
          <i><img class="img-error"src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
          <small>Error</small>
      </div>
      <div class="formCadastro ">
         <input type="text" name="registrationUsername" id="registrationUsername" placeholder="Nome de usuário">
         <i><img class"img-success" src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
         <i><img class="img-error" src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
         <small>Error</small>
      </div>
      <div class="formCadastro">
         <input type="email" name="emailRegistration" id="emailRegistration" placeholder="E-mail">
         <i><img class"img-success" src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
         <i><img class="img-error" src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
         <small>Error</small> 
      </div>
      <div class="formCadastro">
         <input type="password" name="registrationPassword" id="registrationPassword" placeholder="Senha">
         <i><img class"img-success" src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
         <i><img class="img-error" src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
         <small>Error</small>
      <div class="formCadastro">
         <input type="password" name="PasswordConfirmation" id="PasswordConfirmation"
         placeholder="Confirmação de senha">
         <i><img class"img-success" src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
         <i><img class="img-error" src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
         <small>Error</small>
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
         <i><img class"img-success" src="pages/cadastro/success-icon.png" alt="icone de sucesso"class="registrationIcon"></i>
         <i><img class="img-error" src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
         <small>Error</small>
      </div>
      <div class="formCadastro">
         <div class="checkBoxRegistration">
          <input type="checkbox" name="checkBoxRegistration" id="confirmationBox">
          <label for="checkBoxRegistration">Concordo com os <a href="#">termos de uso</a></label>
         </div>
      </div>
      <div class="formCadastro">
         <div class="submitCadastro">
          <input type="button" id="CreateAnAccount" value="Criar conta">
         </div>
      </div>
    </form>
    `;
    containerRegistration.innerHTML = registration;
    const btnRegister = containerRegistration.querySelector('#CreateAnAccount');
    btnRegister.addEventListener('click', (e) => {
        const email =
            containerRegistration.querySelector('#emailRegistration').value;
        const password = containerRegistration.querySelector(
            '#registrationPassword'
        ).value;

        createUser(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                alert('conta criada');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });
    });

    // const formCadastro = document.querySelector('.formCadastro')
    // const form = containerRegistration.querySelector('#form')
    // const registrationFirstNameAndLastName = document.querySelector(
    //     '#registrationFirstNameAndLastName'
    // )
    // const registrationUsername = document.querySelector('#registrationUsername')
    // const PasswordConfirmation = document.querySelector('#PasswordConfirmation')
    // const iamRegistration = document.querySelector('#iamRegistration')
    // const confirmationBox = document.querySelector('#confirmationBox')
    // const CreateAnAccount = document.querySelector('#CreateAnAccount')

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     checkinputs()
    // })
    // function checkinputs() {
    //     const registrationFirstNameAndLastNameValue =
    //         registrationFirstNameAndLastName.value.trim
    //     const registrationUsernameValue = registrationUsername.value.trim
    //     const emailRegistrationValue = emailRegistration.value.trim
    //     const registrationPasswordValue = registrationPassword.value.trim
    //     const PasswordConfirmationValue = PasswordConfirmation.value.trim
    //     const iamRegistrationValue = iamRegistration.value
    //     if (registrationFirstNameAndLastNameValue === '') {
    //         errorValidation(
    //             registrationFirstNameAndLastName,
    //             'Preencha esse campo'
    //         )
    //     } else {
    //         successValidation(registrationFirstNameAndLastName)
    //     }
    //     if (registrationUsernameValue === '') {
    //         errorValidation(registrationUsername, 'Preencha esse campo')
    //     } else {
    //         successValidation(registrationUsername)
    //     }
    //     if (emailRegistrationValue === '') {
    //         errorValidation(emailRegistration, 'Preencha esse campo')
    //     } else {
    //         successValidation(emailRegistrationValue)
    //     }
    // }
    // function errorValidation(input, message) {
    //     const formCadastro = input.parentElement
    //     const small = formCadastro.querySelector('samll')
    //     small.innerText = message
    //     formCadastro.className = 'formCadastro-error'
    // }
    // function successValidation(input) {
    //     const formCadastro = input.parentElement
    //     formCadastro.className = 'formCadastro-success'
    // }

    return containerRegistration;
};
