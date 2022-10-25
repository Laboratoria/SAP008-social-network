import login from './login/login.js';
import password from './password/password.js';
import register from './register/register.js';
import timeline from './timeline/timeline.js';
import post from './post/post.js';
import aboutus from './aboutus/aboutus.js';
import { checkLoggedUser } from './firebase/firebase.js';
import { redirect } from './redirect.js';

const main = document.querySelector('#root');

const redirectLogUser = (user) => {
  if (user) {
    console.log(user.email);
    redirect('#timeline');
  } else {
    redirect('');
  }
};

const renderPage = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#password':
      main.appendChild(password());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#timeline':
      main.appendChild(timeline());
      break;
    case '#post':
      main.appendChild(post());
      break;
    case '#aboutus':
      main.appendChild(aboutus());
      break;
    default:
      main.appendChild(login());
  }
}

window.addEventListener('load', () => {
  checkLoggedUser(redirectLogUser);
});

window.addEventListener('hashchange', renderPage);
