import { signIn, signInGoogle } from '../../lib/auth.js';
import { errorsFirebase } from '../../lib/error.js';
import { validateFormlogin } from '../../lib/authenticate.js';

export default function Login() {
  const login = document.createElement('div');
  login.classList.add('login-main');
  login.innerHTML = `   
      <main class="main">
        <div class =logo-e-form>
          <div class = 'field-logo'>
            <img class="logo" src="imagens/logoINspire.png" alt="Logo" />
          </div>
    
          <form class="login-form">
            <p id= 'error-message' class = 'error-message'></p>
            <input class="login-input email" type="email" placeholder="E-mail do usuário" required>
            <input class="login-input password" type="password" placeholder="Senha" required>
          
            <div class="signin">
              <button id="signin-button" class="signin-button btn">ENTRAR</button>
              <button id="google-button" class="google-button btn">
              <img class="google-icon-btn" src="imagens/btngoogle.png" alt="Logo do Google"/>LOGAR COM O GOOGLE</button>        
            </div>  
            <div>
              <button id="signup-button" class="signup-button btn"> Não tem uma conta? 
              <a href="/#register">Cadastre-se</a>
            </button>
          </div>
          </form>
        </div>
      </main>
      `;

  const signInButton = login.querySelector('#signin-button');
  const email = login.querySelector('.email');
  const password = login.querySelector('.password');
  const googleBtn = login.querySelector('#google-button');
  const messageError = login.querySelector('#error-message');

  signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    const validate = validateFormlogin(email.value, password.value);
    if (validate) {
      messageError.innerHTML = validate;
    } else {
      signIn(email.value, password.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          const errorCode = errorsFirebase(error.code);
          messageError.innerHTML = errorCode;
        });
    }
  });

  googleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        window.location.hash = 'feed';
      })
      .catch((error) => {
        const errorCode = errorsFirebase(error.code);
        messageError.innerHTML = errorCode;
      });
  });

  return login;
}
