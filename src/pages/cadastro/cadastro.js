import { createUser } from '../../lib/auth.js';
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
          <i><img src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
          <i><img src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
          <small>Error</small>
      </div>
      <div class="formCadastro ">
         <input type="text" name="registrationUsername" id="registrationUsername" placeholder="Nome de usuário">
         <i><img src="pages/cadastro/success-icon.png" alt="icone de sucesso" class="registrationIcon"></i>
         <i><img src="pages/cadastro/error-icon.png" alt="icone de erro" class="registrationIcon"></i>
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
         </div>
      <div class="formCadastro">
         <input type="password" name="passwordConfirmation" id="passwordConfirmation"
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
          <input type="button" id="createAnAccount" value="Criar conta">
         </div>
      </div>
    </form>
    `;
    containerRegistration.innerHTML = registration;
    // const formi = containerRegistration.querySelector('#form');
    // const formCadastro = containerRegistration.querySelector('.formCadastro');
    const btnRegister = containerRegistration.querySelector('#createAnAccount');
    // const form = containerRegistration.querySelector('#form');
    const registrationFirstNameAndLastName =
        containerRegistration.querySelector(
            '#registrationFirstNameAndLastName'
        );
    const registrationUsername = containerRegistration.querySelector(
        '#registrationUsername'
    );
    const passwordConfirmation = containerRegistration.querySelector(
        '#passwordConfirmation'
    );
    const iamRegistration =
        containerRegistration.querySelector('#iamRegistration');
    const confirmationBox =
        containerRegistration.querySelector('#confirmationBox');
    const createAnAccount =
        containerRegistration.querySelector('#createAnAccount');
    const registrationPassword = containerRegistration.querySelector(
        '#registrationPassword'
    );
    const emailRegistration =
        containerRegistration.querySelector('#emailRegistration');

    let registrationFirstNameAndLastNameValue =
        registrationFirstNameAndLastName.value.trim();
    let registrationUsernameValue = registrationUsername.value.trim();
    let emailRegistrationValue = emailRegistration.value.trim();
    let registrationPasswordValue = registrationPassword.value.trim();
    let passwordConfirmationValue = passwordConfirmation.value.trim();
    let iamRegistrationValue = iamRegistration.value;
    btnRegister.addEventListener('click', () => {
        registrationFirstNameAndLastNameValue =
            registrationFirstNameAndLastName.value.trim();
        registrationUsernameValue = registrationUsername.value.trim();
        emailRegistrationValue = emailRegistration.value.trim();
        registrationPasswordValue = registrationPassword.value.trim();
        passwordConfirmationValue = passwordConfirmation.value.trim();
        iamRegistrationValue = iamRegistration.value;
        checkinputs();
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

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     checkinputs();
    // });
    function checkinputs() {
        if (registrationFirstNameAndLastNameValue === '') {
            // errorValidation(
            //     registrationFirstNameAndLastName,
            //     'Preencha esse campo'
            // );
            console.log('nome vasio', registrationFirstNameAndLastNameValue);
        } else {
            successValidation(registrationFirstNameAndLastName);
            console.log(
                'nome preenchido',
                registrationFirstNameAndLastNameValue
            );
        }
        if (registrationUsernameValue === '') {
            errorValidation(registrationUsername, 'Preencha esse campo');
        } else {
            // successValidation(registrationUsername);
        }
        // if (emailRegistrationValue === '') {
        //     errorValidation(emailRegistration, 'Preencha esse campo');
        // } else {
        //     successValidation(emailRegistration);
        // }
        // if (registrationPasswordValue === '') {
        //     errorValidation(registrationPassword, 'Preencha esse campo');
        // } else if (registrationPasswordValue.length < 8) {
        //     errorValidation(
        //         registrationPassword,
        //         'A senha deve conter mais de 8 caracteres'
        //     );
        // } else {
        //     successValidation(registrationPassword);
        // }
        // if (passwordConfirmationValue === '') {
        //     errorValidation(passwordConfirmation, 'Preencha esse campo');
        // } else if (registrationPasswordValue != passwordConfirmationValue) {
        //     errorValidation(passwordConfirmation, 'As senhas não iguais');
        // } else {
        //     successValidation(passwordConfirmation);
        // }
        // if (iamRegistrationValue === '') {
        //     errorValidation(iamRegistration, 'Preencha esse campo');
        // } else {
        //     successValidation(iamRegistration);
        // }
    }
    function errorValidation(input, message) {
        const formCadastro = input.parentElement;
        console.log(formCadastro);
        const small = formCadastro.querySelector('small');
        small.innerText = message;
        formCadastro.className = 'error';
    }
    function successValidation(input) {
        const formCadastro = input.parentElement;
        formCadastro.className = 'success';
    }

    return containerRegistration;
};
