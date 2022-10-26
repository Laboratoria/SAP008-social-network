import { errorsFirebase } from '../../lib/error.js';

import {
  createPost,
  current,
  getAllPosts,
  logout,
  postLike,
  postDislike,
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
        <div class="delete-btn">
          <img class="delete-post" src="./imagens/btndelete.png" alt="Botão de deletar">
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
            <button class ='btn-like ${liked ? 'liked' : ''}' data-liked='${liked}' id =${post.id}>&#10084; ${post.like.length}</button>
          </div>
        </li>
        `;
      }).join('');
      postList.innerHTML = postsCreated;

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
