import login from './pages/login/login.js';
import signup from './pages/signup/signup.js';
const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = '';
        switch (window.location.hash) {
            case '':
                main.appendChild(login());
                break;
            case '#signup':
                main.appendChild(signup());
                break;
            default: main.appendChild(login());

        }
    })

}
window.addEventListener('load', () => {
    window.location.hash = ""
    main.appendChild(login());
    init();
});

