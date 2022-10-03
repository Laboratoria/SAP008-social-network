import { createPost } from '../../lib/index.js';

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
  publishBtn.addEventListener('click', () => {
    createPost(textPost.value);
  });

  return feedContainer;
};
