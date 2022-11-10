/* eslint-disable no-alert */

import { signinUserEmail } from '../../lib/index.js';

export const mainRegister = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.innerHTML = `
  <form class='register'>
  <label for="text-name" class="text-name">Nome:</label>
  <input class="input-name" type="email" id="input-name"/>
  <label for="text-email" class="text-email">Email:</label>
  <input class="input-email" type="email" id="input-email"/>
  <label for="text-password" class="text-password">Senha:</label>
  <input class="input-password" type="password" id="input-password"/>
  <label for="text-password-repeat" class="text-password-repeat">Confirme sua senha:</label>
  <input class="input-password-repeat" type="password" id="input-password-repeat"/>
  <button type="button" class="btn" id="btn-register">Cadastrar</a>
  <a href="#login">
  <button type="button" class="btn" id="btn-back">Voltar</button>
  </a>
</form>
`;
  const btnRegister = sectionRegister.querySelector('#btn-register');
  btnRegister.addEventListener('click', async () => {
    const email = sectionRegister.querySelector('#input-email').value;
    const password = sectionRegister.querySelector('#input-password').value;

    try {
      const user = await signinUserEmail(email, password);
      alert(`Bem vinda ${user.email}`);
      window.location.href = '/#login';
    } catch (error) {
      alert(error.message);
    }
  });

  return sectionRegister;
};
