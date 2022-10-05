import "./config-firebase.js"
import login from "./pages/login/login.js" 
import cadastro from "./pages/Cadastro/cadastro.js"
import feed from "./pages/feed/feed.js";


const root = document.querySelector('.root');

const init = () => {
  window.addEventListener("hashchange", () => {
    root.innerHTML=""
    switch(window.location.hash){
      case"#login":
        root.appendChild(login());
        break;
      case "#cadastro":
        root.appendChild(cadastro());
        break;
      case"#feed":
        root.appendChild(feed());
        break;

    }
  })
}
window.addEventListener ("load", () => {
  root.appendChild (login());
  init()
})
