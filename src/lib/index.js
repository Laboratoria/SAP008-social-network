import {homeFunction} from '../pages/home.js';

const body = document.querySelector("#root");
  window.addEventListener("load", () => {
    init()
  body.appendChild(homeFunction());
  })

const init = () => {
  window.addEventListener("hashchange", () => {
    switch(window.location.hash){
      case " ":
        body.appendChild(homeFunction());
        break;
    }
  })
}