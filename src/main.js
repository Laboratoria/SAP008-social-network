import "./config-firebase.js"

import login from "./pages/login/login.js" 
//import cadastro from ".\pages\Cadastro\cadastro.js"

//const root= document.getElementById ("root")
const root = document.querySelector('#root');


const init = () => {
  window.addEventListener ('hashchange', () => {
    root.innerHTML=""
    switch (window.location.hash) {
      case '#login':
        root.appendChild(login());
        break;
      case '#cadastro':
        root.appendChild(cadastro());
        break;
    }
  }
  )  
}

window.addEventListener ("load", () => {
  root.appendChild (login());
  init()
})


//colocar do login para o feed
