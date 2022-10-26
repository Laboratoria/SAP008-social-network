import { getAllPosts } from '../../firebase/firestore.js';

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
        <div id='delete' class='btn-delete'><img class='img-delete' src='img/delete.png'></div>
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

  return containerFeed;
};
