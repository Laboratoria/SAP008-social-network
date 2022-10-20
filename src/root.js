import homepage from './pages/homepage/main.js';
import about from './pages/about/main.js';
import register from './pages/register/main.js';
import login from './pages/login/main.js';
import feed from './pages/feed/main.js';
import resetPassword from './pages/resetPassword/main.js';
import { userStateChanged } from './lib/firebase-auth.js';
import './lib/configuration.js';

const main = document.querySelector('#root');

function redirectAuthenticatedUser(user) {
  if (user) {
    window.location.hash = '#feed';
  } else {
    window.location.hash = '#homepage';
  }
}

function verify() {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#homepage':
      main.appendChild(homepage());
      break;
    case '#about':
      main.appendChild(about());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#resetPassword':
      main.appendChild(resetPassword());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    default:
      main.appendChild(homepage());
  }
}

window.addEventListener('hashchange', verify);

window.addEventListener('load', () => {
  verify();
  userStateChanged(redirectAuthenticatedUser);
});
