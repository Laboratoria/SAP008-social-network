export default () => {
    const container = document.createElement('div');
    const template =
        `<section class="container">
      <div class="frame">
        <h1 class="titles">Cadastre-se<br>no BatePrato</h1>

        <button id="google-login" class="signin-btn">Entrar com Google</button>

        <div class="lines">
          <hr style="margin-right: 5%">
          <p>ou</p>
          <hr style="margin-left: 5%">
        </div>

        <button id="email-signin" class="signin-btn">Inscreva-se com e-mail</button>

        <p class="instructions">Ao se inscrever, você concorda com os
        <a class="cta" href="">Termos<br>de Serviço</a> e a
        <a class="cta" href="">Política de Privacidade</a>, incluindo<br>o
        <a class="cta" href="">Uso de Cookies.</a>
        </p>

        <p class="instructions">Já tem uma conta? <a href="/#entrar" class="cta">Entrar</a></p>
      </div>
      <div class="logo"></div>
    </section>`;
    container.innerHTML = template;
    return container;
}