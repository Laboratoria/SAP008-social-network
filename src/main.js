// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

// import carregamento from "./pages/carregamento/carregamento.js";
import feed from "./pages/feed/feed.js";
import publish from "./pages/publish/publish.js";

const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";

    switch(window.location.hash){
      case "#feed":
        main.appendChild(feed());
        break;
      case "#publish":
        main.appendChild(publish());
        break;
      case "#profile":
        main.appendChild(profile());
        break;
      default:
        main.appendChild(feed());
    }
  })
};

window.addEventListener("load", () => {
  main.appendChild(publish());
  init();
})