import {
  createPost,
  // deletePost,
  getAllPosts,
} from '../../lib/index.js';

export default () => {
  const feedContainer = document.createElement('div');
  const template = `
  <header>
  
  <img src="img/Rebu.png" alt="rebu logo">
  <input type="search" placeholder="Busque por post">
      <img src="" alt="" id="user-profile-picture-header">
      <button id="logout-btn"><img src="" alt=""></button>

      <nav class="tag-filter">

      <button class="tag-button">MÚSICA</button>
      <button class="tag-button">TV</button>
      <button class="tag-button">EVENTOS</button>
      <button class="tag-button">PETS</button>
      <button class="tag-button">HOBBIES</button>
        <button class="tag-button">POLÍTICA</button>
        
        </nav>

        </header>
        
    <main>
    
    <section id="create-post">
    
    <div id="user-profile-picture-div">
    <img src="" alt="" class="" class="user-profile-picture-post">
    </div>
    
        <textarea name="" id="text-post" cols="30" rows="10" style="resize:none" maxlength="200"></textarea>

        <div class="create-post-box-buttons">
          <select>
            <option selected disabled>Categoria</option>
            </select>
          <button id="publish-btn">Publicar</button>
          <button id="delete-btn">Deletar</button>
          </div>
          
          </section>
          
          <section id="feed-post"></section>
          
          </main>
          
          <footer>
          <img src="" alt="" >
          </footer>
          `;

  feedContainer.innerHTML = template;
  const publishBtn = feedContainer.querySelector('#publish-btn');
  const textPost = feedContainer.querySelector('#text-post');

  const printPosts = async () => {
    const postArr = await getAllPosts();
    feedContainer.querySelector('#feed-post').innerHTML = postArr.map((key) => `
        <div class="post">
          <div class="header-post">
            <img class="user-photo-post" src="" alt="">
            <h2 class="user-name-post">${key.author}</h2>
            <button class="like-btn-post"><img class="pencil-post" src="" alt="">edit</button>
            <button class="like-btn-post"><img class="delete-post" src="" alt="">delet</button>
          </div>
          <p class="text-post">${key.text}</p>
          <div class="footer-post">
            <p class="date-post"></p>
            <button class="like-btn-post">like</button>
            <p class="all-likes-post"></p>
          </div>
        </div>
    `).join('');
  };

  publishBtn.addEventListener('click', () => {
    createPost(textPost.value);
    printPosts();
  });

  printPosts();

  // const deleteBtn = feedContainer.querySelector('#delete-btn');
  // deleteBtn.addEventListener('click', () => {
  //   deletePost('DgLMx1iolHaRUECdweT6W1TJGEJ3');
  // });

  return feedContainer;
};
