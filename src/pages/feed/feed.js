import { getAllPosts, deletePost, getPost } from '../../firebase/firestore.js';

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
        <button class='btn-edit' data-post-id=${post.id}>✏️</button>
        <div class='photo-name-post-feed'>
          <div>${post.userPhoto}</div>
          <div class='name-post-feed'>${post.userName}</div>
        </div>
        <div class='content-post-feed'>${post.text}</div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>${post.subject}</div>
          <div class='data-post-feed'>${post.publishDate}</div>
        </div>
        <div class='like-delete-post-feed'>
          <button class='icone-like-post-feed'>❤️ ${post.like}</button>
          <button class='btn-delete' data-post-id=${post.id}>🗑️</button>
        </div>
      </div>

    `).join('');

    containerFeed.querySelector('#bodyPostFeed').innerHTML += postTemplate;

    const btnsDelete = containerFeed.querySelectorAll('.btn-delete');

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        // eslint-disable-next-line no-alert, no-restricted-globals
        if (confirm('Tem certeza que deseja excluir?') === true) {
          await deletePost(e.target.dataset.postId);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      });
    });

    const btnsEdit = containerFeed.querySelectorAll('.btn-edit');

    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const post = await getPost(e.target.dataset.postId);
        localStorage.setItem('postId', post.id);
        localStorage.setItem('postText', post.text);
        localStorage.setItem('postSubject', post.subject);
        localStorage.setItem('editStatus', true);
        window.location.hash = '#publish';
      });
    });
  };

  showPosts();

  return containerFeed;
};
