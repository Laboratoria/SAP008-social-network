// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';
//myFunction();

import login from "./login/login.js";
import register from "./cadastro/cadastro.js";
import post from "./postagem/postagem.js";

const content = document.querySelector("#root");

window.addEventListener("load",  () => {
    content.appendChild(login());
    content.appendChild(register());
    content.appendChild(post());
    

})

