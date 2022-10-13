import { publishPost } from '../../lib/index.js';

export default () => {
  const containerPost = document.createElement('div');

  const formPost = `
    <div class="body-post">
      <form class="main-post">
        <textarea id="textAreaPost" name="textarea" placeholder="O que deseja compartilhar?"></textarea>
          <select>
            <option value="typeTitle" disabled selected style="display: none">Selecionar assunto</option>
            <option value="gravidez">Gravidez</option>
            <option value="puerpério">Puerpério</option>
            <option value="vinculoPaterno">Vínculo Paterno</option>
          </select>
          <div class="btns-form">
            <button class="btn-form-cancel">Cancelar</button>
            <button id="submitPublish" class="btn-form-publish">Publicar</button>
          </div>
      </form>
    </div> 
  `;

  containerPost.innerHTML = formPost;

  const submitPublish = containerPost.querySelector('#submitPublish');

  submitPublish.addEventListener('click', async (e) => {
    e.preventDefault();
    const post = containerPost.querySelector('#textAreaPost').value;

    await publishPost(post);
  });

  return containerPost;
};
