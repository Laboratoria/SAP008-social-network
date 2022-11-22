/* eslint-disable no-console */
import { resetPassword } from '../../lib/auth.js';
import { errorFire } from '../../lib/errorFirebase.js';

export default () => {
  const sectionPassword = document.createElement('section');
  const content = `
    <section class='containerPassword'>
      <form class="boxModelPass">
        <p>
          <img class='logoPass' src="img/logoTranp.png" alt='Logo Wanderlust'>
        </p>
        <p class="titleSenha">
          <h3 class="titleSenha">Vamos recuperar sua senha!</h3>
        </p>
        <p>
          <input class="inputEmail" type="text" id="userEmail" placeholder="E-mail" value="">
        </p>
        <p>
          <div id="msgSucesso" class="msgErro"></div>
        </p>
        <p>
          <div id='erro-Firebase' class='msgErro'></div>
        </p>
        <p>
          <input id="btn-reset" class="ResetPassword" type="button" value="Enviar email">
        </p>
        <p class="sectionBackBtn">
          <a class="btnBackPass" id="btn-home"><img src='img/btnSair.png' alt='seta para sair'</a>
        </p>
        <div class='sectionSobrePassword'>
          <a href='#sobre' class='sobrepagePassword'>Sobre</a>
        </div>
      </form>
    </section>`;
  sectionPassword.innerHTML = content;
  const inputEmail = sectionPassword.querySelector('#userEmail');
  const btnResetPassword = sectionPassword.querySelector('#btn-reset');
  const msgSucsses = sectionPassword.querySelector('#msgSucesso');
  const msgFirePassword = sectionPassword.querySelector('#erro-Firebase');
  const btnGoOut = sectionPassword.querySelector('#btn-home');
  btnResetPassword.addEventListener('click', (e) => {
    e.preventDefault();
    resetPassword(inputEmail.value)
      .then(() => {
        msgSucsses.innerHTML = 'Email enviado com sucesso!';
      })
      .cath((error) => {
        const errorCode = errorFire(error.code);
        msgFirePassword.innerHTML = errorCode;
      });
  });
  btnGoOut.addEventListener('click', () => {
    window.location.hash = '#home';
  });
  return sectionPassword;
};
