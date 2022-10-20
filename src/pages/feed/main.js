import { getAuth } from '../../lib/exports.js';
import { logoff } from '../../lib/firebase-auth.js';
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
  like,
} from '../../lib/firebase-firestore.js';

import { app } from '../../lib/configuration.js';

import { handleFirebaseErrors } from '../../lib/validation.js';

const auth = getAuth(app);

export default () => {
  const feedContainer = document.createElement('div');
  const template = `
  <header class="feed-header">
    <div class="header-images">
      <button id="rebu-logo-btn">
        <img src="img/Rebu.svg" alt="rebu logo" class="rebu-logo-feed">
      </button>
      <button id="logout-btn">
        <img class="logout-icon" src="img/icons/signout-icon.png" alt="signout icon">
      </button>
    </div>

    <nav class="tag-filter">
      <button data-button="musica" class="tag-button">Música</button>
      <button data-button="tv" class="tag-button">TV</button>
      <button data-button="eventos" class="tag-button">Eventos</button>
      <button data-button="pets" class="tag-button">Pets</button>
      <button data-button="hobbies" class="tag-button">Hobbies</button>
      <button data-button="politica" class="tag-button politica">Política</button>  
    </nav>

  </header>
        
  <main class="main-container">
    
    <p class="null-post-message hide">Digite algo para publicar</p>

    <section id="create-post">
      
      <form id="create-post-form">
        <textarea class="post-textarea" placeholder="Escreva algo..." name="" id="text-post" cols="30" rows="10" style="resize:none" maxlength="200"></textarea>

        <div class="create-post-box-buttons">
          <select id="select-tags">
            <option class="option-tag" value="allposts" selected>Sem categoria</option>
            <option value="musica">Música</option>
            <option value="tv">TV</option>
            <option value="eventos">Eventos</option>
            <option value="pets">Pets</option>
            <option value="hobbies">Hobbies</option>
            <option value="politica">Política</option>
          </select>

          <button type="submit" id="publish-btn">Publicar</button>
        </div>
      </form>

    </section>
          
    <section id="feed-post"></section>

    <div id="fade" class="none"></div>

    <div id="modal-delete" class="none">
      <span>Tem certeza que deseja deletar?</span>
      <div class="delete-modal-btns">
        <button class="btn-delete">Deletar</button>
        <button class="close-modal">Cancelar</button>
      </div>
    </div>

  </main>
          
  <footer class="feed-footer">
    <button id="feed-homepage-btn">
      <img class="homepage-icon" src="img/icons/home-icon.svg" alt="homepage icon">
    </button>
  </footer>
  `;

  feedContainer.innerHTML = template;

  const homepageBtn = feedContainer.querySelector('#feed-homepage-btn');
  const rebuBtn = feedContainer.querySelector('#rebu-logo-btn');
  const postForm = feedContainer.querySelector('#create-post-form');
  const textPost = feedContainer.querySelector('#text-post');
  const logoutBtn = feedContainer.querySelector('#logout-btn');
  const fade = feedContainer.querySelector('#fade');
  const modal = feedContainer.querySelector('#modal-delete');
  const confirmDeletePost = feedContainer.querySelector('.btn-delete');
  const selectTags = feedContainer.querySelector('#select-tags');
  const menuBtns = Array.from(feedContainer.querySelectorAll('.tag-button'));
  const nullPostMessage = feedContainer.querySelector('.null-post-message');

  [homepageBtn, rebuBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.reload();
    });
  });

  function toggle(id) {
    modal.classList.toggle('none');
    confirmDeletePost.setAttribute('data-idPost', id);
    fade.classList.toggle('none');
  }

  const printPosts = async (category) => {
    const closeModal = feedContainer.querySelector('.close-modal');

    let postArr = await getAllPosts();

    if (category !== 'allposts') {
      postArr = postArr.filter((post) => post.tag.includes(category));
    }

    const postsTemplate = postArr.map((post) => `
        <div class="post">
          <div class="header-post">
            <div class="profile-info-post">
              <img class="user-photo-post" src="img/icons/frog.png" alt="frog icon">
              <h2 class="user-name-post">${post.name}</h2>
            </div>
            <div class="post-options">
              ${auth.currentUser.uid === post.author ? `<button data-id-post-edit="${post.id}" class="edit-post-btn" id="edit-post-btn"><img src="img/icons/pencil-icon.svg" alt="edit button" class="edit-post-icon"></button>
              <button data-id-post-trashcan="${post.id}" class="delete-post-btn"><img class="delete-post-icon" src="img/icons/trashcan-icon.svg" alt="delete button"></button>` : ''}
            </div>
          </div>
          <textarea disabled data-post="${post.id}" class="text-post" style="resize:none" maxlength="200">${post.text}</textarea>
          <div class="footer-post">
            <div class="date-like-div">
              <p class="date-post">${post.data}</p>
              <div class="like-container">
              <button class="like-btn-post" data-id-post-like="${post.id}"><img ${post.like.includes(auth.currentUser.uid) ? 'src="img/icons/redHeart.svg"' : 'src="img/icons/blackHeart.svg"'} class="like-post-icon" alt="like button"></button>
              <p class="all-likes-post">${post.like.length}</p>
            </div>
            </div>
          
            <div class="confirm-edit-div">
              <button data-confirm-edit="${post.id}" class="confirm-edit-btn hide" height="200" width="200">Salvar</button>
            </div>
          </div>
        </div>
    `).join('');

    feedContainer.querySelector('#feed-post').innerHTML = postsTemplate;

    const editBtn = Array.from(feedContainer.querySelectorAll('.edit-post-btn'));
    const trashcanBtn = Array.from(feedContainer.querySelectorAll('.delete-post-btn'));
    const likeBtns = Array.from(feedContainer.querySelectorAll('.like-btn-post'));

    menuBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        printPosts(btn.dataset.button);
      });
    });

    editBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const postToBeEdited = e.currentTarget.dataset.idPostEdit;
        const postTxtarea = feedContainer.querySelector(`[data-post="${postToBeEdited}"]`);
        const confirmEditBtn = feedContainer.querySelector(`[data-confirm-edit="${postToBeEdited}"]`);

        postTxtarea.removeAttribute('disabled');
        confirmEditBtn.classList.remove('hide');

        confirmEditBtn.addEventListener('click', async () => {
          try {
            await updatePost(postToBeEdited, postTxtarea.value);
            postTxtarea.setAttribute('disabled', '');
            confirmEditBtn.classList.add('hide');
            printPosts('allposts');
          } catch (error) {
            nullPostMessage.classList.remove('hide');
            nullPostMessage.textContent = handleFirebaseErrors(error);
          }
        });
      });
    });

    trashcanBtn.forEach((btn) => {
      btn.addEventListener('click', (el) => {
        toggle(el.currentTarget.dataset.idPostTrashcan);
      });
    });

    [fade, closeModal].forEach((el) => {
      el.addEventListener('click', () => {
        toggle();
      });
    });

    confirmDeletePost.addEventListener('click', (el) => {
      const idPostDelete = el.currentTarget.dataset.idpost;
      deletePost(idPostDelete)
        .then(() => {
          toggle();
          window.location.reload();
        })
        .catch((error) => {
          nullPostMessage.classList.remove('hide');
          nullPostMessage.textContent = handleFirebaseErrors(error);
        });
    });

    likeBtns.forEach((btn) => {
      btn.addEventListener('click', async (el) => {
        const idPostLike = el.currentTarget.dataset.idPostLike;
        const user = auth.currentUser.uid;
        const newLikes = await like(idPostLike, user);
        const elementLikes = el.target.parentElement.nextElementSibling;
        const img = el.target;

        if (newLikes.indexOf(user) !== -1) {
          img.setAttribute('src', 'img/icons/redHeart.svg');
        } else {
          img.setAttribute('src', 'img/icons/blackHeart.svg');
        }

        elementLikes.innerHTML = newLikes.length;
      });
    });
  };

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (textPost.value === '') {
      nullPostMessage.classList.remove('hide');
    } else {
      createPost(textPost.value, selectTags.value)
        .then(() => {
          nullPostMessage.classList.add('hide');
          postForm.reset();
          printPosts('allposts');
        })
        .catch((error) => {
          nullPostMessage.classList.remove('hide');
          nullPostMessage.textContent = handleFirebaseErrors(error);
        });
    }
  });

  logoutBtn.addEventListener('click', () => {
    logoff();
  });

  printPosts('allposts');

  return feedContainer;
};
