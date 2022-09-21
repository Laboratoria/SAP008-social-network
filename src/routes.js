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
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
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
      main.innerHTML = '';
      main.appendChild(about());
      break;
    case '#profile':
      main.innerHTML = '';
      main.appendChild(profile());
      break;
    case '#movies':
      main.innerHTML = '';
      main.appendChild(movies());
      break;
    case '#series':
      main.innerHTML = '';
      main.appendChild(series());
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
