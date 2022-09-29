// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const main = document.querySelector('#root');

window.addEventListener('load', () => {
  main.appendChild(login());
});