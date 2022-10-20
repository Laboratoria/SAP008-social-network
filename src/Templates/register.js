import { createUser } from '../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <section class='contenderRegister'section>
      <div class="navRegister">
  
          <img src="img/return.png" alt="voltar" id="voltarRegister">
        
          <h1 class='tituloRegister'>Bem vinda!</h1>
        
      </div>

      <main class="register">
        <form class="formRegister">

          <div class="boxLegendaInput">
            <label class="legendaRegister">Nome completo</label>
            <input type="text" id="caixaRegister" placeholder="digite seu nome" class="btnRegister" >
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Data de nascimento</label>
            <input type="date" id="caixaRegister" class="btnRegister">
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Email</label>
            <input type="email"  id="caixaRegister" placeholder="example@gmail.com"  class="btnRegister">
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Senha</label>
            <input type="password"  id="caixaRegister" placeholder="********"  class="btnRegister">
          </div>
          <button id="cadastrarRegister">Cadastre-se</button>  

        </form>
        </main>
    </section>
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
