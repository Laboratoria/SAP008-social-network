import load from './pages/load/load.js';
import login from './pages/login/login.js';
import signin from './pages/signin/signin.js';
import home from './pages/home/home.js';
// eslint-disable-next-line camelcase
import new_post from './pages/new_post/new_post.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
  let homeContainer;
  switch (window.location.hash) {
    case '':
      main.appendChild(load());
      break;
    case '#entrar':
      main.appendChild(login());
      break;
    case '#cadastre-se':
      main.appendChild(signin());
      break;
    case '#home':
      homeContainer = home();
      if (!homeContainer) {
        window.location.hash = '#entrar';
        return;
      }
      main.appendChild(homeContainer);
      break;
    case '#novo_post':
      main.appendChild(new_post());
      break;
    default:
      main.appendChild(load());
  }
};

window.addEventListener('load', () => {
  main.appendChild(load());
  window.addEventListener('hashchange', init);
  init();
});
