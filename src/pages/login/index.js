import { loginEmailPassword, signInGoogle } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('wrapper-login');
  const template = `    
    <section class="container-login"> 
      <div class="container-login1">
        <img src="./img/picsfem.png" class="logo-login">                  

        <form class="form-login">
          <div class="email-and-password-container">            
            <label class="login-label" id="loginLabel" for="email">                
              <input id="txtEmail" type="email" name="email" class="input-login" placeholder="Email" required>
            </label>
                
            <label class="login-label" id="loginLabel" for="password">                
              <input id="txtPassword" type="password" name="password" class="input-login" placeholder="Senha" minlength="8" required>
            </label>              

          </div>           
              
          <div class="signup-and-forgotpassword-container">              
            <a href="#signup" type="button" class="signup-and-forgotpassword" style="text-decoration:none">Criar conta</a>
                
            <a href="#" class="signup-and-forgotpassword">Esqueceu a senha?</a>
          </div>   

          <p class="txt-error" id="txtError"></p>   

          <button id="btnLogin" type="button" class="btn-login">Entrar</button>                   
                                                  
        </form>
      </div>

      <div class="container-login2">
        <div class="line-container">
          <hr class="line">
            <span class="txt-line">ou</span>
          <hr class="line">            
        </div>
              
        <button id="btn-gmail" type="button" class="btn-google">
          <img class="google-icon" src="./img/google-icon.png" alt="google-icon">
          Continue com google
        </button>
      </div>               
      
    </section>       

    <img class="wallpaper-login" src="./img/foto.png">      

    `;

  container.innerHTML = template;

  const txtEmail = container.querySelector('#txtEmail');
  const txtPassword = container.querySelector('#txtPassword');
  const btnLogin = container.querySelector('#btnLogin');
  //const btnLogout = container.querySelector('#btnLogout');
  const btnGmail = container.querySelector('#btn-gmail');
  btnLogin.addEventListener('click', () => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    loginEmailPassword(email, password);
  });

  //btnLogout.addEventListener('click', logout);

  btnGmail.addEventListener('click', signInGoogle);
  return container;
};