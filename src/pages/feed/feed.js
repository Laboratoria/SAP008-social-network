export default () => {
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
