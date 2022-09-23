import { homeFunction } from '../pages/home.js';

const body = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    // eslint-disable-next-line default-case
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
