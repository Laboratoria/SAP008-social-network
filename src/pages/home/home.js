import { app } from "../../lib/configuration.js";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "../../lib/firebase.js";
import { redirecionaParaOFeed } from "../../lib/redirect.js";


export default () => {
  const container = document.createElement('div');
  const conteudo = geraTemplate();
  container.innerHTML = conteudo;

  const inputEmail = container.querySelector('#email-login');
  const inputSenha = container.querySelector('#senha-login');
  const formLogin = container.querySelector('.form');
  const btnGoogle = container.querySelector('#btn-google');
  initWithGoogle(btnGoogle);
  configuraSubmitDoForm(formLogin, inputEmail, inputSenha);
  return container;
};

function configuraSubmitDoForm(form, inputEmail, inputSenha) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputEmail.value, inputSenha.value)
      .then((userCredential) => {
        const user = userCredential.user;
        redirecionaParaOFeed()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  })
}

function initWithGoogle(btnGoogle){
  btnGoogle.addEventListener('click', (e) =>{
    e.preventDefault(app);
    const authgoogle = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(authgoogle, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      redirecionaParaOFeed()
    }).catch((error) => {
      alert('Ops confira seus dados!');
    });
})}

function geraTemplate() {
  return `
  <div class="container" id="template-form">
  <form class="form">
  <img src="img/logo.png" class="logo" alt="Logo Wanderlust">
  <p class="register">
  <label for="email-login" >Email:</label>
  <input id="email-login" class="emailSenha" name="email-login" required="required" type="text" placeholder="Digite seu email" />
  </p>
  <p class="register">
  <label for="senha-login">Senha:</label>
  <input id="senha-login" class="emailSenha" name="senha-login" required="required" type="password" placeholder="Digite sua senha" />
  </p>
  <p class="register">
  <a href="#recuperarsenha" class="esqueciSenhaCadastre">Esqueci minha senha!</a>
  </p>
    </form>
  <p class="register">
  <input type="submit" value="Entrar" class="btnEntrar"/>
  </p>
  <p class="register">
    <a href="#paracadastro" class="cadastre">Cadastre-se</a>
  </p>
  <p class="textGoogle">Entre também com:</p>
  <p class="textGoogle">
    <button class="loginGoogle" id="btn-google" class="imgGoogle"> Google</button>
  </p>
  <p>
  <a href="#sobre" class="sobrepage">Sobre</a>
  </p>`;
}
  

  
  