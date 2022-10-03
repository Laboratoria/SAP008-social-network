import { register } from '../../lib/authentication.js';

export default () => {
  const container = document.createElement('div');
  const template = `  <div class="container-register">
    <div class="box-center">
      <div class="logo-register">
        <img id="logo-register" src="./img/logo.png" alt="logo">
      </div>
  
        <div class="form-register">
            <input type="text" id="nameUser" placeholder="Digite seu nome" >
            <input type="email" id="emailUser" placeholder="Digite seu e-mail" > 
            <input type="password" id="passwordUser" placeholder="Digite sua senha" >
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" >

            <div class="register-error"></div>
            
            <button type="button" class="buttons-register" id="button-register"> Criar conta </button>
            <button type="button" class="buttons-register" id="button-back"> Voltar </button>
        </div>
    </div>
</div>
  
<div class="wrapper-register"></div>

  <footer>
    <div class="foot">
      <img src="./img/lab.png" alt="logo Laboratória">
      <p id="devTo"> Developed by:</p>
      <p id="developers">Ellen Cavalcante <spa>&</span> Vanessa Bueck</p>
    </div>
  </footer>`;

  container.innerHTML = template;

  const buttonBackToPage = container.querySelector('#button-back');
  const buttonRegister = container.querySelector('#button-register');
  const inputEmail = container.querySelector('#emailUser');
  const inputNewPassword = container.querySelector('#confirmPassword');
  const inputPassword = container.querySelector('#passwordUser');
  const inputUserName = container.querySelector('#nameUser');

  // eslint-disable-next-line consistent-return
  function validatePassword() {
    if (
      inputUserName.value === '' || inputEmail.value === '' || inputPassword.value === '' || inputNewPassword.value === '') {
      document.querySelector('.register-error').innerHTML = 'Por favor, preencha todos os campos.';
    } else if (inputPassword.value !== inputNewPassword.value) {
      document.querySelector('.register-error').innerHTML = 'A senha digitada está diferente em um dos campos.';
    } else {
      const email = inputEmail.value;
      const password = inputPassword.value;
      const userName = inputUserName.value;
      return register(email, password, userName)
        .then(() => {
          window.location.replace('#page');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            document.querySelector('.register-error').innerHTML = 'E-mail já cadastrado. Insira um e-mail diferente.';
          } else if (errorCode === 'auth/invalid-email') {
            document.querySelector('.register-error').innerHTML = 'E-mail inválido';
          } else {
            document.querySelector('.register-error').innerHTML = 'Algo deu errado. Por favor, tente novamente.';
          }
        });
    }
  }

  buttonRegister.addEventListener('click', validatePassword);

  function backToPage() {
    window.location.hash = '#login';
  }

  buttonBackToPage.addEventListener('click', backToPage);

  return container;
};
