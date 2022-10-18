import { userLogin, loginGoogle } from '../../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const telaLogin = `
  <div id='everything'>
  <div class='signup'>
  <h1>Rede de apoio</h1>
  <hr>
  <p>Para mamães e papais<br> em fase de crescimento!</p>
  <button class='register-desktop'>CADASTRE-SE</button>
  </div>
  <div class="login">
  <div class="logo">
  <img src="../pages/icones/cegonha-azul.png" class="logo-cegonha" alt="Imagem do logo em formato de cegonha segurando bebê">
  </div>
  <h1>BabySteps</h1>
  <div class="form">
  <input class='infos' id='email' type='email' placeholder='Email'>
  <input class='infos' id='password' type='password' placeholder='Senha'>
  <p class='forgot'>Esqueci minha senha</p>
  <a class='btnLogin' href='login'>Login</a>
  <a class='btnGoogle' href='login'>Entrar com o google</a>
  <p class='create'>Não possui conta? <a id='register-mobile' href='register'>Cadastre-se</a></p>
  </div>
  </div>
  </div>
  
  `;
  container.innerHTML = telaLogin;

  const btnLogin = container.querySelector('#btnLogin');
  btnLogin.addEventListener('click', () => {
    const inputEmail = container.querySelector('#email').value;
    const inputPassword = container.querySelector('#password').value;

    userLogin(inputEmail, inputPassword)
      .then(() => {
        alert('você está logado');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
  const btnGoogle = container.querySelector('#logarGoogle');
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });

  return container;
};
