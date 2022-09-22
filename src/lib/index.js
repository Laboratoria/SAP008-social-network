import templateLogin from './pages/home.js';

const body = document.querySelector("#root");
  window.addEventListener("load", () => {
  body.appendChild(templateLogin());
  })

const init = () => {
  window.addEventListener("hashchange", () => {
    switch(window.location.hash){
      case " ":
        MediaDeviceInfo.appendChild(home());
        break;
    }
  })
}