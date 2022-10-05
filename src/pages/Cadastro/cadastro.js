import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { app } from "../../config-firebase.js";
import { register } from "../../lib/getAuth.js";

export default () => {
  const containerRegistration = document.createElement("div")
  const template = `
  <div class="container-registration">
    <div class="btnback">
      <button type="button" id="btn-back" onclick="window.location.href='/#login'">
        Voltar
      </button>
        <img id="one-logo" src="./imagens/image-2.png">
    </div>
    <div>
      <img id="logo-inspire" src="./imagens/INspire.png">
    </div>
      <div class="registration-input">
      
      <p>Apenas o seu nome de perfil ficará visível para outros usuários.</p>
      <input type="text" name="name" id="input-name" class="input" placeholder="Digite seu nome"required> 
      <input type="text" name="profile-name" id="input-profile-name" class="input" placeholder="Nome do perfil " required>
      <input type="email" name="email" id="input-email-registration" class="input" placeholder="Digite seu email" required>
      <input type="password" id="password" class="input" placeholder="Senha" required>
      <button type="button" id="button-registration" class="button">Finalizar cadastro</button>
      </div>
  
   </div>
  
  `
  containerRegistration.innerHTML = template;


  const auth = getAuth(app);
  const nameUser = containerRegistration.querySelector("#input-name")
  const nameProfile = containerRegistration.querySelector("#input-profile-name")
  const email = containerRegistration.querySelector("#input-email-registration")
  const password = containerRegistration.querySelector("#password")
  const btnRegistration = containerRegistration.querySelector("#button-registration")


  btnRegistration.addEventListener("click", function (e) {
    e.preventDefault();
    register (email.value, password.value, nameProfile.value, nameUser.value)

  })

  return containerRegistration

}
