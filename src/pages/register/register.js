/* eslint-disable no-alert */
import { redirectFeed } from '../../lib/redirect.js';
import { createRegister, updateDisplayName } from '../../lib/auth.js';

function templateScreen() {
  return `
  <div class='container-register'>
  <div class='boxModelFormRegistro'>
  <form class='form'>
  <img class='logoRegistro' src='../../img/logoTranp.png' alt='Logo Wanderlust'>
    <p class='name'>
      <label for='name-cadastro'>Nome:</label>
      <input class='inputCadastro' id='name-cadastro' name='name-cadastro' required='required' type='text' placeholder='Nome' />
    </p>

    <p class='email-cadastro'>
      <label for='email-cadastro'>Email:</label>
      <input class='inputCadastro' id='email-cadastro' name='email-cadastro' required='required' type='text' placeholder='Email' />
    </p>

    <p class='senha-cadastro'>
      <label for='senha-cadastro'>Senha:</label>
      <input class='inputCadastro' id='senha-cadastro' required='required' type='password' placeholder='Senha' />
    </p>

    <p class='criar-conta'>
      <input class='btn-cadastre' type='submit' id='btn-cadastro' value='cadastre-se'>
    </p>
    <p class='voltar'>
      <input id="btn-home" class="btnBack" type="button" value="voltar">
    </p>
    </div>
    </div>

</form>`;
}

function configuraSubmitDoFormRegistrar(form, inputName, inputEmail, inputSenha) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createRegister(inputEmail.value, inputSenha.value)
      .then((userCredential) => updateDisplayName(userCredential.user, inputName.value))
      .then(() => {
        redirectFeed();
      })
      .catch((error) => {
        alert('Ops confira seus dados !', error);
      });
  });
}

export default () => {
  const containing = document.createElement('div');
  const contentScreen = templateScreen();
  containing.innerHTML = contentScreen;
  const inputName = containing.querySelector('#name-cadastro');
  const inputEmail = containing.querySelector('#email-cadastro');
  const inputSenha = containing.querySelector('#senha-cadastro');
  const inputCadastro = containing.querySelector('.form');
  const btnGoOut = containing.querySelector('#btn-home');
  configuraSubmitDoFormRegistrar(inputCadastro, inputName, inputEmail, inputSenha);

  btnGoOut.addEventListener('click', () => {
    window.location.hash = '#home';
  });

  return containing;
};
