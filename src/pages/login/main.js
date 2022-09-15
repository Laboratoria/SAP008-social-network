export default () => {
  const loginContainer = document.createElement('div');
  const template = `
          <header class="header-login display-flex">
              <a href="/#homepage" class="return-btn"><img class="return-btn" src="img/returnBtn.png" alt="Return button"></a>
              <h1><img class="img-logo-login" src="img/Rebu.png" alt="Rebu Logo"></h1>
          </header>
          <main id="login-page" class="login-page display-flex">
            <form class="login-form display-flex">
                <h2 class="login-text">ENTRAR</h2>
                <input type="text" placeholder="  E-MAIL" id="email-input-login" class="input-text-login"><p>
                <input type="text" placeholder="  SENHA" id="password-input-login" class="input-text-login"></p>
                <a href="/#resetpassword" class="link-text">ESQUECEU SUA SENHA? CLIQUE AQUI</a>
                <a href="/#feed"><button type="button" id="btn-login-page" class="btn-login">ENTRAR</button></a>
                <legend class="google-login-legend">OU
                <p>ENTRE COM O GOOGLE</p>
                </legend>
                <a href="/#feed"><img class="google-btn" src="img/googleIcon.png" alt="Google button"></a>
                <a href="/#register" class="link-text">NÃO POSSUI UMA CONTA? CADASTRE-SE!</a>
            </form class="login-form">
          </main>
      `;
  loginContainer.innerHTML = template;
  return loginContainer;
};
