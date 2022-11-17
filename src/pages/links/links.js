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
        
          <a href='#login' id='logout'>
            <img  class='button-logout' src='imagens/btnlogout.png' alt='Botão Sair'>
          </a> 
      </nav>
      <nav class='btn-link'>
          <img id='btn-link-img' class='btn-link-img' alt='links' src='./imagens/btn-link.png'>
          <img id='btn-about-link' class='btn-about' alt='desenvolvedoras da aplicação' src="./imagens/aboutt.png">
          <img id='btn-home' class='btn-home' alt='feed da aplicação' src="./imagens/home.png">
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
      </div>
    </main>
    
  `;

  containerLink.innerHTML = templateLink;

  const buttonLogout = containerLink.querySelector('.button-logout');
  const messageError = containerLink.querySelector('#error-message');
  const btnAbout = containerLink.querySelector('#btn-about-link');
  const btnHome = containerLink.querySelector('#btn-home');

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

  // botao navegar para a página about //
  btnAbout.addEventListener('click', () => {
    window.location.hash = '#about';
  });

  // botao navegar para a página feed //
  btnHome.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  return containerLink;
};
