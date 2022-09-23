import "./lib/firebase.js";
import login from "./pages/login/index.js"; 
import signup from "./pages/signup/index.js";
const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
        main.innerHTML = '';
        changeHash();
    })

}

const changeHash = () => {
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
    
}

window.addEventListener("load", () => {
    changeHash();
    init();
})


//==========================//
// const btnGmail = document.querySelector('#btn-gmail');

// btnGmail.addEventListener("click", signInGoogle);



