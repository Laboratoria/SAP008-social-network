export default () => {
  const containerRegistration = document.createElement('div');
  const template = `
  <div class="container-registration">
    <div class="btnback">
      <button type="button" id="btn-back" onclick="window.location.href='/#login'">
        Voltar
      </button>
        <img id="one-logo" src="./imagens/image-2.png">
        <p>atualizado a main</p>
  
   </div>
  
  `;
  containerRegistration.innerHTML = template;

  return containerRegistration;

  const containerForgotPassword = document.createElement('div');
  const template = `
    <main class="container-registration">
      <button type="button" class="btn-back">&#11013 voltar</button>

      <figure class="logo-tittle">
        <img id="one-logo-coração" src="./imagens/image-2.png">
        <p class="tittle-logotype">INspire</p>
      </figure>

     
  
  `;
  containerForgotPassword.innerHTML = template;
  return containerForgotPassword;
};
