import { createUser } from '../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `

      <header class="navRegister">
        <div class='divBtnReturn'>
          <img src="img/return.png" alt="voltar" id="voltarRegister">
        </div>
        <div>
          <h1 class='tituloRegister'>Bem vinda!</h1>
        </div>
        <div>
          <img src="img/cookie.png" alt="logo-cookie" id="cookieRegister">
        </div>
      </header>
      <main class="register">
        <form class="formRegister">
          <div class="boxLegendaInput">
            <label class="legendaRegister">Nome completo</label>
            <input type="text" id="nameRegister" placeholder="digite seu nome" class="btnRegister" >
          </div>
          <div class="boxLegendaInput">
            <label class="legendaRegister">Data de nascimento</label>
            <input type="date" id="dateRegister" class="btnRegister">
          </div>
          <div class="boxLegendaInput">
            <label class="legendaRegister">Email</label>
            <input type="email"  id="usernameRegister" placeholder="example@gmail.com"  class="btnRegister">
          </div>
          <div class="boxLegendaInput">
            <label class="legendaRegister">Senha</label>
            <input type="password"  id="passwordRegister" placeholder="********"  class="btnRegister">
          </div>
            <button id="cadastrarRegister">Cadastre-se</button>  

        </form>
        </main>
        `;
  container.innerHTML = template;
  const form = container.querySelector('.formRegister');
  const email = container.querySelector('#usernameRegister');
  const senha = container.querySelector('#passwordRegister');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submter o form');
    console.log(email.value);
    console.log(senha.value);
    createUser(email.value, senha.value)
      .then((user) => {
        console.log(user);
      });
  });
  return container;
};
