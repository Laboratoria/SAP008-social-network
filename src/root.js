import homepage from './pages/homepage/main.js';
// import about from './pages/about/main.js';
import register from './pages/register/main.js';
import login from './pages/login/main.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#homepage':
        main.appendChild(homepage());
        break;
      // case '#about':
      //   main.appendChild(about());
      //   break;
      case '#login':
        main.appendChild(login());
        break;
      case '#register':
        main.appendChild(register());
        break;
      default:
        main.innerHTML = '';
        main.appendChild(homepage());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(homepage());
  init();
});
