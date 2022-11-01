import { signOut } from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const container = document.createElement('div');
  const template = `  
    <div class='container-aboutus'> 
        <div class='box-aboutus'>
            <div class='container-logo-aboutus'>
                <img class='logo-brown-about' src='./images/logo_01_brown_A6634B.png' alt='logo do título'>
            </div>
                <nav class='menu-hamburguer'>
                    <ul class='navbar-list'>
                        <li class='navbar-item-button'>
                            <button type='button' id='navbar-button'><span class="material-symbols-outlined">
                            menu
                            </span></button>
                        </li>
                        <li class='navbar-item hide'>
                            <a href='#post'>Publicar post</a>
                        </li>
                        <li class='navbar-item hide'>
                            <a href='#timeline'>Timeline</a>
                        </li>
                        <li class='navbar-item hide' id='logout'>
                            <a>Sair</a>
                            </li>
                    </ul>
                </nav>
    <section class='info-aboutus'>
        <h1 class='aboutdevs'>SOBRE AS DESENVOLVEDORAS</h1>
            <article class='cla'>
                <img class='img-cla' src='./images/clareana.jpg'>
                
                <p><a class='github' href="https://github.com/ClareanaRibeiro"
                target="_blank">Clareana Ribeiro
                    </a></p>
                <p class='info-cla'>Sua paixão por música vem de berço.
                A origem do seu nome é o nome de uma música.</p>
            </article>
            <article class='angelica'>
            <a class='github' href="https://github.com/AngelMelo12"
            target="_blank">Angelica Melo</a>
                <p class='info-angelica'>Breve descrição sobre você relacionado ao tema da rede social.</p>
            </article>
            <article class='andrea'>
            <a class='github' href="https://github.com/Canzua"
            target="_blank">Andrea dos Santos</a>
                <p class='info-andrea'>Cantora apaixonada pela diversidade da música brasileira e do mundo.</p>
            </article>
    </section>
        </div>
    </div>     
`;

  container.innerHTML = template;

  const menu = container.querySelector('#navbar-button');

  menu.addEventListener('click', () => {
    const items = container.querySelectorAll('.navbar-item');
    items.forEach((item) => {
      item.classList.toggle('hide');
    });
    console.log(items);
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  return container;
};
