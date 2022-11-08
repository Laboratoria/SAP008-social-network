export default () => {
  const containerLink = document.createElement('div');
  const templateLink = `
    <main class = 'main-div'>
      <nav class="top-nav">
        <picture>
          <img class="logo-feed" src="imagens/logoINspirefeed.png" alt="Logo" />
        </picture>
          <button class='btn-link' id='btn-link'>
            <img class='btn-link-img' src='./imagens/btn-link.png'>
          </button>
          <a href="#login" id="logout">
            <img  class="button-logout" src="imagens/btnlogout.png" alt="Botão Sair">
          </a> 
      </nav>
      <div class='mental-health-links'>
        <h1 class = 'title-page-link'>
          Como você esta?
          Como esta a sua saúde mental?       
        </h1>
        <h2>
          Aqui reunimos alguns sites que podem te ajudar a entender melhor
          como cuidar da saúde mental, como e onde procurar ajuda.
        </h2>

        <article>
          <img src="">
        </article>
        <button id='back-feed' class="signin-button btn">Voltar para o feed
        </button>        
      </button>        
        </button>        
      </div>
    </main>
    
  `;

  containerLink.innerHTML = templateLink;

  const btnFeedLinks = containerLink.querySelector('#back-feed');

  btnFeedLinks.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  return containerLink;
};
