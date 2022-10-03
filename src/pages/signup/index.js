import { createAccount } from '../../lib/auth.js';

export default function signUp() {
  const container = document.createElement('div');

  const template = `
    <form>
      <label class= "name"  for="name">Nome:
        <input class="input" type="text" required>
      </label>

      <label class= "email" for="email">Email:
        <input class="input" type="email" id="txtEmail" required>
      </label>
      
      <label class= "password" for="password">Senha:
        <input class="input" type="password" id="txtPassword" minlength="8" required>
      </label>
      
      <a href="#login" id="btnSignup" type="button" class="buttonSignup">CRIAR CONTA</a>
        
    </form>
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
