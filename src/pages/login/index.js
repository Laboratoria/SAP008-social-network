import { loginEmailPassword, logout, signInGoogle } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <div class="container">
      <section class="login">      
          <img src="./img/picsfem.png" class="logo-login">                  

          <form class="login-form" id="login-form">
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
            
            <button id="btnLogin" type="button" class="btn-login">Entrar</button>               
            
            <p class="txt-error" id="txt-error"></p>                    
            
          </form>                
          <div class="line-container">
              <hr class="line">
              <span class="txt-line">ou</span>
              <hr class="line">            
          </div>
            
          <button id="btn-gmail" type="button" class="icon-button">Continue com
            <img class="google-icon" src="./img/google-icon.png" alt="google-icon">
          </button>  
          
      </section>

      <img class="wallpaper-login" src="./img/foto.png">       

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
