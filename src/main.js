import cadastro from './pages/cadastro/cadastro.js';

import login from './pages/login/login.js';

const main = document.querySelector('#root');

const verify = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(cadastro());
      break;
    default:
      main.appendChild(login());
  }
};

window.addEventListener('hashchange', verify);

window.addEventListener('load', () => {
  // main.appendChild(login());
  verify();
});
