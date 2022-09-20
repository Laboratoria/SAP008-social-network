import "./config-firebase.js"

import login from "../lib/login/app.js" 
const root = document.querySelector(".root")

window.addEventListener ("load", load)
function load (){
  const form = login()
  root.appendChild (form)
}

