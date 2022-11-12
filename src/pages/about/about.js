export default function About() {
  const about = document.createElement('div');
  about.classList.add('container-about');
  about.innerHTML = ` 
    <main class = 'container-about'>
    <nav class=''>
      <button class='btn-link' id='btn-link'>
        <img class='btn-link-img' alt='links' src='./imagens/btn-link.png'>
        <img class='btn-about' alt='desenvolvedoras da aplicação' src="./imagens/aboutt.png">
        <img class='btn-home' alt='feed da aplicação' src="./imagens/home.png">
      </button>
    </nav>
           
    </main>
    
    `;

  const btnLink = feed.querySelector('#btn-link');
  const btnHome = feed.querySelector('.btn-home');

  return containerAbout;
}
