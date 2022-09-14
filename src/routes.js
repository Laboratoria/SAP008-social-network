import Login from './Pages/Login/login.js';

const main = document.querySelector('#root');

window.addEventListener('load', () => {
    main.appendChild(Login());
});