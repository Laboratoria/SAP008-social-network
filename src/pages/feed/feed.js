import {
  auth,
  logout,
} from '../../lib/auth.js';

import {
  createPost,
  printPosts,
} from '../../lib/firestore.js';

import { redirect } from '../../redirect.js';
import { validatePost } from '../../validations.js';

const sectionCreatePost = document.createElement('section');

const timeline = (arrPosts) => {
  console.log(arrPosts);
  const feedPostContainer = sectionCreatePost.querySelector('.feed');
  const postsTemplate = arrPosts.map((post) => `
    <div>${post.tip}</div>
  `).join('');
  feedPostContainer.innerHTML = postsTemplate;
};

export const mainFeed = async () => {
  sectionCreatePost.setAttribute('id', 'feed');
  sectionCreatePost.innerHTML = `
  <a href="#login">
    <button class="btn-return" type="button">Sair</button>
  </a>
    <p>Olá, ${auth.currentUser.displayName}!
    <label class="feed-post" for="feed-post">Publique aqui:</label>
    <input class="input-post" type="text"/>
    <p class="msg-error"></p>
    <button class="btn-post" type="button">Publicar</button>
    <section class="feed"></section>    
  `;

  const btnPost = sectionCreatePost.querySelector('.btn-post');
  const inputPost = sectionCreatePost.querySelector('.input-post');
  const fillField = sectionCreatePost.querySelector('.msg-error');

  btnPost.addEventListener('click', async () => {
    const validation = validatePost(inputPost.value);
    if (validation === '') {
      createPost(inputPost.value)
        .then(async () => {
          inputPost.value = '';
          sectionCreatePost.style.display = 'none';
          const posts = await printPosts();
          timeline(posts);
        });
    } else {
      fillField.innerHTML = validation;
    }
  });

  /* btnPost.addEventListener('click', async () => {
    await createPost(inputPost.value);
  }); */

  const btnLogout = sectionCreatePost.querySelector('.btn-return');

  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        redirect('#login');
      });
  });

  const posts = await printPosts();
  timeline(posts);
  return sectionCreatePost;
};
