import cadastro from './pages/cadastro/cadastro.js';

const main = document.querySelector('#root');

window.addEventListener('load', () => {
    main.appendChild(cadastro());
});
