

// import { function } from '../../lib/auth.js';

export default () => {
  const containerForgotPassword = document.createElement("div")
  const template = `
    <main class="container-registration">
      <button type="button" class="btn-back">&#11013 voltar</button>

      <figure class="logo-tittle">
        <img id="one-logo-coração" src="./imagens/image-2.png">
        <p class="tittle-logotype">INspire</p>
      </figure>

      <forms class="registration-input">
        <input type="text" name="profile-name" id="input-profile-name" class="input" placeholder="Nome do perfil " required>
        <input type="email" name="email" id="input-email-registration" class="input" placeholder="Digite seu email". required>
        <input type="password" id="password" class="input" placeholder="Senha de 6 dígitos" required>
      </forms>
      <button type="button" id="button-registration" class="button">Finalizar cadastro</button>
  
    </main>
  
  `
  containerForgotPassword.innerHTML = template;




  return containerForgotPassword;

}
