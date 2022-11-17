import { logout } from '../../lib/auth.js';
import { errorsFirebase } from '../../lib/error.js';

export default function about() {
  const containerAbout = document.createElement('div');
  const templateAbout = ` 
  <main class = 'main-div'>
    <nav class="top-nav">
      <picture>
        <img class="logo" src="imagens/logoINspirefeed.png" alt="Logo" />
      </picture>
      <a href="#login" id="logout">
        <img  class="button-logout" src="imagens/btnlogout.png" alt="Botão Sair">
      </a> 
    </nav>
    <nav class='btn-link'>
      <img id='btn-link-img' class='btn-link-img' alt='links' src='./imagens/btn-link.png'>
      <img id='btn-about-link' class='btn-about' alt='desenvolvedoras da aplicação' src="./imagens/aboutt.png">
      <img id='btn-home' class='btn-home' alt='feed da aplicação' src="./imagens/home.png">
    </nav>

    <section id="about-us" class="about-us">
    <p class="title-container"><b> Projeto desenvolvido por: </b></p>
    <div class="Andressa">
        <img class="all-img" src="./imagens/Andressa1.png" alt="Imagem de Aldressa Oliveira">
        <p class="name"><b>Andressa Oliveira</b></p>
        <a class="link-github" href="https://github.com/Andressaolive" target="_blank">github.com/Andressaolive</a>
    </div>  
    <div class="Juliene">
        <img class="all-img" src="./imagens/Juliene.png" alt="Imagem de Juliene Araujo">
        <p class="name"><b>Juliene Araujo</b></p>
        <a class="link-github" href="https://github.com/Juliene-Araujo" target="_blank">github.com/JulieneAraujo</a>
    </div> 
    </section>
  </main>
          
    
    `;
  containerAbout.innerHTML = templateAbout;

  const buttonLogout = containerAbout.querySelector('.button-logout');
  const messageError = containerAbout.querySelector('#error-message');
  const btnLink = containerAbout.querySelector('#btn-link-img');
  const btnHome = containerAbout.querySelector('#btn-home');

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

  // botao navegar para a página links //
  btnLink.addEventListener('click', () => {
    window.location.hash = '#links';
  });

  // botao navegar para a página feed //
  btnHome.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  return containerAbout;
}
