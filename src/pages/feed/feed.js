import { validatePublish } from '../../lib/authenticate.js';
import { errorsFirebase } from '../../lib/error.js';

import {
  createPost,
  current,
  getAllPosts,
  logout,
  postLike,
  postDislike,
  deletePost,
  editPost,
} from '../../lib/firestore.js';

export default function Feed() {
  const feed = document.createElement('div');
  feed.classList.add('container-feed');
  feed.innerHTML = `  
  <div class="main-div">
  <nav class="top-nav">
  <picture>
      <img class="logo-feed" src="imagens/logoINspirefeed.png" alt="Logo" />
  </picture>
    <a href="#login" id="logout">
       <img  class="button-logout" src="imagens/btnlogout.png" alt="Botão Sair">
    </a> 
  </picture>
  </nav>
        <section id="post" class="post">
          <div class="post-box">
            <p id= 'error-message' class = 'error-message'> </p>
            <p id= 'message-welcome' class = 'welcome-message'> </p>
            <textarea class="post-textarea" id="post-textarea" placeholder="O que deseja compartilhar?"></textarea>
            <button type="submit" id="post-btn" class="post-btn">Publicar</button>
          </div>
        </section>
      <section class="post-feed">
        <ul id="box-post"></ul>
      </section>
      <p id= 'error-message' class = 'error-message'> </p>
    `;

  const postBtn = feed.querySelector('#post-btn');
  const modalPost = feed.querySelector('#post');
  const postFeed = feed.querySelector('#post-textarea');
  const postList = feed.querySelector('#box-post');
  const buttonLogout = feed.querySelector('.button-logout');
  const messageError = feed.querySelector('#error-message');
  const user = current().uid;

  // printar posts //
  getAllPosts()
    .then((posts) => {
      const postsCreated = posts.map((post) => {
        const liked = post.like ? post.like.includes(user) : false;
        const iteration = post.user === user ? `  
        <div class="iteration-btn">
          <img class="delete-post" data-delete="true" src="./imagens/btndelete.png" alt="Botão de deletar">
          <img class="post-edit" data-edit="true" src="./imagens/btnedit.png" alt="Botão de editar">
        </div> ` : '';
        return `
        <li class="allposts" data-id="${post.id}">
          <div class="identification"> 
            <p class="username"><b>${post.displayName}</b></p>
            <p class="data-post"> Postado em ${post.data} às ${post.hour} </p>
            <textarea class="post-print" data-idtext="${post.id}" data-text="${post.post}" disabled>${post.post}</textarea>
            <p class="post-error"></p>
          </div>         
          <div class = 'field-btn-like'>
            ${iteration}
            <button 
              class='btn-like' 
              data-liked='${liked}' 
              data-likecount= ${post.like.length} 
              id =${post.id}>
              <span class='like-icon ${liked ? 'liked-red' : ''}'>&#10084;</span>
              <span class='like-count'>${post.like.length}</span>
            </button>
          </div>
          <div class="modal">
            <div class="internal-modal">
               <p> DESEJA EXCLUIR SEU POST? </p>
               <button class="btn-del" data-sim="true"> SIM </button>
               <button class="btn-del" data-nao="true"> NÃO </button>
            </div>
          </div>
        </li>
        `;
      }).join('');
      postList.innerHTML = postsCreated;

      const btnsLike = postList.querySelectorAll('.btn-like');
      const postsElements = feed.querySelectorAll('.allposts');

      // editar posts //
      postsElements.forEach((post) => {
        post.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;
          console.log(id);
          if (e.target.dataset.edit) {
            const postEdit = feed.querySelector(`[data-idtext="${id}"]`);
            const btnSave = feed.querySelector('.post-edit');
            postEdit.removeAttribute('disabled');
            btnSave.addEventListener('click', async () => {
              await editPost(id, postEdit.value);
              postEdit.setAttribute('disabled', '');
            });
          }
        });
      });

      // delete //
      postsElements.forEach((post) => {
        post.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;
          console.log(id);
          if (e.target.dataset.delete) {
            const modal = e.currentTarget.querySelector('.modal');
            modal.style.display = 'flex';
          } else if (e.target.dataset.sim) {
            const modal = e.currentTarget.querySelector('.modal');
            modal.style.display = 'none';
            deletePost(id)
              .then(() => {
                post.remove();
              });
          } else if (e.target.dataset.nao) {
            const modal = e.currentTarget.querySelector('.modal');
            modal.style.display = 'none';
          }
        });
      });

      // like //
      btnsLike.forEach((btnLike) => {
        btnLike.addEventListener('click', async (e) => {
          const userId = user;
          const idPost = btnLike.id;
          let likesCount = parseInt(e.target.dataset.likecount, 10);
          if (btnLike.dataset.liked === 'true') {
            await postDislike(idPost, userId);
            btnLike.querySelector('.like-icon').classList.remove('liked-red');
            btnLike.dataset.liked = 'false';//eslint-disable-line
            likesCount = likesCount - 1 < 0 ? 0 : likesCount - 1;
            e.target.dataset.likecount = parseInt(likesCount, 10);
            btnLike.querySelector('.like-count').textContent = likesCount;//eslint-disable-line
          } else {
            await postLike(idPost, userId);
            btnLike.querySelector('.like-icon').classList.add('liked-red');
            btnLike.dataset.liked = 'true';//eslint-disable-line
            likesCount += 1;
            e.target.dataset.likecount = likesCount;
            btnLike.querySelector('.like-count').textContent = likesCount;//eslint-disable-line
          }
        });
      });
    });

  // criar posts //
  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    messageError.classList.remove('show');
    const validate = validatePublish(postFeed.value);
    if (validate) {
      messageError.classList.add('show');
      messageError.innerHTML = validate;
    } else {
      createPost(postFeed.value)
        .then(() => window.location.reload())
        .catch((error) => {
          const errorCode = errorsFirebase(error.code);
          messageError.innerHTML = errorCode;
          messageError.classList.add('show');
        });
    }
  });

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout()
      .then(() => { window.location.hash = 'login'; })
      .catch((error) => {
        const errorCode = errorsFirebase(error.code);
        messageError.innerHTML = errorCode;
        messageError.classList.add('show');
      });
  });

  return feed;
}
