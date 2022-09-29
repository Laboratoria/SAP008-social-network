import { loginEmailPassword, logout, signInGoogle } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <div class="container">
      <section class="login">      
          <img src="./img/picsfem.png" class="login-logo">                  

          <form id="login-form">
            <div class="email-pass">            
              <label class="login-label" for="email">                
                <input id="txtEmail" type="email" name="email" class="input" placeholder="Email" required>
              </label>
              
              <label class="login-label" for="password">                
                <input id="txtPassword" type="password" name="password" class="input" placeholder="Senha" minlength="8" required>
              </label>
            
            </div>           
            
            <div class="signup-forgot">              
              <a href="#signup" id="btnSignupSpa" type="button" class="login-link" style="text-decoration:none">Criar conta</a>
              
              <a href="#" class="login-link">Esqueceu a senha?</a>
            </div>            
            
            <button id="btnLogin" type="button" class="button">Entrar</button>               
            
            <p class="txt-error" id="txt-error"></p>

            <p>Entrar com:</p>

            <div class="icon-container">
              <button id="btn-gmail" type="button" class="icon-button">
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
