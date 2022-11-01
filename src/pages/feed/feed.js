import {
  getAllPosts, deletePost, getPost, likePost,
} from '../../firebase/firestore.js';
import { userUID } from '../../firebase/auth.js';

export default () => {
  localStorage.setItem('editStatus', false);

  const containerFeed = document.createElement('div');

  const bodyFeed = `
    <div id='bodyPostFeed' class='body-post-feed'> 
    </div>
  `;

  containerFeed.innerHTML = bodyFeed;

  const showPosts = async () => {
    const posts = await getAllPosts();
    const postTemplate = posts.map((post) => `
      <div class='main-post-feed'>
        <button class='btn-edit-post-feed' data-post-id=${post.id} data-user-id=${post.userId}>✏️</button>
        <div class='name-post-feed'>${post.userName}</div>
        <div class='content-post-feed'>${post.text}</div>
        <div class='select-date-post-feed'>
          <div class='select-post-feed'>${post.subject}</div>
          <div class='date-post-feed'>${post.publishDate}</div>
        </div>
        <div class='like-delete-post-feed'>
          <button class='btn-like-post-feed' data-post-id=${post.id}>💚 ${post.like.length}</button>
          <button class='btn-delete-post-feed' data-post-id=${post.id} data-user-id=${post.userId}>🗑️</button>
        </div>
      </div>

    `).join('');

    containerFeed.querySelector('#bodyPostFeed').innerHTML += postTemplate;

    const btnsDelete = containerFeed.querySelectorAll('.btn-delete-post-feed');

    btnsDelete.forEach((btn) => {
      if (userUID() === btn.dataset.userId) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }

      btn.addEventListener('click', async (e) => {
        // eslint-disable-next-line no-alert, no-restricted-globals
        if (confirm('Tem certeza que deseja excluir?') === true) {
          await deletePost(e.target.dataset.postId);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      });
    });

    const btnsEdit = containerFeed.querySelectorAll('.btn-edit-post-feed');

    btnsEdit.forEach((btn) => {
      if (userUID() === btn.dataset.userId) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }

      btn.addEventListener('click', async (e) => {
        const post = await getPost(e.target.dataset.postId);
        localStorage.setItem('postId', post.id);
        localStorage.setItem('postText', post.text);
        localStorage.setItem('postSubject', post.subject);
        localStorage.setItem('editStatus', true);
        window.location.hash = '#publish';
      });
    });

    const btnsLike = containerFeed.querySelectorAll('.btn-like-post-feed');

    btnsLike.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const listaDeLike = await likePost(e.target.dataset.postId);
        e.target.innerHTML = `💚 ${listaDeLike.length}`;
      });
    });
  };

  showPosts();

  return containerFeed;
};
