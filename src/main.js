// Este es el punto de entrada de tu aplicacion

import { openMenu, closeMenu } from "./lib/index.js";
import feed from "./pages/feed/feed.js";
import publish from "./pages/publish/publish.js";

const main = document.querySelector("#root");

const init = () => {  
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
};

window.addEventListener("load", () => {
  init();
});

window.addEventListener("hashchange", () => {
  init();
})

const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
  const contentMenu = document.querySelector("#internalContentMenu");

  if (contentMenu.style.display == "block") {
    closeMenu(contentMenu);
  } else {
    openMenu(contentMenu);
  }
});