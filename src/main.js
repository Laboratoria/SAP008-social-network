import cadastro from './pages/cadastro/cadastro.js';
import login from './pages/login/login.js';
import feed from './pages/feed/feed.js';
import publish from './pages/publish/publish.js';
import guidelines from './pages/guidelines/guidelines.js';
import terms from './pages/terms/terms.js';
import header from './pages/header/header.js';
import footer from './pages/footer/footer.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';

  switch (window.location.hash) {
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(cadastro());
      break;
    case '#feed':
      main.appendChild(header());
      main.appendChild(feed());
      main.appendChild(footer());
      break;
    case '#publish':
      main.appendChild(header());
      main.appendChild(publish());
      main.appendChild(footer());
      break;
    case '#profile':
      main.appendChild(header());
      main.appendChild(feed());
      main.appendChild(footer());
      break;
    case '#guidelines':
      main.appendChild(header());
      main.appendChild(guidelines());
      main.appendChild(footer());
      break;
    case '#termsOfUse':
      main.appendChild(header());
      main.appendChild(terms());
      main.appendChild(footer());
      break;
    case '#logout':
      main.appendChild(login());
      break;
    default:
      main.appendChild(feed());
  }
};

window.addEventListener('load', () => {
  init();
});

window.addEventListener('hashchange', () => {
  init();
});
