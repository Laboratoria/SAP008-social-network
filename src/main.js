// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';
//myFunction();

import login from "./login/login.js";

const content = document.querySelector("#root");

window.addEventListener("load",  () => {
    content.appendChild(login());
    

})