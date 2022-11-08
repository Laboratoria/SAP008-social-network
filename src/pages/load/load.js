import { googleAccess } from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  const container = document.createElement('div');
  const template = `<link rel="stylesheet" href="style_load_login_signin.css" />
    <section class="container initial-page">
        <div class="frame">
          <h1 class="titles">Cadastre-se<br>no BatePrato</h1>
    
          <button id="google-login" class="solid-border-btn">Entrar com Google<img  class="google-icon" src="./external/svg/google-icon.svg"/></button>
    
          <div class="lines">
            <hr style="margin-right: 5%">
            <p>ou</p>
            <hr style="margin-left: 5%">
          </div>

          <a href="/#cadastre-se"><button id="email-signin-btn" class="solid-border-btn">Inscreva-se com e-mail</button></a>    
          <p class="instructions">Já tem uma conta? <a href="/#entrar" class="cta">Entrar</a></p>
        </div>
        <div class="logo">
          <img class="logo" alt="logo prato rachado BatePrato" src="./external/svg/logotipo.svg"/>
        </div>
    </section>`;
  container.innerHTML = template;

  const googleBtn = container.querySelector('#google-login');

  googleBtn.addEventListener('click', () => {
    googleAccess().then(() => {
      window.location.hash = '#home';
    });
  });
  return container;
};
