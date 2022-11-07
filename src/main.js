// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { loginElements } from './pages/login/login.js';
import { mainRegister } from './pages/cadastro/cad.js';
const root = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    root.innerHTML = '';
    switch (window.location.hash) {
      case '#register':
        root.appendChild(mainRegister());
    }
  });
};

window.addEventListener('load', () => {
  root.appendChild(loginElements());
  init();
});
