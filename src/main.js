import login from './login/app.js';
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
            case '#post':
            main.innerHTML = ' ';
            main.appendChild(post());
            break;

            default: main.appendChild(login());
        }   
    });
} ;        

window.addEventListener("load",  () => {
    main.appendChild(login( ));
    init( );
});