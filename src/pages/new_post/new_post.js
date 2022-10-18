import { create, auth } from '../../lib/auth.js';

// eslint-disable-next-line consistent-return
export default () => {
  if (auth.currentUser === null) {
    window.location.hash = '#entrar';
  } else {
    const container = document.createElement('div');
    const template = `<section class="container">
        <p>Olá, ${auth.currentUser.displayName}! Qual sua nova crítica?</p>
        <form class="evaluation-inputs">
            <input id="local" type="text" placeholder="Nome do restaurante" />

            <input id="adress" type="text" placeholder="Endereço do restaurante" />

            <textarea id="review" placeholder="Escreva sua crítica"></textarea>
            
            <a href="/#home" class="cancel-btn-new-post">Cancelar</a>
            <a href="/#home" class="post-btn-new-post">Publicar</a>
        </form>
    </section>`;
    container.innerHTML = template;

    const local = container.querySelector('#local');
    const adress = container.querySelector('#adress');
    const review = container.querySelector('#review');
    const publishBtn = container.querySelector('.post-btn-new-post');

    publishBtn.addEventListener('click', () => {
      create(local.value, adress.value, review.value);
    });
    return container;
  }
};
