export default () => {
    const container = document.createElement('div');
  
    const telaLogin = `
  <div id="everything">
  <div class="signup">
  <h1>Rede de apoio</h1>
  <hr>
  <p>Para mamães e papais<br> em fase de crescimento!</p>
  <button class="register-desktop">CADASTRE-SE</button>
  </div>
  <div class="login">
  <div class="logo">
  <img src="../pages/icones/cegonha-azul.png" class="logo-cegonha" alt="Imagem do logo em formato de cegonha segurando bebê">
  </div>
  <h1>BabySteps</h1>
  <div class="form">
  <input class="infos" id="email" type="email" placeholder="Email">
  <input class="infos" id="password" type="password" placeholder="Senha">
  <p class="forgot">Esqueci minha senha</p>
  <a class="btnLogin" href="login">Login</a>
  <a class="btnGoogle" href="login">Entrar com o google</a>
  <p class="create">Não possui conta? <a id="register-mobile" href="register">Cadastre-se</a></p>
  </div>
  </div>
  </div>
  
  `;
    container.innerHTML = telaLogin;
  
    return container;
  };
  
  // const inputEmail = container.querySelector('#email');
  // const inputPassword = container.querySelector('#password');
  // const buttonLogin = container.querySelector('.btnLogin');
  // const loginError = container.querySelector('#loginError');