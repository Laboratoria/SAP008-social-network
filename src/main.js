import register from './Templates/register.js';
import feed from './Templates/feed.js';
import login from './Templates/login.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#login':
      main.appendChild(login());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    default:
      main.appendChild(register());
  }
};
window.addEventListener('load', () => {
  window.addEventListener('hashchange', init);
  init();
});
