export default function about() {
  const containerAbout = document.createElement('div');
  containerAbout.classList.add('container-about');
  containerAbout.innerHTML = ` 
    <main class = 'container-about'>
    <nav class='btn-link'>
      <img id='btn-link-img' class='btn-link-img' alt='links' src='./imagens/btn-link.png'>
      <img id='btn-about-link' class='btn-about' alt='desenvolvedoras da aplicação' src="./imagens/aboutt.png">
      <img id='btn-home' class='btn-home' alt='feed da aplicação' src="./imagens/home.png">
    </nav>
      <div>
        conteúdo about
      </div>
          
    </main>
    
    `;

  const btnLink = containerAbout.querySelector('#btn-link-img');
  const btnAbout = containerAbout.querySelector('#btn-about-link');
  const btnHome = containerAbout.querySelector('#btn-home');

  // botao navegar para a página de links //
  btnLink.addEventListener('click', () => {
    window.location.hash = '#links';
  });

  // botao navegar para a página about //
  btnAbout.addEventListener('click', () => {
    window.location.hash = '#about';
  });

  // botao navegar para a página feed //
  btnHome.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  return containerAbout;
}
