import {
  signOut, getAllPosts, getUserId, editPost, deletePost, getPostById, likePost,
} from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const userId = getUserId();
  const container = document.createElement('div');
  container.classList.add('container-timeline');
  const template = `
    <div class='box-timeline'>  
      <div class='container-logo-timeline'>
        <img class='logo-img-timeline' src='./images/logo_01_brown_A6634B.png'alt='logo do título' />
      </div>
      <nav class='menu-hamburguer'>
        <ul class='navbar-list'>
          <li class='navbar-item-button'>
            <button type='button' id='navbar-button'>
              <span class='material-symbols-outlined'>menu</span>
            </button>
          </li>
          <a href='#post'>
            <li class='navbar-item hide'>Publicar Post</li>
          </a>
          <a href='#aboutus'>
              <li class='navbar-item hide'>Sobre Nós</li>
          </a>
          <a>
            <li class='navbar-item hide' id='logout'>Sair</li>
          </a>   
        </ul>
      </nav>
      <section id='show-timeline'></section>
    </div>`;

  container.innerHTML = template;
  const menu = container.querySelector('#navbar-button');

  const showPosts = async () => {
    const groupArr = await getAllPosts();
    const postsTemplate = groupArr.map((post) => {
      let editBtnTemplate = '';

      if (userId === post.author) {
        editBtnTemplate = `
          <button class='btn-edit' id='btn-edit' data-author-id=${post.author} data-post-id=${post.id}>Editar</button>
          <button class='btn-edit' id='btn-save' data-save=${post.id}>Salvar</button>
          <button class='btn-edit' id='btn-delete' data-author-id=${post.author} data-delete=${post.id}>Excluir</button>
          <button id='btn-like' data-author-like=${post.author} data-like=${post.id}>
            <img class='heart-like' src=${post.likes.includes(userId) ? './images/heart.png' : './images/heart_empty.png'} alt='like-heart' /> 
          </button>
          <p id='text-likes' class='text-likes'>${post.likes.length}</p>
        `;
      } else {
        editBtnTemplate = `
        <button id='btn-like' data-author-like=${post.author} data-like=${post.id}>
          <img class='heart-like-sub' src=${post.likes.includes(userId) ? './images/heart.png' : './images/heart_empty.png'} alt='like-heart' />
        </button>
        <p id='text-likes' class='text-likes-sub'>${post.likes.length}</p>`;
      }

      const postTemplate = `
        <div class='post'>
          <section class='box-post-timeline' data-section-post-id=${post.id}>
            <div class='box-complete-post'>
              <div class='box-info-post'>
                <p id='user-name'>${post.name}</p>
                <p id='artist-name'>${post.artist}</p>
                <p id='show-location'>${post.location}</p>
                <p id='show-date'>${post.date}</p>
              </div>
              <div class='box-text-post'>
                <p id='text-post'>${post.text}</p>
              </div>
              <div class='btn-options'>
                ${editBtnTemplate}
              </div>
            </div>
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

        const section = container.querySelector(`section[data-section-post-id='${postId}']`);

        const artist = section.querySelector('#artist-name');
        artist.setAttribute('contenteditable', 'true');

        const showLocation = section.querySelector('#show-location');
        showLocation.setAttribute('contenteditable', 'true');

        const showDate = section.querySelector('#show-date');
        showDate.setAttribute('contenteditable', 'true');

        const textPost = section.querySelector('#text-post');
        textPost.setAttribute('contenteditable', 'true');

        const btnSave = container.querySelector(`[data-save='${postId}']`);
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
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Tem certeza que deseja deletar este post?')) {
          const postId = e.currentTarget.dataset.delete;
          deletePost(postId);
          const section = container.querySelector(`[data-section-post-id='${postId}']`);
          section.style.display = 'none';
        }
      });
    });

    container.querySelectorAll('#btn-like').forEach((button) => {
      button.addEventListener('click', async (e) => {
        const postId = e.currentTarget.dataset.like;
        const post = await getPostById(postId);
        const section = container.querySelector(`[data-section-post-id='${postId}']`);

        const img = e.target;

        likePost(post, postId, userId)
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
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  showPosts();

  return container;
};
