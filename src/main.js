import "./config-firebase.js"

import login from "./pages/login/login.js" 
//import cadastro from ".\pages\Cadastro\cadastro.js"

const root= document.getElementById ("root")

/*const page = () => {
  window.addEventListener ('hashchange', () => {
    switch (window.location.hash) {
      case '#login':
        main.appendChild(login());
        break;
    }
  }
  )  
}*/

window.addEventListener ("load", load)
function load (){
  const form = login()
  root.appendChild (form)
}
