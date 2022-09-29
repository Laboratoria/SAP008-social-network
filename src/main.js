//import './configuration.js'
import {addUser} from './lib/index.js';

import load from './pages/load/load.js'
import entrar from './pages/entrar/entrar.js'
import cadastrar from './pages/cadastrar/cadastrar.js'

const main = document.querySelector('#root');

const googleBtn = document.querySelector('#google-login');
const okLoginBtn = document.querySelector('#ok-login-btn');
const signInName = document.querySelector('#name');
const signInEmail = document.querySelector('#email').value;
const signInPassword = document.querySelector('#password').value;
//const signInConfirmPassword = document.querySelector('#confirm-password')
const okSigninBtn = document.querySelector('#ok-form-btn');
const checkBox = document.querySelector('#checkbox');

const navegar = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case '':
                main.appendChild(load());
                break;
            case '#entrar':
                main.appendChild(entrar());
                break;
            case '#cadastre-se':
                main.appendChild(cadastrar());
                break;
            default:
                main.appendChild(load());
        }
    })
}

window.addEventListener('load', () => {
    main.appendChild(load());
    navegar();
})

okSigninBtn.addEventListener('click', () => {
    const cadastro = addUser(signInEmail, signInPassword)
    return console.log(cadastro)

})