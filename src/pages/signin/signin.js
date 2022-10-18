import { newUser, auth } from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  if (auth.currentUser === true) {
    window.location.hash = '#home';
  } else {
    const container = document.createElement('div');
    const template = `<section class="container">
        <div class="frame">
            <h1 class="titles">Cadastre-se<br>no BatePrato</h1>
            <form class="form-register">
                <input type="text" id="name" name="name" class="form-input" placeholder="Digite seu nome"><br>
                <input type="text" id="email" name="email" class="form-input" placeholder="E-mail"><br>
                <p class="error-msg" id="msg-error-email"></p>
                <input type="password" id="password" name="password" class="form-input" placeholder="Senha"><br>
                <p class="error-msg" id="msg-error-pswd"></p>
                <input type="password" id="confirm-password" name="confirm-password" class="form-input" placeholder="Confirme sua senha"><br>
                <p class="error-msg" id="msg-error-pswd-ok"></p>
                <button id="ok-form-btn">OK</button>
            </form>

            <a href="/#" class="instructions cta">Cancelar</a>
        </div>
        <div class="logo"></div>
    </section>`;

    container.innerHTML = template;

    const signInName = container.querySelector('#name');
    const signInEmail = container.querySelector('#email');
    const signInPassword = container.querySelector('#password');
    const signInConfPassword = container.querySelector('#confirm-password');
    const formRegister = container.querySelector('.form-register');
    const pMsgEmail = container.querySelector('#msg-error-email');
    const pMsgPswd = container.querySelector('#msg-error-pswd');
    const pMsgPswdOk = container.querySelector('#msg-error-pswd-ok');

    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();

      if (signInPassword.value !== signInConfPassword.value) {
        pMsgPswdOk.innerHTML = 'As senhas devem ser iguais';
      }
      if (signInName.value === '' || signInEmail.value === '' || signInPassword.value === '' || signInConfPassword.value === '') {
        pMsgEmail.innerHTML = 'Todos os campos devem ser preenchidos';
      }
      return newUser(signInEmail.value, signInPassword.value, signInName.value)
        .then(() => {
          window.location.hash = '#home';
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
            pMsgEmail.innerHTML = 'E-mail já cadastrado';
          }
          if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
            pMsgEmail.innerHTML = 'Endereço de e-mail inválido';
          }
          if (errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            pMsgPswd.innerHTML = 'Sua senha deve ter ao menos 6 dígitos';
          }
        });
    });

    return container;
  }
};
