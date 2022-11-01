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

    const cancelEdit = container.querySelector('#cancel');
    const okEdit = container.querySelector('#ok');
    const local = container.querySelectorAll('.edit-local');
    const address = container.querySelectorAll('.edit-address');
    const review = container.querySelectorAll('.edit-review');
    const modalDelete = container.querySelector('#modal-delete');
    const posts = container.querySelector('#posts');
    posts.addEventListener('click', (event) => {
      const postElements = event.target;
      const action = postElements.dataset.action;
      const id = postElements.dataset.id;
      const divToRemove = container.querySelector(`[data-id="${id}"]`);

      switch (action) {
        case 'edit':
          cancelEdit.style.display = 'flex';
          okEdit.style.display = 'flex';
          review.contentEditable = true;
          local.contentEditable = true;
          address.contentEditable = true;
          break;
        case 'cancel-edit':
          cancelEdit.style.display = 'none';
          okEdit.style.display = 'none';
          review.contentEditable = false;
          local.contentEditable = false;
          address.contentEditable = false;
          break;
        case 'ok-edit':
          cancelEdit.style.display = 'none';
          okEdit.style.display = 'none';
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
          divToRemove.remove();
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
      <img id="pencil-icon" data-action="edit" data-id=${posts.id}class="icons-post-size icons-current-user" src="./external/svg/pencil-icon.svg"/>
      <img id="trash-icon" data-action="erase" data-id=${posts.id}tion=class="icons-post-size icons-current-user" src="./external/svg/trash-icon.svg"/>
      `;
    }
    const postsTemplate = `<div data-id="${posts.id}" class="posts">
      <div id="text">
        <p>@ ${posts.name}</p>
        <p data-id="${posts.id}" class="edit-local establishment" contenteditable="false">${posts.restaurant}</p>
        <p data-id="${posts.id}" class="edit-address" contenteditable="false">${posts.address}</p>
        <p data-id="${posts.id}" class="edit-review" contenteditable="false">${posts.review}</p>
      </div>

      <button id="cancel" data-action="cancel-edit">Cancelar</button>
      <button id="ok" data-id="${posts.id}" data-action="ok-edit">OK</button>
  
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
