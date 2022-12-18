import { createUser } from '../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <section class='contenderRegister'section>
      <div class="navRegister">
  
          <a href="/#login" ><img src="img/return.png" alt="voltar" id="voltarRegister"></a>
        
          <h1 class='tituloRegister'>Bem vinda!</h1>
        
      </div>

      <main class="register">
        <form class="formRegister">

          <div class="boxLegendaInput">
            <label class="legendaRegister">Nome completo</label>
            <input type="text" id="nameRegister" placeholder="digite seu nome" class="btnRegister" >
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Data de nascimento</label>
            <input type="date" id="dataRegister" class="btnRegister">
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Email</label>
            <input type="email"  id="usernameRegister" placeholder="example@gmail.com"  class="btnRegister">
          </div>

          <div class="boxLegendaInput">
            <label class="legendaRegister">Senha</label>
            <input type="password"  id="passwordRegister" placeholder="********"  class="btnRegister">
          </div>

          <div class="boxLegendaInput">
          </div>

          <div  class="botaoRegister">
          <button id="cadastrarRegister">Cadastre-se</button>  
          </div>

        </form>
        </main>
    </section>
        `;
  container.innerHTML = template;

  const form = container.querySelector('#cadastrarRegister');
  const email = container.querySelector('#usernameRegister');
  const senha = container.querySelector('#passwordRegister');
  const name = container.querySelector('#nameRegister');
  
  form.addEventListener('click', (e) => {
    e.preventDefault();
    createUser(name.value, email.value, senha.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
      });
  });
  return container;
};
