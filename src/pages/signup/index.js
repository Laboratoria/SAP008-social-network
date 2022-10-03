import { createAccount } from '../../lib/auth.js';

export default function signUp() {
  const container = document.createElement('div');
  container.classList.add('wrapper-signup');

  const template = `    
     <section class="signup-container">      
        <img src="./img/picsfem.png" class="logo-signup">              
        <form class="signup-form" >
          <div class="name-email-pass">
            <label class= "signup-label" for="name">              
              <input class="input-signup" id="txtName" type="text" name="name" placeholder="Nome" required>
            </label>

            <label class= "signup-label" for="email">              
              <input class="input-signup" id="txtEmail" type="email" name="email" id="txtEmail" placeholder="Email" required>
            </label>
          
            <label class= "signup-label" for="password">              
              <input class="input-signup" id="txtPassword" type="password" name="password" id="txtPassword" minlength="8" placeholder="Senha" required>
            </label>
          </div>
          
          <a href="#login" id="btnSignup" type="button" class="btnSignup" style="text-decoration:none">CRIAR CONTA</a>
        </form>                
     </section>
     <img class="wallpaper-signup" src="./img/foto.png">       
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