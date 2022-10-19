import cadastro from './pages/cadastro/cadastro.js';
import login from './pages/login/login.js';
import feed from './pages/feed/feed.js';
import publish from './pages/publish/publish.js';
import guidelines from './pages/guidelines/guidelines.js';
import terms from './pages/terms/terms.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';

  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(cadastro());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    case '#publish':
      main.appendChild(publish());
      break;
    case '#profile':
      main.appendChild(feed());
      break;
    case '#guidelines':
      main.appendChild(guidelines());
      break;
    case '#termsOfUse':
      main.appendChild(terms());
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

const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  const contentMenu = document.querySelector('#bodyMenu');

  if (contentMenu.style.display === 'block') {
    contentMenu.style.display = 'none';
  } else {
    contentMenu.style.display = 'block';
  }
});
