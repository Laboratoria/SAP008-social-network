// aqui exportaras las funciones que necesites
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { app } from "../../config-firebase.js";


export default function Login() {
  const login = document.createElement('div');
  login.classList.add('login-main');
  login.innerHTML = `   
      <main class="main">
      <div class="logotype">
          <img class="logo" src="imagens/logoprovisorio.png" alt="Logo" />
        <p class="tittle-logotype">INspire</p>
        </div>
              
        <form class="login-form">
          <input class="login-input email" type="email" placeholder="E-mail do usuário" required>
          <input class="login-input password" type="password" placeholder="Senha" required>
        </form>
  
        <div class="signin">
          <button id="signin-button" class="signin-button btn">ENTRAR</button>
          <button id="google-button" class="google-button btn">
          <img class="google-icon-btn" src="imagens/btngoogle.png" alt="Logo do Google"/>LOGAR COM O GOOGLE</button>        
        </div>  

        <div>
        <button id="forgot-password" class="signup-button btn"> Esqueceu sua senha?</button>
      </div> 

        <div>
          <button id="signup-button" class="signup-button btn"> Não tem uma conta? 
          <a href="/#cadastro">Cadastre-se</a>
        </div> 
      </main>
      `;

  const signInButton = login.querySelector('#signin-button');
  const email = login.querySelector('.email');
  const password = login.querySelector('.password');
  const auth = getAuth(app);

  signInButton.addEventListener("click", function (e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(function (){
        alert ("Bem vindo" + email.value);
      })
      // .then((userCredential) => {
        //   // Signed in
        //   const user = userCredential.user;
        //   // ...
        .catch(function(error){
          console.error(error.code)
          alert("falhou")
          
        });
    window.location.hash="feed";
  
  })

 

  

  
  return login;
}

