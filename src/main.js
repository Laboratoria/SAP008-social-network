// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import publish from "./pages/publicar/publicar.js";

const main = document.querySelector("#root");

window.addEventListener("load", () => {
  main.appendChild(publish());
})