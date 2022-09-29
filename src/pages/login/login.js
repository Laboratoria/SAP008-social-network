import { loginUser, loginGoogle, getErrorMessage} from "../../auth.js"

export default () => {
    const container = document.createElement('div');

    const template = `
        <figure class="img-logo imgFlip">
            <img src="./imagens/logo-mobile.png" alt="logo">
        </figure>

        <form class="form-login bounce">
            <h1 class="title-login">Inicie a sua sessão</h1>
            <section class="inputs">
            <label for="email" class="label">Digite seu e-mail</label>
            <input type="email" placeholder="seuemail@gmail.com" id="email" class="input-email" />
            </section>

            <section class="inputs">
            <label for="password">Digite sua senha</label>
            <input type="password" placeholder="****" id="password" class="input-password" />
            </section>

            <section class="buttons">
            <a href="#login" class="btn-login">Iniciar Sessão</a>
            <a href="#loginGoogle" class="btn-google"><img class="img-google" src="./imagens/google.svg"/> Entrar com Google</a>
            <a href="#signup" class="btn-register">Criar nova conta</a>
            </section>
        </form>
    `;

    container.innerHTML = template;


const buttonLogin = container.querySelector('.btn-login');
const buttonRegister = container.querySelector('.btn-register');
const inputEmail = container.querySelector('#email');
const inputPassword = container.querySelector('#password');
const buttonGoogle = container.querySelector('.btn-google');

buttonLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginUser(inputEmail.value, inputPassword.value)
    .then(() => {
      container.innerHTML = '';
      window.location.hash = '';
    })
    .catch((error) => {
        console.log(getErrorMessage(error))
        getErrorMessage(error) 
    });
});

buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
        window.location.hash = '#signup';
      });

      buttonGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle ()
          .then(() => {
            window.location.hash = '';
          })
          .catch((error) => {
            // const getErrorMessage = error.message;
            // const getErrorCode = error.code;
            // const email = error.customData.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
    // ..
          });
      });

      
      return container;
    }