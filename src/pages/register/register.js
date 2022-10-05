import { register } from "../../lib/auth.js";

export default () => {
  const containerRegistration = document.createElement("div")
  const template = 
  `<div class="container-registration">
      <button type="button" class="btn-back" onclick="window.location.href='/#login'">&#11013 voltar</button>

      <div class="logo-tittle">
        <img id="one-logo-coração" src="./imagens/image-2.png">
        <p class="tittle-logotype">INspire</p>
      </div>

      <div class="registration-input">
        <input type="text" name="profile-name" id="input-profile-name" class="input" placeholder="Nome do perfil " required>
        <input type="email" name="email" id="input-email-registration" class="input" placeholder="Digite seu email" required>
        <input type="password" id="password" class="input" placeholder="Senha" required>
      </div>
      <button type="button" id="button-registration" class="button">Finalizar cadastro</button>
  
    </div>
  
  `
  containerRegistration.innerHTML = template;



  const nameProfile = containerRegistration.querySelector("#input-profile-name")
  const email = containerRegistration.querySelector("#input-email-registration")
  const password = containerRegistration.querySelector("#password")
  const btnRegistration = containerRegistration.querySelector("#button-registration")

  btnRegistration.addEventListener("click", function (e) {
    e.preventDefault();
    register(email.value, password.value, nameProfile.value)
    .then(function () {
      alert("Bem vindo" + email.value);
      window.location.hash = "login";
    })
    .catch(function (error) {
      console.error(error.code)
      alert("falhou")

    });

  });


  return containerRegistration

}
