import { createUser } from '../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <section class="register">
        <img src="return.png" alt="voltar" id="voltarRegister">

        <h1 class='tituloRegister'>Bem vinda!</h1>
        <img src="cookie.png" alt="logo-cookie" id="cookieRegister">


        <form class="formRegister">

            <label>Nome completo</label>
            <input type="text" id="nameRegister" >

            <label>Data de nascimento</label>
            <input type="date" id="dateRegister" >

            <label>Email</label>
            <input type="email"  id="usernameRegister" placeholder="example@gmail.com">

            <label>Senha</label>
            <input type="password"  id="passwordRegister" placeholder="********">

            <button id="CadastrarRegister">Cadastre-se</button>  
        </form>
     
    </section>
        `;
  container.innerHTML = template;
  const form = container.querySelector('.formRegister');
  const date = container.querySelector('#dateRegister');
  const email = container.querySelector('#usernameRegister');
  const senha = container.querySelector('#passwordRegister');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submter o form');
    console.log(email.value);
    console.log(date.value);
    console.log(senha.value);
    createUser(email.value, senha.value)
      .then((user) => {
        console.log(user);
      });
  });
  return container;
};
