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

window.addEventListener('load', () => {
  checkLoggedUser(redirectLogUser);
  main.appendChild(timeline());
});

window.addEventListener('hashchange', () => {
  switch (window.location.hash) {
    case '':
      main.appendChild(login());
      break;
    case '#password':
      main.innerHTML = '';
      main.appendChild(password());
      break;
    case '#register':
      main.innerHTML = '';
      main.appendChild(register());
      break;
    case '#timeline':
      main.innerHTML = '';
      main.appendChild(timeline());
      break;
    case '#post':
      main.innerHTML = '';
      main.appendChild(post());
      break;
    case '#aboutus':
      main.innerHTML = '';
      main.appendChild(aboutus());
      break;
    default:
      main.innerHTML = '';
      main.appendChild(login());
  }
});
