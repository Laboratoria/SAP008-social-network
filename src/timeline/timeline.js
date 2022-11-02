import {
  signOut, getAllPosts, getUserId, editPost, deletePost, getPostById, likePost,
} from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const userId = getUserId();
  const container = document.createElement('div');
  const template = `  
        <div class="container-timeline">
            <div class="container-logo">
                <img class="logo-img" src="./images/logo_02_blue_081E26.png"alt="logo do título">
            </div>
            <nav class='menu-hamburguer'>
                    <ul class='navbar-list'>
                        <li class='navbar-item-button'>
                            <button type='button' id='navbar-button'><span class="material-symbols-outlined">
                            menu
                            </span></button>
                        </li>
                        <a href='#post'>
                          <li class="navbar-item hide">Publicar Post</li>
                        </a>
                        <a href='#aboutus'>
                          <li class="navbar-item hide">Sobre Nós</li>
                        </a>
                        <a>
                          <li class="navbar-item hide" id="logout">Sair</li>
                        </a>
                        
                    </ul>
                </nav>
               <section id="show-timeline"></section>
        </div>     
    `;

  container.innerHTML = template;
  const menu = container.querySelector('#navbar-button');

  const showPosts = async () => {
    const groupArr = await getAllPosts();
    const postsTemplate = groupArr.map((post) => {
      let editBtnTemplate = '';

      if (userId === post.author) {
        editBtnTemplate = `<div class="btns-post-container">
          <button class="btn-edit" id="btn-edit" data-author-id=${post.author} data-post-id=${post.id}>Editar</button>
          <button class="btn-edit" id="btn-save" data-save=${post.id}>Salvar</button>
          <button class="btn-edit" id="btn-delete" data-author-id=${post.author} data-delete=${post.id}>Excluir</button>
          <button id="btn-like" data-author-like=${post.author} data-like=${post.id}>
            <img class='heart-like' src=${post.likes.includes(userId) ? './images/heart.png' : './images/heart_empty.png'} alt='like-heart'> 
          </button>
        </div>`;
      } else {
        editBtnTemplate = `<button id='btn-like' data-author-like=${post.author} data-like=${post.id}>
          <img class='heart-like' src=${post.likes.includes(userId) ? './images/heart.png' : './images/heart_empty.png'} alt='like-heart'>
        </button>`;
      }

      const postTemplate = `
        <div class="post">
          <section class="box-post-timeline" data-section-post-id=${post.id}>
            <p id="user-name">${post.name}</p>
            <p id="artist-name">${post.artist}</p>
            <p id="show-location">${post.location}</p>
            <p id="show-date">${post.date}</p>
            <p id="text-post">${post.text}</p>
            <p id="text-likes">${post.likes.length}</p>
            ${editBtnTemplate} 
          </section>
        </div>
        </br>
      `;

      return postTemplate;
    }).join('');
    container.querySelector('#show-timeline').innerHTML += postsTemplate;

    container.querySelectorAll('#btn-edit').forEach((button) => {
      button.addEventListener('click', (e) => {
        const postId = e.currentTarget.dataset.postId;

        const section = container.querySelector(`section[data-section-post-id="${postId}"]`);

        const artist = section.querySelector('#artist-name');
        artist.setAttribute('contenteditable', 'true');

        const showLocation = section.querySelector('#show-location');
        showLocation.setAttribute('contenteditable', 'true');

        const showDate = section.querySelector('#show-date');
        showDate.setAttribute('contenteditable', 'true');

        const textPost = section.querySelector('#text-post');
        textPost.setAttribute('contenteditable', 'true');

        const btnSave = container.querySelector(`[data-save="${postId}"]`);
        btnSave.addEventListener('click', () => {
          artist.removeAttribute('contenteditable');
          showLocation.removeAttribute('contenteditable');
          showDate.removeAttribute('contenteditable');
          textPost.removeAttribute('contenteditable');

          editPost(
            postId,
            artist.innerText,
            showLocation.innerText,
            showDate.innerText,
            textPost.innerText,
          );
        });
      });
    });

    container.querySelectorAll('#btn-delete').forEach((button) => {
      button.addEventListener('click', (e) => {
        if (confirm('Tem certeza que deseja deletar este post?')) {
          const postId = e.currentTarget.dataset.delete;
          deletePost(postId);
          const section = container.querySelector(`[data-section-post-id="${postId}"]`);
          section.style.display = 'none';
        }
      });
    });

    container.querySelectorAll('#btn-like').forEach((button) => {
      button.addEventListener('click', async (e) => {
        const postId = e.currentTarget.dataset.like;
        const post = await getPostById(postId);
        const section = container.querySelector(`[data-section-post-id="${postId}"]`);

        const img = e.target;

        likePost(post, postId, userId)
        // estava faltando o post de parametro, pq essa função tem 3 parametros.
          .then((resultado) => {
            if (resultado.liked) {
              section.querySelector('#text-likes').innerText = resultado.count;
              img.setAttribute('src', 'images/heart.png');
            } else {
              section.querySelector('#text-likes').innerText = resultado.count;
              img.setAttribute('src', 'images/heart_empty.png');
            }
          });
      });
    });
  };

  menu.addEventListener('click', () => {
    const items = container.querySelectorAll('.navbar-item');
    items.forEach((item) => {
      item.classList.toggle('hide');
    });
    console.log(items);
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  showPosts();

  return container;
};
