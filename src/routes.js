import Login from './Pages/Login/login.js';
import Signup from './Pages/Signup/signup.js';
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

