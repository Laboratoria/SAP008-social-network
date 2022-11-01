import {
  logoutUser, auth, getPosts, deletePost, forEditPost,
} from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  if (auth.currentUser !== null) {
    const container = document.createElement('div');
    const template = `<section id="unique">
    <nav id="mobile-top-icons" class="icons-container">
      <img id="menu-icon" data-action="menu" class="icons-size" src="./external/svg/menu-icon.svg"/>
      <img id="home-icon" data-action="home" class="icons-size" src="./external/svg/home-icon.svg"/>
      <img id="logout-icon" data-action="logout" class="icons-size" src="./external/svg/log-out-icon.svg"/>
    </nav>
      <p class="welcome-user">Olá, ${auth.currentUser.displayName}! Esta é a Página Inicial.</p>

      <section class="post-container"></section>
      
      <nav id="mobile-footer-icons" class="icons-container">
        <a href="#novo_post" <img id="plus-icon" class="icons-size" src="./external/svg/plus-icon.svg"/></a>
        <img id="plate-icon" data-action="plate" class="icons-size" src="./external/svg/logo.png"/>
        <img id="up-icon" data-action="up" class="icons-size" src="./external/svg/chevron-up-icon.svg"/>
      </nav>
    </section>`;

    container.innerHTML = template;

    const navsList = container.querySelector('#unique');
    navsList.addEventListener('click', (event) => {
      const navElement = event.target;
      const actions = navElement.dataset.action;

      switch (actions) {
        case 'logout':
          logoutUser();
          break;
        case 'up':
          window.scrollTo(0, 0);
          break;
        default:
          // eslint-disable-next-line no-console
          console.log('clicou em outra coisa');
      }
    });

    const printPosts = async () => {
      const all = await getPosts();
      const mapPosts = generatePostsTemplate(all);//eslint-disable-line
      container.querySelector('.post-container').innerHTML += mapPosts;
    };
    printPosts();

    const posts = container.querySelector('.post-container');

    posts.addEventListener('click', (event) => {
      const element = event.target;
      const action = element.dataset.action;
      const id = element.dataset.id;
      const postElement = container.querySelector(`[data-id="${id}"]`);
      // const cancelEdit = postElement.querySelectorAll('[data-action="cancel-edit"]');
      // const okEdit = postElement.querySelectorAll('[data-action="ok-edit"]');
      const local = postElement.querySelectorAll('.edit-local');
      const address = postElement.querySelectorAll('.edit-address');
      const review = postElement.querySelectorAll('.edit-review');
      const modalDelete = postElement.querySelectorAll('#modal-postElement');

      switch (action) {
        case 'edit':
          console.log('clicou no lapis');
          // cancelEdit.style.display = 'flex';
          // okEdit.style.display = 'flex';
          // review.contentEditable = true;
          // local.contentEditable = true;
          // address.contentEditable = true;
          break;
        case 'cancel-edit':
          review.contentEditable = false;
          local.contentEditable = false;
          address.contentEditable = false;
          break;
        case 'ok-edit':
          forEditPost(id, local.textContent, address.textContent, review.textContent);
          break;
        case 'erase':
          modalDelete.classList.toggle('hide');
          break;
        case 'no-delete':
          modalDelete.classList.toggle('hide');
          break;
        case 'yes-delete':
          deletePost(id);
          modalDelete.classList.toggle('hide');
          postElement.remove();
          break;
        default:
          // eslint-disable-next-line no-console
          console.log('clicou em outra coisa');
      }
    });
    return container;
  }
};

function generatePostsTemplate(allPosts) {
  const firstLetter = (element) => {
    const getFirst = element[0];
    return getFirst;
  };

  return allPosts.map((posts) => {
    let editButtons = '';
    if (auth.currentUser.uid === posts.author) {
      editButtons = `
      <img data-action="edit" data-id=${posts.id} class="icons-post-size icons-current-user" src="./external/svg/pencil-icon.svg"/>
      <img data-action="erase" data-id=${posts.id} class="icons-post-size icons-current-user" src="./external/svg/trash-icon.svg"/>
      `;
    }
    const postsTemplate = `<div data-id="${posts.id}" class="posts">
      <div id="text">
        <p>@ ${posts.name}</p>
        <p data-id="${posts.id}" class="edit-local establishment" contenteditable="">${posts.restaurant}</p>
        <p data-id="${posts.id}" class="edit-address" contenteditable="">${posts.address}</p>
        <p data-id="${posts.id}" class="edit-review" contenteditable="">${posts.review}</p>
      </div>

      <button id="cancel" class="edit-button cancel" data-action="cancel-edit">Cancelar</button>
      <button id="ok" class="edit-button ok" data-id="${posts.id}" data-action="ok-edit">OK</button>
  
      <div id="modal-delete" class="hide">
        <p>Tem certeza que deseja excluir este post?</p>
        <button data-id="${posts.id}" data-action="yes-delete" id="yes-delete">Sim</button>
        <button id="no-close" data-action="no-delete">Não</button>
      </div>
  
      <aside class="infos-container">
        <div>
          <div id="user-image"><p class="name-letter">${firstLetter(posts.name)}</p></div>
          <div class="icons-post">
            <img id="heart-icon" class="icons-post-size" src="./external/svg/heart-icon.svg"/>
            ${editButtons}
          </div>
        </div>
      </aside>
      </div>`;
    return postsTemplate;
  }).join('');
}
