/* eslint-disable no-alert */

import { signIn } from '../../lib/auth.js';

export const mainLogin = () => {
  const printElements = document.createElement('div');
  printElements.innerHTML = `
    <div class='logo'>
    <img src="/src/img/Logo.png" alt="logo borboleta" />
    <h1>"Nome da Marca"</h1>
    <h3>Mulheres que se transformam através da tecnologia.</h3>
    </div>
  <form class='input-container'> 
    <input class='input-email' type='text' id='email'/>
    <input class='input-password' type='password' id='password'/>
    <a id='btn-cadastro'href='#register'>Cadastre-se</a>
    <a href="#feed">
    <button type='button' class='btn-enter' id='btnEnter'>Entrar</button>
    </a>
  </form>
    `;

  const btnEnter = printElements.querySelector('#btnEnter');
  btnEnter.addEventListener('click', async () => {
    const email = printElements.querySelector('#email').value;
    const password = printElements.querySelector('#password').value;

    try {
      const user = await signIn(email, password);
      alert(`Bem vinda ${user.email}`);
      window.location.href = '/#feed';
    } catch (error) {
      alert(error.message);
    }
  });
  return printElements;
};
