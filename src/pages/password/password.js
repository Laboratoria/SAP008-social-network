export default () => {
  const sectionPassword = document.createElement('section');
  const content = `
    <body class="bodyPassword">
      <section class='boxModel'>
        <form class="formPassword">
          <h2 class="titleSenha">Vamos recuperar sua senha!</h2>
          <input class="recuperarSenha" type="text" id="username" placeholder="E-mail"  value="">
          <div class="">  Ops, confira seus dados! </div>
          <button class="btnContinuar" type="submit" >CONTINUAR</button>
        </form>
      </section>
    <body>`;
  sectionPassword.innerHTML = content;
  return sectionPassword;
};
