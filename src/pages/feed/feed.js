import { creatPost, getPost } from '../../lib/firestore.js';

export default () => {
  const containerFeed = document.createElement('div');
  const template = `
    <main class="container-feed">
      <figure class="logo-tittle">
        <img id="one-logo-coração" src="./imagens/image-2.png">
        <p class="tittle-logotype">INspire</p>
      </figure>

      <form>
        <input class ='campo-escrever' type = 'textarea'/>
        <button class = 'btn-publicar' type = 'button'>Publicar</button>
      </form>
  
    </main>




     
  
  `;
  containerFeed.innerHTML = template;

  const text = containerFeed.querySelector('.campo-escrever');
  const btnPublicar = containerFeed.querySelector('.btn-publicar');

  btnPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    const textPublish = text.value;
    creatPost(textPublish);
    getPost();
  });
  return containerFeed;
};
