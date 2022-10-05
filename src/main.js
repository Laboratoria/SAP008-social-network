import "./config-firebase.js"
import login from "./pages/login/login.js" 
import feed from "./pages/feed/feed.js"
import register from "./pages/register/register.js";


const root = document.querySelector('.root');

const init = () => {
  window.addEventListener("hashchange", () => {
    root.innerHTML=""
    switch(window.location.hash){
      case"#login":
        root.appendChild(login());
        break;
      case "#register":
        root.appendChild(register());
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
