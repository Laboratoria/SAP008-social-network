import { loginEmailPassword, logout, signInGoogle } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <div class="container">
      <section class="login">      
          <img src="./img/picsfem.png" class="login-logo">

          <h1 class="login-title">Fazer login</h1>

          <div id="form-container"></div>

          <form id="login-form">
            <div class="email-pass">
            
              <label class="login-label">
                <span>Email:</span>
                <input id="txtEmail" type="email" name="email" class="input">
              </label>
              
              <label class="login-label">
                <span>Senha</span>
                <input id="txtPassword" type="password" name="password" class="input">
              </label>
            
            </div>
            
            <div class="txt-error" id="txt-error"></div>
            
            <div class="ads">
              <div class="Criar">
                <a href="#signup" id="btnSignupSpa" type="button" class="button2">Criar conta</a>
              </div>

              <a href="#" class="login-link">Esqueceu a senha?</a>
            </div>

            <span id="message" class="message"></span>

            <div class="entrar">
              <button id="btnLogin" type="button" class="button">Entrar</button>
            </div>          

            <a class="login-link2">Logar como:</a>

            <div class="login-icons">
              <button id="btn-gmail" type="button" class="icons-button">
              <img src="./img/icongmail.png" alt="gmail">
              </button>          
            </div>
          </form>                
      </section>

      <img class="wallpaper" src="./img/foto.png">       

    </div>
    <button id="btnLogout" type="button">Log out</button>
     
    `;

  container.innerHTML = template;

  const txtEmail = container.querySelector('#txtEmail');
  const txtPassword = container.querySelector('#txtPassword');
  const btnLogin = container.querySelector('#btnLogin');
  const btnLogout = container.querySelector('#btnLogout');
  const btnGmail = container.querySelector('#btn-gmail');
  btnLogin.addEventListener('click', () => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    loginEmailPassword(email, password);
  });

  btnLogout.addEventListener('click', logout);

  btnGmail.addEventListener('click', signInGoogle);
  return container;
};
