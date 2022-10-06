import './lib/firebase.js';
import login from './pages/login/index.js';
import signup from './pages/signup/index.js';
import feed from './pages/feed/index.js';

const main = document.querySelector('#root');

const changeHash = () => {
  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#signup':
      main.appendChild(signup());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    default: main.appendChild(login());
  }
};

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    changeHash();
  });
};

window.addEventListener('load', () => {
  changeHash();
  init();
});
