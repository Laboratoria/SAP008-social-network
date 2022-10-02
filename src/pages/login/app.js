import { googleLogin, login, recover } from '../../lib/authentication.js';

export default () => {
  const container = document.createElement('div');
  const template = `  <div class="container-login">
    <div class="box-left">
      <div class="gif-box-left">
        <img id="gif-vanellen" src="./img/vanellen-gif.jpeg" alt="gif video">
        <p>Os melhores spoilers em um só lugar!</p>
      </div>
    </div>
  
    <div class="box-right">
      <div class="logo-login">
        <img id="logo-login" src="./img/logo.png" alt="logo">
      </div>
      </br>
      <div class="register">
        <p>Cadastre-se para obter informações de novos filmes e séries, dar a sua opinião e se conectar com pessoas que
          tem tudo a ver com você.</p>
  
        <button type="button" id="button-gmail" class="button">
          <span class="button-icon"><img id="logo-gmail" src="./img/gmail-logo.png" alt="Logo Gmail"></span>
          <span class="button-txt">Fazer login com Gmail</span>
        </button>
  
        <div class="break">
          <div class="line"></div>
          <div class="or">OU</div>
          <div class="line" id="line-right"></div>
        </div>
        <p>Já tem uma conta?</p>
  
        <div class="form">
          <input id="inputEmail" type="email" placeholder="E-mail" name="email" required>
          <input id="inputPassword" type="password" placeholder="Senha" name="password" required>
        </div>
        
        <div class="register">
        <div class="login-error-div" id="print-error-here"></div> 
        <span id="recover"> Esqueci a senha 😰 </span>
          <button type="button" id="button-enter" class="button">Entrar</button>
          <p id="registerr" >Não tem uma conta?</p>  <a href="#register" id="signUp" style="color:rgb(41, 73, 201); font-size:1rem"> Cadastre-se! </p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="wrapper-login"></div>
  
  <footer>
    <div class="foot">
      <img src="./img/lab.png" alt="logo Laboratória">
      <p id="devTo"> Developed by:</p>
      <p id="developers">Ellen Cavalcante <spa>&</span> Vanessa Bueck</p>
    </div>
  </footer>`;

  container.innerHTML = template;

  const buttonEnter = container.querySelector('#button-enter');
  const buttonGmail = container.querySelector('#button-gmail');
  const buttonRecover = container.querySelector('#recover');
  const inputEmail = container.querySelector('#inputEmail');
  const inputPassword = container.querySelector('#inputPassword');
  const signUp = container.querySelector('#signUp');

  buttonEnter.addEventListener('click', (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    login(email, password);
  });

  buttonGmail.addEventListener('click', (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    googleLogin(provider);
  });

  buttonRecover.addEventListener('click', (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    recover(email);
  });

  signUp.addEventListener('click', () => {
    window.location.href = '#register';
  });

  return container;
};
