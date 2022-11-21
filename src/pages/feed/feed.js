import {
  auth,
  logout,
} from '../../lib/auth.js';

import {
  createPost,
} from '../../lib/firestore.js';

import { redirect } from '../../redirect.js';
import { validatePost } from '../../validations.js';

export const mainFeed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.setAttribute('id', 'feed');
  sectionFeed.innerHTML = `
    <p>Olá, ${auth.currentUser.displayName}!
    <label class="feed-post" for="feed-post">Publique aqui:</label>
    <input class="input-post" type="text"/>
    <p class="msg-error" id="msg-error-post"></p>
    <button class="btn-post" type="button">Publicar</button>
    <a href="#login">
      <button class="btn-return" type="button">Sair</button>
    </a>
  
  `;

  const btnPost = sectionFeed.querySelector('.btn-post');
  const inputPost = sectionFeed.querySelector('.input-post');
  const fillField = sectionFeed.querySelector('#msg-error-post');
  const tip = inputPost.value;

  const validation = validatePost(tip);
  if (validation === '') {
    createPost(tip)
      .then(() => {
        inputPost.reset();
        window.location.reload();
        sectionFeed.style.display = 'none';
      });
  } else {
    fillField.innerHTML = validation;
  }

  btnPost.addEventListener('click', async () => {
    await createPost(inputPost.value);
  });

  const btnLogout = sectionFeed.querySelector('.btn-return');

  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        redirect('#login');
      });
  });
  return sectionFeed;
};
