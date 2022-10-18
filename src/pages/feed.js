import { userLogOut } from '../firebase-services/auth.js';
import { teste } from '../firebase-services/firestore.js';

export const feedFunction = () => {
  const containerFeed = document.createElement("section");

  const templateFeed = `
  
  <section class='feed-page'>
    <div class='form-feed'>
      <div class="img-user"></div>
      <div class='inputs-feed'>
      <input class='question-feed ipt-general' type='text' placeholder='Qual trecho você gostaria de compartilhar hoje?' />
    <div class='inputs-source'>
      <input type='text' class='author input-space ipt-general' placeholder='Autora' />
      <input type='text' class='book input-space ipt-general' placeholder='Livro'/>
    </div>
    <button type='submit' class='button-publish btnFeed'>Publicar 
    </button>
  </div>
  <div class='logout'>
    <button type='submit' class='button-logout btnFeed'>Sair
    </button>
    </div>
  <section class='posts-feed'>
  
  `;

  containerFeed.innerHTML = templateFeed;

  const btnLogOut = containerFeed.querySelector('.button-logout');
  btnLogOut.addEventListener('click', () => {
    userLogOut().then(() => {
      console.log('Oi, nenem')
      window.location.hash = '#home';
    })
    
  });

  const btnPublish = containerFeed.querySelector('.button-publish');
  btnPublish.addEventListener('click', () => {
    teste()

  });

  return containerFeed;
};


