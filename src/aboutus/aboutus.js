import { signOut } from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container-aboutus'); /* adc - e retirado a div que estava acima da box, fazer assim p/todas as pages */
  const template = `  
    <div class='box-aboutus'>
        <div class='container-logo-aboutus'>
            <img class='logo-brown-about' src='./images/logo_01_brown_A6634B.png' alt='logo do título'>
        </div>
        <nav class='menu-hamburguer'>
            <ul class='navbar-list'>
                <li class='navbar-item-button'>
                <button type='button' id='navbar-button'>
                    <span class='material-symbols-outlined'>menu</span>
                </button>
                </li>
                <a href='#post'>
                    <li class='navbar-item hide'>Publicar post</li>
                </a>
                <a href='#timeline'>
                    <li class='navbar-item hide'>Timeline</li>
                </a>
                <a>
                    <li class='navbar-item hide' id='logout'>Sair</li>
                </a>
            </ul>
        </nav>
        <h1 class='aboutdevs'>SOBRE AS DESENVOLVEDORAS</h1>
        <section class='info-aboutus'>
            <article class='clareana'>
                <img class='img-cla' src='./images/clareana.jpg'>
                <aside>
                    <a class='github' href="https://github.com/ClareanaRibeiro" target="_blank">Clareana Ribeiro</a>
                    <p class='info-cla'>Sua paixão por música vem de berço. A origem do seu nome é o nome de uma música.</p>
                </aside>
            </article>
            <article class='angelica'>
                <img class='img-angelica' src='./images/angelica.jpg'>
                <aside>
                    <a class='github' href="https://github.com/AngelMelo12" target="_blank">Angelica Melo</a>
                    <p class='info-angelica'>Música é minha válvula de escape para todos os momentos. Nos vemos em algum festival da vida!</p>
                </aside>
            </article>
            <article class='andrea'>
            <img class='img-andrea' src='./images/andrea.jpg'>
                <aside>
                    <a class='github' href="https://github.com/Canzua" target="_blank">Andrea dos Santos</a>
                    <p class='info-andrea'>Cantora brasiliense apaixonada pela diversidade da música brasileira e do mundo.</p>
                </aside>
            </article>
        </section>
    </div>`;

  container.innerHTML = template;

  const menu = container.querySelector('#navbar-button');

  menu.addEventListener('click', () => {
    const items = container.querySelectorAll('.navbar-item');
    items.forEach((item) => {
      item.classList.toggle('hide');
    });
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  return container;
};
