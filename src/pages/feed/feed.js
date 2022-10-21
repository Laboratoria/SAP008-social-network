/* eslint-disable spaced-comment */
/* eslint-disable no-console */

import { logOutUser } from '../../lib/auth.js';
import { createPost, postScreen, auth } from '../../lib/firestore.js';

export default () => {
  const sectionFeed = document.createElement('div');
  const contentFeed = `
    <div>
      <header class='headerFeed'>
          <img src='/src/img/logo.png' class='loginhoFeed' alt='Logo Peq Wanderlust'>
      </header>
      <nav class='navBar'>
        <ul>
          <li><a class='btnSIgnInOut' id='logOut'><img src='/src/img/btnSair.png' alt='seta para sair'</a></li>
        </ul>
      </nav>
      <section class='msgBoasvindas'>
        <p> Olá, ${auth.currentUser.displayName}!</p>
      </section>
      <div clas='corpotimeline'>
        <form id='create-Post'>
          <section class='boxModelPost'>
            <form>
              <textarea id='text-publish' class='inputText' rows='5' cols='40' placeholder='Escreva detalhes sobre a estadia em sua residência...'></textarea>
              <button type='submit' id='publish-btn' class='publicBtn'>Publicar</button>
            </form>
          </section>
          <section id='post-feed'></section>
        </form> 
      </div>  
    </div>`;
  sectionFeed.innerHTML = contentFeed;

  const templatePost = `
    <div>
      <p id="feedPost"></p>
    </div>
  `;

  sectionFeed.querySelector('#post-feed').innerHTML = templatePost;

  const printPost = async () => {
    const printArray = await postScreen();
    const postsTemplate = printArray.map((posts) => {
      const postTemplate = `
      <section class="postTimeline">
        <p id="userName">${posts.name}</p>
        <p id="textPost">${posts.text}</p>
      </section>
    `;
      return postTemplate;
    }).join('');
    sectionFeed.querySelector('#feedPost').innerHTML = postsTemplate;

    const createform = sectionFeed.querySelector('#create-Post');
    const textAreaPost = sectionFeed.querySelector('#text-publish');
    /*const btnPublish = sectionFeed.querySelector('#publish-btn');*/
    const btnLogOut = sectionFeed.querySelector('#logOut');
    btnLogOut.addEventListener('click', () => {
      logOutUser()
        .then(() => {
          window.location.hash = '#home';
        });
    });

    createform.addEventListener('submit', (e) => {
      e.preventDefault();
      const postText = textAreaPost.value;
      createPost(postText)
        .then(() => {
          document.getElementById('feedPost').innerHTML = printPost();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  printPost();
  return sectionFeed;
};
