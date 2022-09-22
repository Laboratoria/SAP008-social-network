import login from './login/login.js';
import password from "./password/password.js";
import register from './register/register.js';
import timeline from "./timeline/timeline.js";
import post from "./post/post.js";
import profile from "./profile/profile.js";
import about from "./about/about.js";


const main = document.querySelector('#root');

const init = () => {
    window.addEventListener('hashchange', () => {
      switch (window.location.hash) {
            case ' ':
            main.appendChild(login());
            break;
            case '#password':
            main.innerHTML = ' ';
            main.appendChild(password());
            break;
            case '#register':
            main.innerHTML = ' ';
            main.appendChild(register());
            break;
            case '#timeline':
            main.innerHTML = ' ';
            main.appendChild(timeline());
            break;
            case '#post':
            main.innerHTML = ' ';
            main.appendChild(post());
            break;
            case '#profile':
            main.innerHTML = ' ';
            main.appendChild(profile());
            break;
            case '#about':
            main.innerHTML = ' ';
            main.appendChild(about());
            break;
            default: 
            main.innerHTML = ' ';
            main.appendChild(login());
        }   
    });
} ;        

window.addEventListener("load",  () => {
    main.appendChild(login( ));
    init( );
});