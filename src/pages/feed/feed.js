import { errorsFirebase } from '../../lib/error.js';

import {
  createPost,
  current,
  getAllPosts,
  logout,
  postLike,
  postDislike,
  deletePost,
  //editPost
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
  // const btnLike = Array.from(feed.querySelector('#btn-like'));
  // const btnLike = feed.querySelector('#post-like');
  
  // O operador ternário ( ? ) funciona assim ...você tem uma condição
  // que deve ser validada como verdadeira ou falsa. Se a condição for
  // verdadeira o operador retorna uma expressão e se for falsa retorna
  // outra expressão.

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
            <p class="post-print" data-idtext="${post.id}" data-text="${post.post}" contentEditable="false"> ${post.post} </p>
          </div>         
          <div class = 'field-btn-like'>
            ${iteration}
            <button class ='btn-like ${liked ? 'liked' : ''}' data-liked='${liked}' id =${post.id}>&#10084;</button>
          </div>
          <div class="modal">
            <div class="internal-modal">
               <p> DESEJA EXCLUIR SEU POST? </p>
               <button class="btn-del" data-sim="true"> SIM </button>
               <button class="btn-del" data-nao="true"> NÃO </button>
            </div>
        </li>
        `;
      }).join('');
      postList.innerHTML = postsCreated;

      const postsElements = feed.querySelectorAll('.allposts');
      postsElements.forEach((post) => {
        post.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;

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

      const btnsLike = postList.querySelectorAll('.btn-like');

      btnsLike.forEach((btnLike) => {
        btnLike.addEventListener('click', async () => {
          const userId = user;
          const idPost = btnLike.id;
          if (btnLike.dataset.liked === 'true') {
            console.log('postdislike');
            await postDislike(idPost, userId);
            btnLike.classList.remove('liked');
            btnLike.dataset.liked = 'false';//eslint-disable-line
          } else {
            await postLike(idPost, userId);
            console.log('postlike');
            btnLike.classList.add('liked');
            btnLike.dataset.liked = 'true';//eslint-disable-line
          }
        });
      });
    });

  /*if (e.target.dataset.edit) {
    const postEdit = feed.querySelector(`[data-idtext="${id}"]`);
    const btnsEdit = postEdit.nextElementSibling;
    postEdit.contentEditable = true;
    btnsEdit.style.display = 'flex';
  } else if (e.target.dataset.cancel) {
    const postEdit = feed.querySelector(`[data-idtext="${id}"]`);
    const buttonsEdit = postEdit.nextElementSibling;
    postEdit.contentEditable = false;
    buttonsEdit.style.display = 'none';
    postEdit.textContent = postEdit.dataset.text;
  } else if (e.target.dataset.save) {
    const postEdit = feed.querySelector(`[data-idtext="${id}"]`);
    const buttonsEdit = postEdit.nextElementSibling;
    postEdit.contentEditable = false;
    buttonsEdit.style.display = 'none';
    postEdit.dataset.text = postEdit.textContent;
    editPost(id, postEdit.textContent);
  }*/

  postBtn.addEventListener('click', (e) => {
    modalPost.style.display = 'none'; //porque esse modal deve estar none?//
    e.preventDefault();
    createPost(postFeed.value)
      .then(() => window.location.reload())
      .catch((error) => {
        const errorCode = errorsFirebase(error.code);
        messageError.innerHTML = errorCode;
        setTimeout(() => {
          messageError.innerHTML = '';
        }, 2000);
      });
  });

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout()
      .then(() => { window.location.hash = 'login'; })
      .catch((error) => {
        const errorCode = errorsFirebase(error.code);
        messageError.innerHTML = errorCode;
        setTimeout(() => {
          messageError.innerHTML = '';
        }, 2000);
      });
  });

  return feed;
}
