import { errorsFirebase } from '../../lib/error.js';
import {
  createPost,
  current,
  getAllPosts,
  logout,
} from '../../lib/firestore.js';

export default function Feed() {
  const feed = document.createElement('div');
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
          <button id="post-btn" class="post-btn">Publicar</button>
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

  // O operador ternário ( ? ) funciona assim ...você tem uma condição
  // que deve ser validada como verdadeira ou falsa. Se a condição for
  // verdadeira o operador retorna uma expressão e se for falsa retorna
  // outra expressão.

    getAllPosts()
    .then((posts) => {
      console.log(posts);
      const postCreated = posts.map((post) => {
        const iteration = post.user === user ? `  
        <div class="delete-btn">
          <p class="delete-post"></p>
        </div> ` : '';
        return `
        <li class="allposts" data-id="${post.id}">
          <div class="identification"> 
            <p class="username"><b>${post.displayName}</b></p>
            <p class="data-post"> Postado em ${post.data} ${post.hour} </p>
            <p class="post-print" data-idtext="${post.id}" data-text="${post.post}" contentEditable="false"> ${post.post} </p>
          </div>
        </li>`).join('');
        postList.innerHTML = postCreated;
      });
  };

  semReload();

  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createPost(postFeed.value)
      .then(() => semReload());

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
