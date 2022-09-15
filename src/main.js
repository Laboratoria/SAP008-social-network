

import login from './login/login.js';
import register from './register/register.js';

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
    main.appendChild(login( ));
    init( );
});


