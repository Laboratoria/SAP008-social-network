import routes from './routes.js';

const main = document.querySelector('#root');
const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const renderPage = () => {
  const page = validateHash(window.location.hash);
  main.innerHTML = '';
  main.appendChild(routes[page]);
};

window.addEventListener('load', () => {
  renderPage();
  init();
});
