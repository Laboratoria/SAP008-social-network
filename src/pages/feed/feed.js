import { logout } from '../../firebase/auth.js';
import { redirect } from '../../routes.js';

export default () => {
  const container = document.createElement('div');

  const template = `
	<figure>
	  <img class='logo-timeline' src='./imagens/logo-mobile.png' alt='logo'>
	</figure>
	 <header>
	    <button id='logout-btn' class='logout-btn'><img class='logout-icon' src='./imagens/logout.svg' alt='signout-icon'></button>

      <h2 class='display-name'>Olá, </h2>
	 </header>
    <main id='create-post' class='container-main'>
 
      <section class='container-post'>
        <figure>
          <img class='img-profile' id='img-profile' />
        </figure>

        <textarea class='post-publish' id='post-publish' placeholder='Compartilhe sua vivência...' cols='60' rows='10' style='resize:none'></textarea>
      </section>
        
      <div class='linha-um'></div>
      <section class='container-btn'>
        <button class='btn-add-img' id='add-image'><img class='btn-add-img-icon' src='./imagens/icon-photo.svg' alt='add-image'></button>

        <button class='publish-btn' id='publish-btn'><img class='publish-post-icon' src='./imagens/btn-post.svg' alt='add-image'></button>
      </section>
      <div class='linha-dois'></div>

    	<section id='post-timeline'></section>
	</main>
  `;

  container.innerHTML = template;

  const btnLogout = container.querySelector('#logout-btn');
  const displayName = container.querySelector('.display-name');

  btnLogout.addEventListener('click', async () => {
    await logout();
    redirect('#login');
  });
  
  return container;
};
