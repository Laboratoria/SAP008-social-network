import Login from './Pages/Login/login.js';
import Signup from './Pages/Signup/signup.js';

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => console.log(window.location.hash) )
}

window.addEventListener('load', () => {
    main.appendChild(Login());
    init();
});
window.addEventListener('load', () => {
    main.appendChild(Signup());
    init();
});