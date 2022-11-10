/* eslint-disable no-alert */

import { signIn } from '../../lib/index.js';

export const mainLogin = () => {
  const printElements = document.createElement('div');
  printElements.innerHTML = `
    <div class='logo'>
    <p>LOGO!</p>
    </div>
  <form class='input-container'> 
    <input class='input-email' type='text' id='email'/>
    <input class='input-password' type='text' id='password'/>
    <a id='btn-cadastro'href='#register'>Cadastre-se</a>
    <button type='button' class='btn-enter' id='btnEnter'>Entrar</button>
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
