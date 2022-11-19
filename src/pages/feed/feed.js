import { logout } from '../../lib/auth.js';
import { validatePublish } from '../../lib/authenticate.js';
import { errorsFirebase } from '../../lib/error.js';

import {
  createPost,
  current,
  getAllPosts,
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
    </nav>
    <section id="post" class="post">
      <div class="post-box">
        <p id= 'error-message' class = 'error-message'> </p>
        <textarea class="post-textarea" data-textarea id="post-textarea" placeholder="O que deseja compartilhar?"></textarea>
        <button type="submit" id="post-btn" class="post-btn">Publicar</button>
      </div>
    </section>
    <section class="post-feed">
      <ul id="box-post"></ul>
    </section>
    <nav class='btn-link'>
      <img id='btn-link-img' class='btn-link-img' alt='links' src='./imagens/btn-link.png'>
      <img id='btn-about-link' class='btn-about' alt='desenvolvedoras da aplicação' src="./imagens/aboutt.png">
      <img id='btn-home' class='btn-home' alt='feed da aplicação' src="./imagens/home.png">
      
    </nav>
    <p id= 'error-message' class = 'error-message'> </p>
  `;

  const postBtn = feed.querySelector('#post-btn');
  const postFeed = feed.querySelector('#post-textarea');
  const postList = feed.querySelector('#box-post');
  const buttonLogout = feed.querySelector('.button-logout');
  const messageError = feed.querySelector('#error-message');
  const btnLink = feed.querySelector('#btn-link-img');
  const btnAbout = feed.querySelector('#btn-about-link');
  const btnHome = feed.querySelector('#btn-home');
  const user = current().uid;
  // colocar o template dentro de uma função exemplo a função faz mágica e chama a função //
  // getAllPosts embaixo com um then chamando a função fazMagica por exemplo e faz o cath //
  // printar posts //

  const templatePosts = (posts) => {
    const postsCreated = posts.map((post) => {
      const liked = post.like ? post.like.includes(user) : 'false';
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
              <p class="post-print" 
                data-idtext="${post.id}" 
                data-text="${post.post}" 
                >${post.post}
              </p>
              <p class="post-error"></p>
            </div>         
            <div class = 'field-btn-like'>
              ${iteration}
              <button 
                class='btn-like' 
                data-liked='${liked}' 
                data-likecount= ${post.like.length} 
                id =${post.id}>
                <span class='like-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="${liked ? 'red' : 'white'}" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                </span>
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
      const btnEdit = post.querySelector('.post-edit');
      const id = post.dataset.id;
      if (!btnEdit) return;
      btnEdit.addEventListener('click', async () => {
        const postEdit = feed.querySelector(`[data-idtext="${id}"]`);
        const isEditing = postEdit.contentEditable === 'true';
        if (isEditing) {
          await editPost(id, postEdit.textContent);
          postEdit.style.background = 'transparent';
          postEdit.contentEditable = false;
          btnEdit.setAttribute('src', './imagens/btnedit.png');
        } else {
          postEdit.contentEditable = true;
          postEdit.style.background = 'white';
          btnEdit.setAttribute('src', './imagens/edit.png');
        }
      });
    });

    // delete //
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

    // like //
    btnsLike.forEach((btnLike) => {
      btnLike.addEventListener('click', async () => {
        const userId = user;
        const idPost = btnLike.id;
        let likesCount = parseInt(btnLike.dataset.likecount, 10);
        if (btnLike.dataset.liked === 'true') {
          await postDislike(idPost, userId);
          btnLike.querySelector('.like-icon svg').setAttribute('fill', 'white');
          btnLike.dataset.liked = 'false';//eslint-disable-line
          likesCount = likesCount - 1 < 0 ? 0 : likesCount - 1;
          btnLike.dataset.likecount = likesCount;//eslint-disable-line
          btnLike.querySelector('.like-count').textContent = likesCount;//eslint-disable-line
        } else {
          await postLike(idPost, userId);
          btnLike.querySelector('.like-icon svg').setAttribute('fill', 'red');
          btnLike.dataset.liked = 'true';//eslint-disable-line
          likesCount += 1;
          btnLike.dataset.likecount = likesCount;//eslint-disable-line
          btnLike.querySelector('.like-count').textContent = likesCount;//eslint-disable-line
        }
      });
    });
  };

  // botao navegar para a página de links //
  btnLink.addEventListener('click', () => {
    window.location.hash = '#links';
  });

  // botao navegar para a página about //
  btnAbout.addEventListener('click', () => {
    window.location.hash = '#about';
  });

  // botao navegar para a página feed //
  btnHome.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  // função para printar pos posts na tela //
  const printPosts = () => {
    getAllPosts()
      .then((posts) => {
        templatePosts(posts);
      });
  };

  printPosts();

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
        .then(() => {
          printPosts();
          postFeed.value = '';
          // troquei o reload e chamei //
          // novamente a função de printar os posts para ser atualizada //
        })
        .catch((error) => {
          const errorCode = errorsFirebase(error.code);
          messageError.innerHTML = errorCode;
          messageError.classList.add('show');
        });
    }
  });

  // botão deslogar //
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
