import { userLogin, loginGoogle } from '../../firebase/auth.js';

export default () => {
  const container = document.createElement('div');

  const telaLogin = `
  <section id='everything'>

  <section class='signup'>
    <h1>Rede de apoio</h1>
    <hr>
    <p>Para mamães e papais<br> em fase de crescimento!</p>
    <button class='register-desktop'>CADASTRE-SE</button>
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
        <img src='../icones/icone-email.png' id='icon-email' alt="">
        <input class='infos' id='password' type='password' placeholder='Senha'>
        <img src='../icones/icone-cadeado.png' alt=''>
        <img src='../icones/icone-email.png' alt=''>
      </section>

      <span class='forgot'><p>Esqueci minha senha</p></span>

      <section class='buttons'>
        <a class='btn' id='submit-login' href='#login'>Login</a>
        <a class='btn' id='submit-google' href='#login'>Entrar com o google</a>
        <img src='../icones/icone-google.png' alt="">
      </section>

      <span id='create'><p>Não possui conta? <a id='register-mobile' href='#register'>Cadastre-se</p></a></span>
    </form>
  </section>
</section>

`;
  container.innerHTML = telaLogin;

  const btnLogin = container.querySelector('#submit-login');
  btnLogin.addEventListener('click', () => {
    const inputEmail = container.querySelector('#email').value;
    const inputPassword = container.querySelector('#password').value;

    userLogin(inputEmail, inputPassword)
      .then(() => {
        window.location.hash = '#feed';
        // const user = userCredential.user;

        console.log('você está logado');
      })
      .catch((error) => {
        const errorMessage = error.message;
        // const errorCode = error.code;
        console.log(errorMessage);
      });
  });
  const btnGoogle = container.querySelector('#submit-google');
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });

  return container;
};
