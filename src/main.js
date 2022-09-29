import login from './pages/login/login.js';
import feed from './pages/feed/feed.js';
import cadastre from './pages/cadastre/cadastre.js';


const main = document.querySelector('#root');

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = " ";
        switch (window.location.hash) {
            case " ":
                main.appendChild(login());
                break;
            case "#feed":
                main.appendChild(feed());
                break;
            case "#cadastre":
                main.appendChild(cadastre());
                break;
            default:
                main.appendChild(login());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(login());
    init();
})


