import { resetPassword } from '../../lib/auth.js';

export default () => {
  const sectionPassword = document.createElement('section');
  const content = `
    <section class='containerPassword'>
      <form class="boxModelPass">
        <p>
          <img class='logoPass' src="/logoTranp.png" alt='Logo Wanderlust'>
        </p>
        <p class="titleSenha">
          <h3 class="titleSenha">Vamos recuperar sua senha!</h3>
        </p>
        <p>
          <input class="inputEmail" type="text" id="userEmail" placeholder="E-mail" value="">
          <div class="textError">  Ops, confira seus dados! </div>
        </p>
        <p>
          <input id="btn-reset" class="ResetPassword" type="button" value="Enviar email">
        </p>
        <p class="btnBack">
          <a href="index.html" class="link"><img class='logoPass' src="/setaBack.png" alt='Seta para voltar'></a>
        </p>
      </form>
    </section>`;
  sectionPassword.innerHTML = content;
  const inputEmail = sectionPassword.querySelector('#userEmail');
  const btnResetPassword = sectionPassword.querySelector('#btn-reset');
  btnResetPassword.addEventListener('click', (e) => {
    e.preventDefault();
    resetPassword(inputEmail.value)
      .then(() => {
        console.log('Email enviado com sucesso');
      })
      .cath((error) => {
        console.error(error);
      })
  });
  return sectionPassword;
};
