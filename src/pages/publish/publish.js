import { publishPost } from '../../firebase/firestore.js';

export default () => {
  const containerPost = document.createElement('div');

  const formPost = `
    <div class='body-post'>
      <form class='main-form-post'>
        <textarea id='textAreaPost' name='textarea' placeholder='O que deseja compartilhar?'></textarea>
          <select id='selectSubjects'>
            <option value='typeTitle' disabled selected style='display: none'>Selecionar assunto</option>
            <option value='Gravidez'>Gravidez</option>
            <option value='Puerpério'>Puerpério</option>
            <option value='Vínculo Paterno'>Vínculo Paterno</option>
          </select>
          <div class='btns-form'>
            <button class='btn-form-cancel'>Cancelar</button>
            <button id='submitPublish' class='btn-form-publish'>Publicar</button>
          </div>
      </form>
    </div> 
  `;

  containerPost.innerHTML = formPost;

  const submitPublish = containerPost.querySelector('#submitPublish');

  submitPublish.addEventListener('click', async (e) => {
    e.preventDefault();
    const postText = containerPost.querySelector('#textAreaPost').value;
    if (postText === '') {
      // eslint-disable-next-line no-alert
      alert('Conteúdo do post vazio, preencha antes de enviar!');
    }
    const postSubject = containerPost.querySelector('#selectSubjects').value;

    await publishPost(postText, postSubject);
    window.location.hash = '#feed';
  });

  return containerPost;
};
