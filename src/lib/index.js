import { homeFunction } from '../pages/home.js';
import { signUpFunction } from '../pages/signup.js';
import { feedFunction } from '../pages/feed.js';

const body = document.querySelector('#root');

const pageChanges = () => {
    body.innerHTML = '';
    switch (window.location.hash) {
      case '':
      body.appendChild(homeFunction());
    break;
      case '#home':
      body.appendChild(homeFunction());
    break;
      case '#signup':
      body.appendChild(signUpFunction());
    break;
    case '#feed':
      body.appendChild(feedFunction());
    break;
    };
};
const init = () => {
  window.addEventListener('hashchange', () => {
    pageChanges()
  })};

  window.addEventListener('load', () => {
    init();
    pageChanges()
  });