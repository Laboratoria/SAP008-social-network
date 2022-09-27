import { homeFunction } from '../pages/home.js';
import { signUpFunction } from '../pages/signup.js';

const body = document.querySelector('#root');
const buttonSignUp = document.getElementById('buttonSignUp');

const init = () => {
  window.addEventListener('hashchange', () => { console.log(window.location.hash)
    switch (window.location.hash) {
      case '':
    body.appendChild(homeFunction());
    break;
      }
    });
  };

window.addEventListener('load', () => {
  init();
  body.appendChild(homeFunction());
});

window.addEventListener('click', signUpFunction)
body.appendChild(signUpFunction());





