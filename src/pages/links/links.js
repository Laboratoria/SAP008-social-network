export default () => {
  const containerLink = document.createElement('div');
  const templateLink = `
    <main class = 'container-welcome'>
      <nav class="top-nav">
        <picture>
          <img class="logo-feed" src="imagens/logoINspirefeed.png" alt="Logo" />
        </picture>
        <picture class= 'btns-nav'>
          <a href="#login" id="logout">
            <img  class="button-logout" src="imagens/btnlogout.png" alt="Botão Sair">
          </a> 
          <button class='btn-link' id='btn-link'>
            <img class='btn-link-img' src='./imagens/btn-link.png'>
          </button>
        </picture>
      </nav>
  
      <p class = 'message-welcome'>
        links
      </p>
      <button id="signin-button" class="signin-button btn">Seguir para o feed
      </button>        
    </main>
    
  `;

  containerLink.innerHTML = templateLink;
  return containerLink;
};
