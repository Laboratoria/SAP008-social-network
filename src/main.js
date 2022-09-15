// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';
//myFunction();

import login from './login/login.js';
import register from './register/register.js';
import post from "./postagem/postagem.js";

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
      switch (window.location.hash) {
            case ' ':
            main.appendChild(login());
            break;
            case '#register':
            main.innerHTML = ' ';
            main.appendChild(register());
            break;

            default: main.appendChild(login());
        }   
    });
} ;        

window.addEventListener("load",  () => {

    content.appendChild(login());
    content.appendChild(register());
    content.appendChild(post());
    



