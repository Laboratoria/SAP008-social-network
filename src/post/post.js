import { createPost, signOut } from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container-main');
  const template = `
    <div class="box">
      <div class="container-logo-post">
          <img class="logo-img-post" src="./images/logo_02_blue_081E26.png" alt="logo do título">
      </div>
      <nav class='menu-hamburguer'>
        <ul class='navbar-list'>
          <li class='navbar-item-button'>
            <button type='button' id='navbar-button'>
              <span class="material-symbols-outlined">menu</span>
            </button>
          </li>
          <a href='#aboutus'>
            <li class="navbar-item hide">Sobre Nós</li>
          </a>
          <a href='#timeline'>
            <li class="navbar-item hide">Timeline</li>
          </a>
          <a>
            <li class="navbar-item hide" id="logout">Sair</li>
          </a>         
        </ul>
      </nav>
      <div class="container-title">
          <h1>Conte para nós suas experiências mais marcantes vividas em um show!</h1>
      </div>
      <div class="container-post">
          <form class='post-infos'>
              <input class="box-artist" type="text" id="artist" placeholder="Artista">
              <input class="box-location "type="text" id="location" placeholder="Local"> 
              <input class="box-date" id="date" type="date">
              <textarea class="box-post" id="text-post" placeholder="O show + inesquecível"></textarea>
              <input type="submit" id="btn-post" class="btn-post" value="Postar">
          </form>
      </div> 
    </div>`;

  container.innerHTML = template;

  container.querySelector('#btn-post').addEventListener('click', (e) => {
    e.preventDefault();
    const artist = container.querySelector('#artist').value;
    const location = container.querySelector('#location').value;
    const date = container.querySelector('#date').value;
    const text = container.querySelector('#text-post').value;
    createPost(artist, location, date, text);
    redirect('#timeline');
  });

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
