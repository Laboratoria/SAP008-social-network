import { logout } from '../../firebase/auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
	<figure>
	  <img class='logo-timeline' src='./imagens/logo-mobile.png' alt='logo'>
	</figure>
	 <header>
	    <button id='logout-btn'><img class='logout-icon' src='./imagens/logout.svg' alt='signout-icon'></button>
	 <header>
    <main id='create-post' class='page-home'>
        <div id='icon-div'>
            <img src='' alt='' class='' class='user-icon-post'>
        </div>
        <textarea placeholder='Compartilhe sua vivência...' id='post-publish' cols='60' rows='10' style='resize:none' maxlength='200'></textarea>
         <button id='add-image'><img class='add-photo' src='./imagens/icon-photo.svg' alt='add-image'></button>
        <button id='publish-btn'><img class='btn-post' src='./imagens/btn-post.svg' alt='add-image'></button>
    	<section id='post-timeline'></section>
	</main>
  `;

  container.innerHTML = template;

  const btnLogout = container.querySelector('#logout-btn');

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    window.location.hash = '#login';
  });

  return container;
};
