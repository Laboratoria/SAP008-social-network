/* eslint-disable no-unused-expressions */

import { logoutUser, auth, getPosts } from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  if (auth.currentUser === null) {
    window.location.hash = '#entrar';
  } else {
    const container = document.createElement('div');
    const template = `<section>
      <nav id="mobile-top-icons" class="icons-container">
        <img id="menu-icon" class="icons-size" src="./external/svg/menu-icon.svg"/>
        <img id="home-icon" class="icons-size" src="./external/svg/home-icon.svg"/>
        <img id="logout-icon" class="icons-size" src="./external/svg/log-out-icon.svg"/>
      </nav>
      <hr class="colorful-line"/>
      <div>
        <p id="welcome-user">Olá, ${auth.currentUser.displayName}! Esta é a Página Inicial.</p>
      </div>
      <hr class="colorful-line"/>
      <section class="post-container"></section>  
      <hr class="colorful-line"/>
      <nav id="mobile-footer-icons" class="icons-container">
        <img id="plus-icon" class="icons-size" src="./external/svg/plus-icon.svg"/>
        <img id="plate-icon" class="icons-size" src="./external/svg/logo.png"/>
        <img id="up-icon" class="icons-size" src="./external/svg/chevron-up-icon.svg"/>
      </nav>
    </section>`;

    container.innerHTML = template;

    const firstLetter = (element) => {
      const getFirst = element[0];
      return getFirst;
    };

    const printPosts = async () => {
      const all = await getPosts();
      const postsTemplate = all.map((Posts) => `<div class="posts">
        <div id="text">
          <p>@ ${Posts.name}</p>
          <p id="local" class="edit-local establishment" contenteditable="false">${Posts.restaurant}</p>
          <p id="adress" class="edit-adress" contenteditable="false">${Posts.adress}</p>
          <p id="review" class="edit-review" contenteditable="false">${Posts.review}</p>
        </div>

        <button id="cancel">Cancelar</button>
        <button id="ok">OK</button>
    
        <div id="modal-delete" class="hide">
          <p>Tem certeza que deseja excluir este post?</p>
          <button id="yes-delete">Sim</button>
          <button id="no-close">Não</button>
        </div>
    
        <aside class="infos-container">
          <div>
            <div id="user-image"><p class="name-letter">${firstLetter(Posts.name)}</p></div>
            <p id="grade">4.7</p>
            <div class="icons-post">
              <img id="heart-icon" class="icons-post-size" src="./external/svg/heart-icon.svg"/>
              <img id="pencil-icon" class="icons-post-size icons-current-user" src="./external/svg/pencil-icon.svg"/>
              <img id="trash-icon" class="icons-post-size icons-current-user" src="./external/svg/trash-icon.svg"/>
            </div>
          </div>
        </aside>
      </div>
      <hr class="colorful-line"/>`).join('');
      container.querySelector('.post-container').innerHTML += postsTemplate;

      const editPost = container.querySelector('#pencil-icon');
      const local = container.querySelector('.edit-local');
      const adress = container.querySelector('.edit-adress');
      const review = container.querySelector('.edit-review');
      const showIcon = container.querySelector('.icons-current-user');
      const modalDelete = container.querySelector('#modal-delete');
      const warnDelete = container.querySelector('#trash-icon');
      const closeModalDelete = container.querySelector('#no-close');
      const cancel = container.querySelector('#cancel');
      const ok = container.querySelector('#ok');

      function show(elemento) {
        elemento.focus();
      }

      cancel.hidden = true;
      ok.hidden = true;

      editPost.addEventListener('click', () => {
        if (auth.currentUser === auth.currentUser.uid) { // assistir atributo data
          review.contentEditable = true;
          show(review);
          local.contentEditable = true;
          show(local);
          adress.contentEditable = true;
          show(adress);
          showIcon.style.display = 'flex';
          cancel.hidden = false;
          ok.hidden = false;
        }
      });

      cancel.addEventListener('click', () => {
        cancel.hidden = true;
        ok.hidden = true;
        review.contentEditable = false;
        local.contentEditable = false;
        adress.contentEditable = false;
      });

      warnDelete.addEventListener('click', () => {
        modalDelete.classList.toggle('hide');
      });

      closeModalDelete.addEventListener('click', () => {
        modalDelete.classList.toggle('hide');
      });
    };

    printPosts();

    const logout = container.querySelector('#logout-icon');
    const toTheTop = container.querySelector('#up-icon');
    const newPost = container.querySelector('#plus-icon');

    logout.addEventListener('click', () => {
      logoutUser();
    });

    toTheTop.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });

    newPost.addEventListener('click', () => {
      window.location.hash = '#novo_post';
    });

    return container;
  }
};
