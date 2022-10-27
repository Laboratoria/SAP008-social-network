import {
  getAllPosts,
  // updatePost
} from '../../firebase/firestore.js';

export default () => {
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
        <div class='btn-edit'><img src='img/pencil.png' id='edit'></div>
        <div class='photo-name-post-feed'>
          <div>${post.userPhoto}</div>
          <div class='name-post-feed'>${post.userName}</div>
        </div>
        <div class='content-post-feed'>${post.text}</div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>${post.subject}</div>
          <div class='data-post-feed'>${post.publishDate}</div>
        </div>
        <div class='icone-like-post-feed'>❤️ ${post.like}</div>
      </div>
    `).join('');
    containerFeed.querySelector('#bodyPostFeed').innerHTML += postTemplate;
  };

  showPosts();

  // const edit = containerFeed.querySelector('#edit');
  // edit.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   updatePost();
  // });

  return containerFeed;
};
