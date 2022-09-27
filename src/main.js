import "./config-firebase.js"

import login from "./pages/login/login.js" 
import cadastro from "./pages/Cadastro/cadastro.js"

const root= document.getElementById ("root")

const init = () => {
  window.addEventListener("hashchange", () => {
    root.innerHTML=""
    switch(window.location.hash){
      case"#login":
        root.appendChild(login());
        break;
      case "#cadastro":
        root.appendChild(cadastro())
        break;

    }
  })
}
window.addEventListener ("load", () => {
  root.appendChild (login());
  init()
})

// chamando o template de cadastro//
// window.addEventListener ("load", () => {
//   root.appendChild (cadastro());
// })


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

