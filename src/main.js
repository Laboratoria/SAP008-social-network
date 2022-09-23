//import './firebase-config.js'
//import { myFunction } from './lib/index.js';


//myFunction(); 

import load from './pages/load/load.js'
import entrar from './pages/entrar/entrar.js'
import cadastrar from './pages/cadastrar/cadastrar.js'

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
            case '#cadastre-se':
                main.appendChild(cadastrar());
                break;
            default:
                main.appendChild(load());
        }
    })
}

window.addEventListener('load', () => {
    main.appendChild(load());
    navegar();
})