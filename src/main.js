import "./lib/firebase.js";
import login from "./pages/login/index.js"; 
import signup from "./pages/signup/index.js";
const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = '';
        switch (window.location.hash) {
            case '':
                main.appendChild(login());
                break;
            case '#login':
                main.appendChild(login());
                break;
            case '#signup':
                main.appendChild(signup());
                break;
            default: main.appendChild(login());
        }
    })

}

// const changeHash = () => {
    
// }

window.addEventListener("load", (e) => {
    e.preventDefault();
    window.location.hash = ""
    main.appendChild(login());
    init();
})

//1. refresh: quando regarregar a página continue na página de #signup
//2. clique no botão criar conta no signup ele execute a funcao createacount e redirecione pra página login

// const reload = () => {
//     if (window.location.hash = ""){
//         return main.appendChild(login());
//     }
//     else if (window.location.hash = "#signup") {
//         return main.appendChild(signup());
//     }
//     else { 
//         return console.log('error')
//     }
// }

//==========================//
// import { createAccount, loginEmailPassword, logout, signInGoogle } from "./config-firebase.js";
// const txtEmail = document.querySelector('#txtEmail');
// const txtPassword = document.querySelector('#txtPassword');
// const btnLogin = document.querySelector('#btnLogin');
// const btnSignup = document.querySelector("#btnSignup");
// const btnLogout = document.querySelector('#btnLogout');
// const formContainer = document.querySelector('#form-container');
// const loginForm = document.querySelector('#login-form');
// //const txtError = document.querySelector('#txt-error');
// const btnGmail = document.querySelector('#btn-gmail');

// //evento de criar conta
// btnSignup.addEventListener("click", () => {
//     const email = txtEmail.value;
//     const password = txtPassword.value;
//     createAccount(email, password);
// });

// //criação do formulário de criar conta
// const formSignup = () => {
//     const signUp = `
//     <form>
//         <label for="name">Nome:
//             <input type="text" required>
//         </label>
//         <label for="email">Email:
//             <input type="email" id="txtEmail" required>
//         </label>
//         <label for="password">Senha:
//             <input type="password" id="txtPassword" minlength="8" required>
//         </label>
//         <input type="submit" value="CRIAR CONTA">
//     </form>
//     `
//     return signUp;
// };

// //esconde formulario de login quando aperta no criar conta
// btnSignup.addEventListener("click", () => {
//     loginForm.style.display = 'none';
//     formContainer.innerHTML = formSignup();
// });

// btnLogin.addEventListener("click", () => {
//     const email = txtEmail.value;
//     const password = txtPassword.value;
//     loginEmailPassword(email, password);
// });

// btnGmail.addEventListener("click", signInGoogle);

// btnLogout.addEventListener("click", logout);

