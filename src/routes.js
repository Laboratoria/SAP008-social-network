import login from './login/app.js';
import register from './register/app.js';
import initialPage from './initialPage/app.js';
import profile from './profile/app.js';

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
        // eslint-disable-next-line default-case
        switch (window.location.hash) {
            case '':
                main.appendChild(login());
                break;
            case '#page':
                main.innerHTML = '';
                main.appendChild(initialPage());
                break;
            case '#profile':
                main.innerHTML = '';
                main.appendChild(profile());
                break;
            case '#register':
                main.innerHTML = '';
                main.appendChild(register());
                break;
            default: main.appendChild(login());
        }
    });
};

window.addEventListener('load', () => {
    main.appendChild(login());
    init();
});
