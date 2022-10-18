/* eslint-disable no-console */
import { resetPassword } from '../../lib/auth.js';
import { errorFire } from '../../lib/errorFirebase.js';

export default () => {
  const sectionPassword = document.createElement('section');
  const content = `
    <section class='containerPassword'>
      <form class="boxModelPass">
        <p>
          <img class='logoPass' src="/src/img/logoTranp.png" alt='Logo Wanderlust'>
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
        <p class="btnBack">
          <a href="index.html" class="link"><img class='logoPass' src="/src/img/setaBack.png" alt='Seta para voltar'></a>
        </p>
      </form>
    </section>`;
  sectionPassword.innerHTML = content;
  const inputEmail = sectionPassword.querySelector('#userEmail');
  const btnResetPassword = sectionPassword.querySelector('#btn-reset');
  const msgSucsses = sectionPassword.querySelector('#msgSucesso');
  const msgFirePassword = sectionPassword.querySelector('#erro-Firebase');
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
  return sectionPassword;
};
