import { getAuth } from '../../lib/firebase.js';
import {
  createPost,
  deletePost,
  getAllPosts,
  logoff,
  updatePost,
  like,
} from '../../lib/index.js';

import { app } from '../../lib/configuration.js';

const auth = getAuth(app);

export default () => {
  const feedContainer = document.createElement('div');
  const template = `
  <header>
  
    <img src="img/Rebu.png" alt="rebu logo">

    <input type="search" id="search-bar" placeholder="Busque por post">

    <div id="logout-userpfp-area">
      <img src="" alt="" id="user-profile-picture-header">
      <button id="logout-btn"><img class="logout-icon" src="img/icons/signout-icon.png" alt="signout icon"></button>
    </div>
    
    <nav class="tag-filter">
      <button data-button="musica" class="tag-button">MÚSICA</button>
      <button data-button="tv" class="tag-button">TV</button>
      <button data-button="eventos" class="tag-button">EVENTOS</button>
      <button data-button="pets" class="tag-button">PETS</button>
      <button data-button="hobbies" class="tag-button">HOBBIES</button>
      <button data-button="politica" class="tag-button">POLÍTICA</button>  
    </nav>

  </header>
        
  <main>
    
    <section id="create-post">
    
      <div id="user-profile-picture-div">
        <img src="" alt="" class="" class="user-profile-picture-post">
      </div>
      
      <textarea name="" id="text-post" cols="30" rows="10" style="resize:none" maxlength="200"></textarea>

      <div class="create-post-box-buttons">
        <select id="select-tags">
          <option value="allposts" selected>SEM CATEGORIA</option>
          <option value="musica">MÚSICA</option>
          <option value="tv">TV</option>
          <option value="eventos">EVENTOS</option>
          <option value="pets">PETS</option>
          <option value="hobbies">HOBBIES</option>
          <option value="politica">POLÍTICA</option>
        </select>

        <button id="publish-btn">Publicar</button>
      </div>

    </section>
          
    <section id="feed-post"></section>

      <div id="fade" class="none"></div>

      <div id="modal-delete" class="none">
        <span class="close-modal">X</span>
        <span>Tem certeza que deseja deletar?</span>
        <button class="btn-delete">Deletar</button>
      </div>

  </main>
          
  <footer>
    <img src="" alt="" >
  </footer>
  `;

  feedContainer.innerHTML = template;

  const publishBtn = feedContainer.querySelector('#publish-btn');
  const textPost = feedContainer.querySelector('#text-post');
  const logoutBtn = feedContainer.querySelector('#logout-btn');
  const fade = feedContainer.querySelector('#fade');
  const modal = feedContainer.querySelector('#modal-delete');
  const confirmDeletePost = feedContainer.querySelector('.btn-delete');
  const selectTags = feedContainer.querySelector('#select-tags');
  const menuBtns = Array.from(feedContainer.querySelectorAll('.tag-button'));
  // const searchBar = feedContainer.querySelector('#search-bar');

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
            <img class="user-photo-post" src="" alt="">
            <h2 class="user-name-post">${post.name}</h2>
            ${auth.currentUser.uid === post.author ? `<button data-id-post-edit="${post.id}" class="edit-post-icon" id="edit-post-btn"><img src="img/icons/pencil-icon.png" alt="edit button"></button>
            <span data-id-post-trashcan="${post.id}" class="delete-post-btn"><img class="delete-post-icon" src="img/icons/trashcan-icon.png" alt="delete button"></span>` : ''}
          </div>
          <textarea disabled data-post="${post.id}" class="text-post" cols="30" rows="10" style="resize:none" maxlength="200">${post.text}</textarea>
          <button data-confirm-edit="${post.id}" class="confirm-edit-btn hide" height="200" width="200">Salvar</button>
          <div class="footer-post">
            <p class="date-post"></p>
            <span class="like-btn-post" data-id-post-like="${post.id}" ><img src="img/icons/empty-like-icon.png" class="like-post-icon" alt="like button"></span>
            <p class="all-likes-post">${post.like.length}</p>
          </div>
        </div>
    `).join('');

    feedContainer.querySelector('#feed-post').innerHTML = postsTemplate;

    const editBtn = Array.from(feedContainer.querySelectorAll('.edit-post-icon'));
    const trashcanBtn = Array.from(feedContainer.querySelectorAll('.delete-post-btn'));
    const likeBtns = Array.from(feedContainer.querySelectorAll('.like-btn-post'));
    const numLikes = Array.from(feedContainer.querySelectorAll('.all-likes-post'));

    // searchBar.addEventListener('keyup', (e) => {
    //   postArr = postArr.filter((post) => post.text.includes(e.target.value));
    // });

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
          await updatePost(postToBeEdited, postTxtarea.value);
          postTxtarea.setAttribute('disabled', '');
          confirmEditBtn.classList.add('hide');
          printPosts('allposts');
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
      console.log(idPostDelete);
      deletePost(idPostDelete);
      toggle();
      printPosts('allposts');
    });

    likeBtns.forEach((btn) => {
      btn.addEventListener('click', async (el) => {
        const idPostLike = el.currentTarget.dataset.idPostLike;
        const user = auth.currentUser.uid;
        const newLike = await like(idPostLike, user);

        numLikes.innerHTML = newLike;
        printPosts('allposts');
      });
    });
  };

  publishBtn.addEventListener('click', () => {
    createPost(textPost.value, selectTags.value);
    printPosts('allposts');
  });

  logoutBtn.addEventListener('click', () => {
    logoff();
  });

  printPosts('allposts');

  return feedContainer;
};
