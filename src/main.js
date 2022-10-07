//import'./configuration.js';


import load from './pages/load/load.js'
import login from './pages/login/login.js'
import signin from './pages/signin/signin.js'
import home from './pages/home/home.js'

const main = document.querySelector('#root');



const init = () => {
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
}




window.addEventListener('load', () => {
    window.addEventListener('hashchange', init)
    main.appendChild(load());
    init();
})


