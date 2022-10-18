/* eslint-disable no-console */

import { logOutUser } from '../../lib/auth.js';

export default () => {
  const sectionFeed = document.createElement('div');
  const contentFeed = `
    <div>
      <header class="headerFeed">
          <img src='/src/img/logo.png' class='loginhoFeed' alt='Logo Peq Wanderlust'>
      </header>
      <nav class="navBar">
        <ul>
          <li><a class='btnSIgnInOut' id='logOut'><img src='/src/img/btnSair.png' alt='seta para sair'</a></li>
        </ul>
      </nav>
      <section class="msgBoasvindas">
        <p> Olá, Fulana!</p>
      </section>
      <main clas="corpotimeline">
        <section class="boxModelPost">
          <form>
            <textarea id="text-publish" class="inputText" rows="5" cols="40" placeholder="Escreva detalhes sobre a estadia em sua residência..."></textarea>
            <button type="submit" id="publish-btn" class="publicBtn">Publicar</button>
          </form>
        </section>
        <section id="post-feed">
        </section>
      </main>  
    </div>`;
  sectionFeed.innerHTML = contentFeed;

  const textAreaPost = sectionFeed.querySelector('#text-publish');
  const btnPublish = sectionFeed.querySelector('#publish-btn');
  const btnLogOut = sectionFeed.querySelector('#logOut');
  btnLogOut.addEventListener('click', () => {
    logOutUser()
      .then(() => {
        window.location.hash = '#home';
      });
  });

  return sectionFeed;
};
