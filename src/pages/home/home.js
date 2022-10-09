import { app } from "../../lib/configuration.js";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "../../lib/firebase.js";


export default () => {
  const container = document.createElement('div');
  const conteudo = geraTemplate();
  container.innerHTML = conteudo;

  const inputEmail = container.querySelector('#email-login');
  const inputSenha = container.querySelector('#senha-login');
  const formLogin = container.querySelector('.form');

  configuraSubmitDoForm(formLogin, inputEmail, inputSenha);
 

function configuraSubmitDoForm(form, inputEmail, inputSenha) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputEmail.value, inputSenha.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  })
}



const btnGoogle = container.querySelector('#btn-google');
initWithGoogle(btnGoogle);

function initWithGoogle(){
  btnGoogle.addEventListener('submit', (e) =>{
    e.preventDefault(app);
    const authgoogle = getAuth();
    signInWithPopup(authgoogle, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      alert("Bem vindo(a)!");
      window.location.hash = "#entrar";
    }).catch((error) => {
      alert("Ops confira seus dados!" );
    });
})}





return container;
};




/*const btnGoogle = container.querySelector('#btn-google');
initWithGoogle(btnGoogle);

function initWithGoogle(){
  btnGoogle.addEventListener('submit', (e) =>{
    e.preventDefault(app);
    const authgoogle = getAuth();
    signInWithPopup(authgoogle, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      alert("Bem vindo(a)!");
      window.location.hash = "#entrar";
    }).catch((error) => {
      alert("Ops confira seus dados!" );
    });
})}*/


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
    <p class="register">
      <input href="#entrar" type="submit" value="Entrar" class="btnEntrar"/>
    </p>
    <p class="register">
      <a href="#paracadastro" class="cadastre">Cadastre-se</a>
    </p>
    <p class="textGoogle">Entre também com:</p>
    <p class="textGoogle">
      <input class="loginGoogle" type="button" id="btn-google" value="Google" class="imgGoogle">
    </p>
    <p>
      <a href="#sobre" class="sobrepage">Sobre</a>
    </p>
  </form>`;
}




