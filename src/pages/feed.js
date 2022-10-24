import { userLogOut } from '../firebase-services/auth.js';
import { creatingPost, gettingPost } from '../firebase-services/firestore.js';
import { postFunction } from './posts.js';

export const feedFunction = () => {
  const containerFeed = document.createElement("section");
  

  const templateFeed = `
  
  <section class='feed-page'>
    <div class='form-feed'>
      <div class="img-user"></div>
      <div class='inputs-feed'>
      <textarea class='question-feed ipt-general' type='text' id="inputQuote" wrap="harder" placeholder='Qual trecho você gostaria de compartilhar hoje?' /></textarea>
    <div class='inputs-source'>
      <input type='text' class='author input-space ipt-general' id="inputAuthor" placeholder='Autora' />
      <input type='text' class='book input-space ipt-general' id="inputBook" placeholder='Livro'/>
    </div>
    <button type='submit' class='button-publish btnFeed'>Publicar 
    </button>
  </div>
  <div class='logout'>
    <button type='submit' class='button-logout btnFeed'>Sair
    </button>
    </div>
  </section>
  
    <section class="container-post" id="containerPost">
    </section>
  `;

  containerFeed.innerHTML = templateFeed;

  const btnLogOut = containerFeed.querySelector('.button-logout');
  btnLogOut.addEventListener('click', () => {
    userLogOut().then(() => {
      window.location.hash = '#home';
    })
    
  });

  const btnPublish = containerFeed.querySelector('.button-publish');
  btnPublish.addEventListener('click', (e) => {
    const iptAuthor = containerFeed.querySelector('#inputAuthor').value;
    const iptBook = containerFeed.querySelector('#inputBook').value;
    const iptQuote = containerFeed.querySelector('#inputQuote').value;
    e.preventDefault;
    creatingPost(iptQuote, iptAuthor, iptBook);
  });

  
  containerFeed.querySelector('#containerPost').appendChild(postFunction());
  console.log(postFunction())

  return containerFeed;
};


gettingPost().then(docs => console.log(docs.docs[0].data()))