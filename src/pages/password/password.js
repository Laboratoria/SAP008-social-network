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
          <input class="inputEmail" type="text" id="username" placeholder="E-mail" value="">
          <div class="textError">  Ops, confira seus dados! </div>
        </p>
        <p>
          <input class="ResetPassword" type="button" value="Enviar email">
        </p>
        <p class="btnBack">
          <a href="index.html" class="link"><img class='logoPass' src="/src/img/setaBack.png" alt='Seta para voltar'></a>
        </p>
      </form>
    </section>`;
  sectionPassword.innerHTML = content;
  return sectionPassword;
};
