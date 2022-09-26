import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js';
const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = '';
        switch (window.location.hash) {
            case '':
                main.appendChild(Login());
                break;
            case '#Signup':
                main.appendChild(Signup());
                break;
            default: main.appendChild(Login());

        }
    })

}
window.addEventListener('load', () => {
    window.location.hash = ""
    main.appendChild(Login());
    init();
});

