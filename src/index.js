import home from './pages/home/home.js';
import register from './pages/cadastrar/register.js';
import password from './pages/password/password.js';
import about from './pages/about/about.js';

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
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener('load', () => {
  location.hash = '';
  main.appendChild(home());
  inicio();
});
