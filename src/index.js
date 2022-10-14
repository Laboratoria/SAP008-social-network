import routes from './routes.js';

const main = document.querySelector('#root');

const validateHash = (hash) => (hash === '' ? 'login' : hash.replace('#', ''));

const renderPage = () => {
  const pageName = validateHash(window.location.hash);
  main.innerHTML = '';
  const page = routes[pageName]('');
  main.appendChild(page);
};

const init = () => window.addEventListener('hashchange', renderPage);

window.addEventListener('load', () => {
  renderPage('');
  init('');
});
