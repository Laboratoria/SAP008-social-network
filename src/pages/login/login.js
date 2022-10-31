import { userLogin, loginGoogle } from '../../firebase/auth.js';
import { errorMessages, validationLogin } from '../../firebase/error.js';

export default () => {
  const container = document.createElement('div');

  const telaLogin = `
  <section id='everything'>

    <section class='signup'>
      <h1>Bem vindo(a)</h1>
      <hr>
      <p>Troque experiências, receba dicas e compartilhe informações!</p>
      <a href='#register' class='register-desktop'>CADASTRE-SE</a>
    </section>

    <section class='login'>
      <figure class='logo-desktop'>
        <img src='../pages/icones/cegonha-azul.png' id='cegonha-azul'
          alt='logo'>
          <h1>BabySteps</h1>
      </figure>

      <figure class='logo-mobile'>
        <img src='../pages/icones/cegonha-branca.png' id='cegonha-branca'
          alt='logo'>
          <h1>BabySteps</h1>
      </figure>
      
      <form class='form' id='form-login'>
        <section class='input'>
          <input class='infos' id='email' type='email' placeholder='Email'>
          <p id='error'></p>
          <input class='infos' id='password' type='password' placeholder='Senha'>
        </section>

        <span class='forgot'><p>Esqueci minha senha</p></span>
        
        <section class='buttons'>
          <a class='btn' id='submit-login' href='#login'>Login</a>
          <a class='btn' id='submit-google' href='#login'>Entrar com o google</a>
          <img src='../icones/icone-google.png' alt="">
        </section>

        <span id='create'>
        <p>Não possui conta? <a id='register-mobile' href='#register'>Cadastre-se</p></a>
        </span>
      </form>
    </section>
  </section>
`;

  container.innerHTML = telaLogin;
  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const errorMessage = container.querySelector('#error');
  const btnLogin = container.querySelector('#submit-login');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const validateLogin = validationLogin(inputEmail.value, inputPassword.value);
    if (validateLogin === '') {
      userLogin(inputEmail.value, inputPassword.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          errorMessage.innerHTML = errorMessages(error);
        });
    } else {
      errorMessage.innerHTML = validateLogin;
    }
  });

  const btnGoogle = container.querySelector('#submit-google');
  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle().then(() => {
      window.location.hash = '#feed';
    })
      .catch((error) => error);
  });

  return container;
};
