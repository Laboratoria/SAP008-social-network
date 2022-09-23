//import './firebase-config.js'
//import { myFunction } from './lib/index.js';


//myFunction(); 

import load from './pages/load/load.js'
import entrar from './pages/entrar/entrar.js'

const main = document.querySelector('#root');

const navegar = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case '':
                main.appendChild(load());
                break;
            case '#entrar':
                main.appendChild(entrar());
                break;

        }
    })
}

window.addEventListener('load', () => {
    main.appendChild(load());
    navegar();
})