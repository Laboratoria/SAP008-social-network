import home from './pages/home/home.js';
import register from './pages/cadastrar/register.js';
import password from './pages/password/password.js';
import about from './pages/about/about.js';
import feed from './pages/feed/feed.js';

const main = document.querySelector('#root');

const inicio = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(home());
        break;
      case '#recuperarsenha':
        main.appendChild(password());
        break;
      case '#paracadastro':
        main.appendChild(register());
        break;
      case '#sobre':
        main.appendChild(about());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    }
  });
};
window.addEventListener('load', () => {
  window.location.hash = '';
  main.appendChild(home());
  inicio();
});
