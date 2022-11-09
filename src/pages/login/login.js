/* eslint-disable no-alert */

export const mainLogin = () => {
  const printElements = document.createElement('div');
  printElements.innerHTML = `
    <div class='logo'>
    <p>LOGO</p>
    </div>
  <form class='input-container'> 
    <input class='input-email' type='text' id='email'/>
    <input class='input-password' type='text' id='password'/>
    <a id='btn-cadastro'href='#register'>Cadastre-se</a>
    <a href="#feed">
    <button type='button' class='btn-enter' id='btnEnter'>Entrar</button>
    </a>
  </form>
    `;

  return printElements;
};
