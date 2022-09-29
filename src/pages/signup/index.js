import { createAccount } from '../../lib/auth.js';

export default function signUp() {
  const container = document.createElement('div');

  const template = `
    <div class="container">
     <section class="login">      
        <img src="./img/picsfem.png" class="login-logo">              

        <form>
          <div class="signup-container">
            <label class= "signup-label" for="name">              
              <input class="input" id="txtName" type="text" name="name" placeholder="Nome" required>
            </label>            

            <label class= "signup-label" for="email">              
              <input class="input" id="txtEmail" type="email" name="email" id="txtEmail" placeholder="Email" required>
            </label>
          
            <label class= "signup-label" for="password">              
              <input class="input" id="txtPassword" type="password" name="password" id="txtPassword" minlength="8" placeholder="Senha" required>
            </label>
          </div>

          <a href="#login" id="btnSignup" type="button" class="btnSignup" style="text-decoration:none">CRIAR CONTA</a>
        </form>                
     </section>

     <img class="wallpaper" src="./img/foto.png">       

    </div>    
    `;
  container.innerHTML = template;

  const txtEmail = container.querySelector('#txtEmail');
  const txtPassword = container.querySelector('#txtPassword');
  const btnSignup = container.querySelector('#btnSignup');

  btnSignup.addEventListener('click', () => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    createAccount(email, password);
  });

  return container;
}
