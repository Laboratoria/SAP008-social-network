/* eslint-disable default-case */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
import { mainLogin } from './pages/login/login.js';
import { mainRegister } from './pages/cadastro/cad.js';
import { mainFeed } from './pages/feed/feed.js';

const root = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', async () => {
    root.innerHTML = '';
    switch (window.location.hash) {
      case '#register':
        root.appendChild(mainRegister());
        break;
      case '#login':
        root.appendChild(mainLogin());
        break;
      case '#feed':
        root.appendChild(await mainFeed());
        break;
    }
  });
};

window.addEventListener('load', () => {
  root.appendChild(mainLogin());
  init();
});
