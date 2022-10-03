//import'./configuration.js';


import load from './pages/load/load.js'
import entrar from './pages/entrar/entrar.js'
import cadastrar from './pages/cadastrar/cadastrar.js'

const main = document.querySelector('#root');

const googleBtn = document.querySelector('#google-login');
const okLoginBtn = document.querySelector('#ok-login-btn');
const signInName = document.querySelector('#name');

//const signInConfirmPassword = document.querySelector('#confirm-password')

const checkBox = document.querySelector('#checkbox');

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
            case '#home':
                main.appendChild(home());
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


