import {
  auth,
  logout,
} from '../../lib/auth.js';

import { redirect } from '../../redirect.js';

export const mainFeed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.setAttribute('id', 'feed');
  sectionFeed.innerHTML = `
    <p>Olá, ${auth.currentUser.displayName}!
    <label class="feed-post" for="feed-post">Publique aqui:</label>
    <input class="input-post" type="text" id="feed-post"/>
    <button class="btn-post" type="button">Publicar</button>
    <a href="#login">
      <button class="btn-return" type="button">Sair</button>
    </a>
  
  `;
  const btnLogout = sectionFeed.querySelector('.btn-return');

  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        redirect('#login');
      });
  });
  return sectionFeed;
};
