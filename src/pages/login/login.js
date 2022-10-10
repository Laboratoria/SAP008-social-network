import { loginUser, loginGoogle } from '../../auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
        <figure class='img-logo-mobile imgFlip'>
            <img src='./imagens/logo-mobile.png' alt='logo'>
        </figure>

        <figure class='img-logo-desktop'>
            <img src='./imagens/logo-desktop.svg' alt='logo'>
        </figure>

        <form id='form' class='form-login bounce'>
            <h1 class='title-login'>Inicie a sua sessão</h1>
            <section class='inputs'>
            <label for='email' class='label'>Digite seu e-mail</label>
            <input type='email' placeholder='seuemail@gmail.com' id='email' class='input-email' />
            </section>

            <section class='inputs'>
            <label for='password'>Digite sua senha</label>
            <input type='password' placeholder='******' id='password' class='input-password' />
            </section>
            <p id='error-code'></p>
            <section class='buttons'>
            <button type='submit' class='btn-login'>Iniciar Sessão</button>
            <button type='submit' class='btn-google'><img class='img-google' src='./imagens/google.svg'/> Entrar com Google</button>
            </section>

            <h6 class='text'> Não possui conta?</h6>
            <button type='submit' class='btn-register'>Criar nova conta</button>
            </form>    
    `;

  container.innerHTML = template;

  const form = container.querySelector('#form');
  const buttonRegister = container.querySelector('.btn-register');
  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const buttonGoogle = container.querySelector('.btn-google');
  const getErrorMessage = container.querySelector('#error-code');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    loginUser(inputEmail.value, inputPassword.value)
      .then(() => {
        window.location.hash = '';
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            getErrorMessage.innerHTML = 'Ops! Usuário não encontrado!';
            break;
          case 'auth/invalid-email':
            getErrorMessage.innerHTML = 'Ops! O endereço de e-mail não é válido!';
            break;
          case 'auth/wrong-password':
            getErrorMessage.innerHTML = 'Ops! Senha incorreta!';
            break;
          case 'auth/invalid-display-name':
            getErrorMessage.innerHTML = 'Ops! O nome do usuário é inválido.';
            break;
          default:
        }
        return `Aconteceu um erro não identificado, por favor entre em contato com as desenvolvedoras e indique o código que aparecerá a seguir: ${error.code}`;
      });
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#signup';
  });

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '';
      })
      .catch((error) => error);
  });

  return container;
};
