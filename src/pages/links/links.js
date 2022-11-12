import { logout } from '../../lib/auth.js';
import { errorsFirebase } from '../../lib/error.js';

export default () => {
  const containerLink = document.createElement('div');
  const templateLink = `
    <main class = 'main-div'>
      <nav class='top-nav'>
        <picture>
          <img class='logo-feed' src='imagens/logoINspirefeed.png' alt='Logo' />
        </picture>
          <button class='btn-link' id='btn-link'>
            <img class='btn-link-img' src='./imagens/btn-link.png'>
          </button>
          <a href='#login' id='logout'>
            <img  class='button-logout' src='imagens/btnlogout.png' alt='Botão Sair'>
          </a> 
      </nav>
      <div class='mental-health-links'>
        <h1 class = 'title-page-link'>
          Como você esta?
          Como esta a sua saúde mental?       
        </h1>
        <p id= 'error-message' class = 'error-message'> </p>
        <p>
          O cuidado com a nossa mente é essencial para a nossa capacidade 
          de viver e gerir a vida, por esse motivo reunimos alguns sites 
          e aplicativos que podem nos ajudar com esse cuidado no dia a dia.
        </p>
          
          <section class='section-links'>
            <a class='title-link' href='https://www.calm.com/pt'>Calm</a>
            <p class='paragrafo'>
              O Calm oferece exercícios de respiração, músicas tranquilizantes e programas de
              meditação guiada que ajudam a combater a ansiedade, melhorar a qualidade do sono 
              e auxiliar na concentração.
              O aplicativo conta ainda com sons de ondas do mar, chuva 
              e fogueira, conteúdos de atenção plena, treinos de alongamento do corpo e uma biblioteca 
              de histórias para dormir.
            </p>
            <a class='title-link' href='https://www.happify.com/'>Happify</a>
            <p class='paragrafo'>
              Aplicativo que carrega diversas atividades, exercícios e jogos rápidos, 
              desenvolvidos por especialistas em psicologia cognitivo-comportamental, 
              para aumentar os níveis de felicidade.
            </p>
            <a class='title-link' href='https://www.headspace.com/pt/'>Headspace</a>
            <p class='paragrafo'>
              É um aplicativo de meditação, com exercício voltados para diferentes focos, 
              como ansiedade, sono, crises emocionais, crescimento pessoal ou até mesmo 
              meditações ativas, feitas durante corridas e caminhadas. 
            </p>
            <a class='paragrafo' href='https://play.google.com/store/apps/details?id=net.daylio&hl=pt_BR&gl=US'>Daylio</a>
            <p>
              O Daylio é um aplicativo que funciona como um diário de emoções,
              basta abrir o aplicativo e escolher entre as opções que ele oferece 
              para manter seu diário.
            </p>
        </section>
        <button id='back-feed' class='signin-button btn'>Voltar para o feed
        </button>        
      </button>        
        </button>        
      </div>
    </main>
    
  `;

  containerLink.innerHTML = templateLink;

  const btnFeedLinks = containerLink.querySelector('#back-feed');
  const buttonLogout = containerLink.querySelector('.button-logout');
  const messageError = containerLink.querySelector('#error-message');

  btnFeedLinks.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout()
      .then(() => { window.location.hash = 'login'; })
      .catch((error) => {
        const errorCode = errorsFirebase(error.code);
        messageError.innerHTML = errorCode;
        messageError.classList.add('show');
      });
  });

  return containerLink;
};
