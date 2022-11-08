/* eslint-disable consistent-return */
/* eslint-disable max-len */
import {
  logoutUser, auth, getPosts, deletePost, forEditPost, likePost,

} from '../../lib/auth.js';

export default () => {
  if (auth.currentUser !== null) {
    const container = document.createElement('div');
    const template = `<link rel="stylesheet" href="style.css" />
    <section id="unique" class="home">
    <nav class="web-icons-container">
      <img id="plate-icon" data-action="plate" class="icons-size" src="./external/svg/logo.svg"/>
      <img id="home-icon" data-action="home" class="icons-size" src="./external/svg/home-icon.svg"/>
      <img id="menu-icon" data-action="menu" class="icons-size" src="./external/svg/menu-icon.svg"/>
      <img id="logout-icon" data-action="logout" class="icons-size" src="./external/svg/log-out-icon.svg"/>
      <a href="#novo_post"><img id="plus-icon" class="icons-size" src="./external/svg/plus-icon.svg"/></a>
      <img id="up-icon" data-action="up" class="icons-size" src="./external/svg/chevron-up-icon.svg"/>
    </nav>

    <nav id="mobile-top-icons" class="icons-container">
      <img id="menu-icon" data-action="menu" class="icons-size" src="./external/svg/menu-icon.svg"/>
      <img id="home-icon" data-action="home" class="icons-size" src="./external/svg/home-icon.svg"/>
      <img id="logout-icon" data-action="logout" class="icons-size" src="./external/svg/log-out-icon.svg"/>
    </nav>
    <div class="timeline-content">
      <p class="welcome-user">Olá, ${auth.currentUser.displayName}! Esta é a Página Inicial.</p>
      <section class="post-container"></section>
    </div>      
    <nav id="mobile-footer-icons" class="icons-container">
      <a href="#novo_post"><img id="plus-icon" class="icons-size" src="./external/svg/plus-icon.svg"/></a>
      <img id="plate-icon" data-action="plate" class="icons-size" src="./external/svg/logo.svg"/>
      <img id="up-icon" data-action="up" class="icons-size" src="./external/svg/chevron-up-icon.svg"/>
    </nav>
    </section>`;

    container.innerHTML = template;

    const navsList = container.querySelector('#unique');
    navsList.addEventListener('click', (event) => {
      event.preventDefault();
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
          console.log();
      }
    });

    const printPosts = async () => {
      const all = await getPosts();
      const mapPosts = generatePostsTemplate(all);//eslint-disable-line
      container.querySelector('.post-container').innerHTML += mapPosts;
    };

    printPosts();

    const thePosts = container.querySelector('.post-container');

    thePosts.addEventListener('click', (event) => {
      const element = event.target;
      const action = element.dataset.action;
      const id = element.dataset.id;
      const postElement = container.querySelector(`[data-id="${id}"]`);
      const cancelEdit = postElement.querySelector('.cancel-edit');
      const okEdit = postElement.querySelector('.ok-edit');
      const local = postElement.querySelector('.edit-local');
      const address = postElement.querySelector('.edit-address');
      const review = postElement.querySelector('.edit-review');
      const modalDelete = postElement.querySelector('#modal-delete');
      const like = postElement.querySelector('.heart');
      const localContent = local.textContent;
      const addressContent = address.textContent;
      const reviewContent = review.textContent;

      const showLike = () => {
        const count = postElement.querySelector('.like-number').textContent;
        const sum = Number(count) + 1;
        postElement.querySelector('.like-number').textContent = sum;
      };

      const hideLike = () => {
        const count = postElement.querySelector('.like-number').textContent;
        const sum = Number(count) - 1;
        postElement.querySelector('.like-number').textContent = sum;
      };

      switch (action) {
        case 'like':
          likePost(id, auth.currentUser.uid).then(() => showLike());
          like.src = './external/svg/filled-heart-icon.svg';
          like.dataset.action = 'dislike';
          break;
        case 'dislike':
          likePost(id, auth.currentUser.uid).then(() => hideLike());
          like.src = './external/svg/heart-icon.svg';
          like.dataset.action = 'like';
          break;
        case 'edit':
          cancelEdit.style.display = 'flex';
          okEdit.style.display = 'flex';
          review.contentEditable = true;
          local.contentEditable = true;
          address.contentEditable = true;
          break;
        case 'cancel-edit':
          review.contentEditable = false;
          local.contentEditable = false;
          address.contentEditable = false;
          cancelEdit.style.display = 'none';
          okEdit.style.display = 'none';
          // voltar ao texto inicial
          break;
        case 'ok-edit':
          forEditPost(id, localContent, addressContent, reviewContent);
          review.contentEditable = false;
          local.contentEditable = false;
          address.contentEditable = false;
          cancelEdit.style.display = 'none';
          okEdit.style.display = 'none';
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
          console.log('default');
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
    let likedIcon = '';
    if (auth.currentUser.uid === posts.author) {
      editButtons = `
      <img data-action="edit" data-id=${posts.id} class="icons-post-size icons-current-user" src="./external/svg/pencil-icon.svg"/>
      <img data-action="erase" data-id=${posts.id} class="icons-post-size icons-current-user" src="./external/svg/trash-icon.svg"/>
      `;
    }
    if (posts.like.includes(auth.currentUser.uid) === true) {
      likedIcon = `
      <img data-id="${posts.id}" class="icons-post-size heart" data-action="dislike" src="./external/svg/filled-heart-icon.svg"/>
      `;
    } else {
      likedIcon = `
      <img data-id="${posts.id}" class="icons-post-size heart" data-action="like" src="./external/svg/heart-icon.svg"/>
      `;
    }
    const postsTemplate = `<link rel="stylesheet" href="style.css" />
    <div data-id="${posts.id}" class="posts">
      <div id="text">
        <p>@ ${posts.name}</p>
        <p data-id="${posts.id}" class="edit-local establishment" contenteditable="">${posts.restaurant}</p>
        <p data-id="${posts.id}" class="edit-address" contenteditable="">${posts.address}</p>
        <p data-id="${posts.id}" class="edit-review" contenteditable="">${posts.review}</p>
        <button class="edit-button cancel-edit" data-id="${posts.id}" data-action="cancel-edit">Cancelar</button>
        <button class="edit-button ok-edit" data-id="${posts.id}" data-action="ok-edit">OK</button>
      </div>
  
      <div id="modal-delete" class="hide">
        <p>Tem certeza que deseja excluir este post?</p>
        <button data-id="${posts.id}" data-action="yes-delete">Sim</button>
        <button data-id="${posts.id}" data-action="no-delete">Não</button>
      </div>
  
      <aside class="infos-container">
        <div>
          <div id="user-image"><p class="name-letter">${firstLetter(posts.name)}</p></div>
          <div class="icons-post">
          ${likedIcon}
          <div id="likes"><p class="like-number">${posts.like.length}</p></div>
          ${editButtons}
          </div>
        </div>
      </aside>
      </div>`;
    return postsTemplate;
  }).join('');
}
