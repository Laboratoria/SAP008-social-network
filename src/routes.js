import login from './pages/login/app.js';
import register from './pages/register/app.js';
import initialPage from './pages/initialPage/app.js';
import profile from './pages/profile/app.js';
import about from './pages/about/app.js';
import movies from './pages/movies/movies.js';
import series from './pages/series/app.js';

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case ' ':
      main.appendChild(login());
      break;
    case '#pageRegister':
      main.innerHTML = '';
      main.appendChild(register());
      break;
    case '#page':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          main.appendChild(initialPage());
        } else {
          window.location.hash = '#login';
        }
      });
      break;
    case '#aboutUs':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          main.appendChild(about());
        } else {
          window.location.hash = '#login';
        }
      });
      break;
    case '#profile':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          main.appendChild(profile());
        } else {
          window.location.hash = '#login';
        }
      });
      break;
    case '#movies':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          main.appendChild(movies());
        } else {
          window.location.hash = '#login';
        }
      });
      break;
    case '#series':
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          main.appendChild(series());
        } else {
          window.location.hash = '#login';
        }
      });
      break;

    default: main.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  init();
});

window.addEventListener('load', () => {
  init();
});
