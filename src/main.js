//import'./configuration.js';


import load from './pages/load/load.js'
import login from './pages/login/login.js'
import signin from './pages/signin/signin.js'
import home from './pages/home/home.js'

const main = document.querySelector('#root');

const googleBtn = document.querySelector('#google-login');
const okLoginBtn = document.querySelector('#ok-login-btn');


//const signInConfirmPassword = document.querySelector('#confirm-password')

const checkBox = document.querySelector('#checkbox');

const navigate = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case '':
                main.appendChild(load());
                break;
            case '#entrar':
                main.appendChild(login());
                break;
            case '#cadastre-se':
                main.appendChild(signin());
                break;
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
    navigate();
})


