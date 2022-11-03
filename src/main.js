// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { loginElements } from './pages/login/login.js';

const root = document.querySelector('#root');

window.addEventListener('load', () => {
  root.appendChild(loginElements());
});
