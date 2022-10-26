import login from "./lib/pages/login/index.js"
import home from "./lib/pages/home/index.js"

const main = document.querySelector('#root');

function init() {
  window.addEventListener('hashchange', () => {
   main.innerHTML= " ";
   switch (window.location.hash){
    case "#login":
     main.appendChild(login());
      break;
    case "#home":
      main.appendChild(home());
       break;
   }
   
    console.log('hashchange ', location.hash)
  })

}

window.addEventListener('load', () => {
  main.appendChild(login())
  init()
})