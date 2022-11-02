import register from './Templates/register.js';
import feed from './Templates/feed.js';
import login from './Templates/login.js';
import momentoCookie from './Templates/momentoCookie.js';
import bemEstar from './Templates/bemEstar.js';


const main = document.querySelector('#root');
const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#register':
      main.appendChild(register());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    case '#momentoCookie':
      main.appendChild(momentoCookie());
      break;
    case '#bemEstar':
      main.appendChild(bemEstar());
      break;
    case '#login':
      main.appendChild(login());
      break;
    default:
      main.appendChild(login());
  }
};
window.addEventListener('load', () => {
  window.addEventListener('hashchange', init);
  init();
});
