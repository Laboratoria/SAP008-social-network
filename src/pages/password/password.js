export default () => {
  const sectionPassword = document.createElement('section');
  const content = `
    <section class='boxModel'>
      <form>
        <h2 class="titleSenha">Vamos recuperar sua senha!</h2>
        <input class="recuperarSenha" type="text" id="username" placeholder="E-mail"  value="">
        <div class="">  Ops, confira seus dados! </div>
        <button class="btnContinuar" type="submit" >CONTINUAR</button>
      </form>
    </section>`;
  sectionPassword.innerHTML = content;
  return sectionPassword;
};
