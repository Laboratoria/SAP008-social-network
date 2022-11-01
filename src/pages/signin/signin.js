import { newUser, auth } from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  if (auth.currentUser !== null) {
    window.location.hash = '#home';
  } else {
    const container = document.createElement('div');
    const template = `<link rel="stylesheet" href="style_load_login_signin.css" />
    <section class="container initial-page">
        <div class="frame">
            <h1 class="titles">Cadastre-se<br>no BatePrato</h1>
            <div class="form">
              <form class="form-register">
                  <input type="text" id="name" name="name" class="form-input" placeholder="Digite seu nome"><br>
                  <input type="text" id="email" name="email" class="form-input" placeholder="E-mail"><br>
                  <input type="password" id="password" name="password" class="form-input" placeholder="Senha"><br>
                  <input type="password" id="confirm-password" name="confirm-password" class="form-input" placeholder="Confirme sua senha"><br>
                  <div class="error-container">
                    <button id="ok-form-btn">OK</button>
                    <p class="error-msg" id="error-msg"></p>
                  </div>
                </form>
              <a href="/#" class="instructions cta">Cancelar</a>
            </div>
        </div>
        <div class="logo">
          <img class="logo" alt="logo prato rachado BatePrato" src="./external/svg/logotipo.svg"/>
        </div>
    </section>`;

    container.innerHTML = template;

    const signInName = container.querySelector('#name');
    const signInEmail = container.querySelector('#email');
    const signInPassword = container.querySelector('#password');
    const signInConfPassword = container.querySelector('#confirm-password');
    const formRegister = container.querySelector('.form-register');
    const pErrorMsg = container.querySelector('#error-msg');

    // eslint-disable-next-line consistent-return
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();

      if (signInPassword.value !== signInConfPassword.value) {
        pErrorMsg.innerHTML = 'As senhas devem ser iguais';
      } else if (signInName.value === '' || signInEmail.value === '' || signInPassword.value === '' || signInConfPassword.value === '') {
        pErrorMsg.innerHTML = 'Todos os campos devem ser preenchidos';
      } else {
        return newUser(signInEmail.value, signInPassword.value, signInName.value)
          .then(() => {
            window.location.hash = '#home';
          })
          .catch((error) => {
            const errorMessage = error.message;
            if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
              pErrorMsg.innerHTML = 'E-mail já cadastrado';
            }
            if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
              pErrorMsg.innerHTML = 'Endereço de e-mail inválido';
            }
            if (errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
              pErrorMsg.innerHTML = 'Sua senha deve ter ao menos 6 dígitos';
            }
          });
      }
    });

    return container;
  }
};
