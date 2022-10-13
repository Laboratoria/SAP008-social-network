/* eslint-disable no-alert */
import { redirectFeed } from '../../lib/redirect.js';
import { registerCreate } from '../../lib/auth.js';

function templateScreen() {
  return `
  <div class='container-register'>
  <form class='form'>
    <p class='name'>
      <label for='name-cadastro'>Nome:</label>
      <input id='name-cadastro' name='name-cadastro' required='required' type='text' placeholder='Nome' />
    </p>

    <p class='email-cadastro'>
      <label for='email-cadastro'>Email:</label>
      <input id='email-cadastro' name='email-cadastro' required='required' type='text' placeholder='Email' />
    </p>

    <p class='senha-cadastro'>
      <label for='senha-cadastro'>Senha:</label>
      <input id='senha-cadastro' required='required' type='password' placeholder='Senha' />
    </p>

    <p class='criar-conta'>
      <input class='btn-cadastre' type='submit' id='btn-cadastro' value='cadastre-se'>
    </p>
    <p class='voltar'>
      <input class='btn-back' type='button' value='voltar'>
    </p>
</form>`;
}

export default () => {
  const containing = document.createElement('div');
  const contentScreen = templateScreen();
  containing.innerHTML = contentScreen;
  const inputName = containing.querySelector('#name-cadastro');
  const inputEmail = containing.querySelector('#email-cadastro');
  const inputSenha = containing.querySelector('#senha-cadastro');
  const inputCadastro = containing.querySelector('#btn-cadastro');
  inputCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    registerCreate(inputName.value, inputEmail.value, inputSenha.value)
      .then((userCredential) => {
        const user = userCredential.user;
        redirectFeed();
        return user;
      })
      .catch((error) => {
        alert('Ops confira seus dados!', error);
      });
  })

  return containing;
};
