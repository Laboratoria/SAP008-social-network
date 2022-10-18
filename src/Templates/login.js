import { loginEmailPassword } from "../lib/index.js";

export default () => {
    const container = document.createElement("div");

    const template = `
      <section class="content">

         <div class="logoCookieLogin">
         <img src="img/logoCookie.png" alt="logo-cookie" class="cookie-login" id="cookieLogo">
         <h2 class="frase-login">COOKIE</h2>
         </div>

         <div class="form-login">
         
         <div class="form-cx">
            <label for="email">Email</label><br>
            <input type="text" id="email" autocomplete="off" placeholder="cookie@cookie.com.br">
         </div>

         <div class="form-cx">
            <label for="password">Senha</label><br>
            <input type="password" id="password" autocomplete="off" placeholder="***********">
         </div>

         <div class="form-botaoentrar">
            <input type="submit" value="Entrar" class="botaoEntrar" id="botaoEntrar">
         </div>
         
         <div class="linha-ou">
            <div class="linha" ></div>
            <p>ou</p>
            <div class="linha" ></div>
         </div>
         
         <div class="form-google">
            <a href="#" class="google" >
            <i class="fa-brands fa-google-plus-g"></i>Entrar com o Google
            </a>
         </div>

         <div class="form-cadastre">
            Não tem uma conta? <a href="#register" class="cadastrar-se">Cadastre-se</a>
         </div>

         </div>
      </section>
   `
    container.innerHTML = template;
    
   const login = container.querySelector("#botaoEntrar")
   const email = container.querySelector("#email")
   const password = container.querySelector("#password")

   login.addEventListener("click", (e)=>{
      e.preventDefault();
      console.log(email.value)
      console.log(password.value)

      loginEmailPassword(email.value, password.value)
      .then(()=>{
         window.location.hash = "#feed";
      })
      .catch((error)=>{
         console.log(error)
      })
   }) 
   return container;
 }


