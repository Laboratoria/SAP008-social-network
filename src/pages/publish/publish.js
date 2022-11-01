import { publishPost, editPost } from '../../firebase/firestore.js';

export default () => {
  const containerPost = document.createElement('div');

  const formPost = `
    <div class='body-post'>
      <form class='main-form-post'>
        <textarea id='textAreaPost' name='textarea' placeholder='O que deseja compartilhar?'></textarea>
          <select id='selectSubjects'>
            <option value='typeTitle' disabled selected style='display: none'>Selecionar assunto</option>
            <option value='Adoção'>Adoção</option>
            <option value='Adaptação Escolar'>Adaptação Escolar</option>
            <option value='Depressão pós-parto'>Depressão pós-parto</option>
            <option value='Divórcio'>Divórcio</option>
            <option value='Educação'>Educação</option>
            <option value='Gravidez'>Gravidez</option>
            <option value='Luto'>Luto</option>
            <option value='Maternidade solo'>Maternidade solo</option>
            <option value='Nascimento prematuro'>Nascimento prematuro</option>
            <option value='Paternidade solo'>Paternidade solo</option>
            <option value='Pré adolescentes e adolescentes'>Pré adolescentes e adolescentes</option>
            <option value='Primeira, segunda e terceira infância'>Primeira, segunda e terceira infância</option>
            <option value='Puerpério'>Puerpério</option>
            <option value='Tentante'>Tentante</option>
            <option value='Vínculo paterno'>Vínculo paterno</option>
          </select>
          <div class='btns-form'>
            <button id='btnCancel' class='btn-form-cancel'>Cancelar</button>
            <button id='submitPublish' class='btn-form-publish'>Publicar</button>
          </div>
      </form>
    </div> 
  `;

  containerPost.innerHTML = formPost;

  if (localStorage.getItem('editStatus') === 'true') {
    containerPost.querySelector('#textAreaPost').value = localStorage.getItem('postText');
    containerPost.querySelector('#selectSubjects').value = localStorage.getItem('postSubject');
  }

  const submitPublish = containerPost.querySelector('#submitPublish');

  submitPublish.addEventListener('click', async (e) => {
    e.preventDefault();
    const postText = containerPost.querySelector('#textAreaPost').value;
    const postSubject = containerPost.querySelector('#selectSubjects').value;

    if (postText === '' || postSubject === 'typeTitle') {
      // eslint-disable-next-line no-alert
      alert('Conteúdo do post vazio, preencha antes de enviar!');
    } else {
      if (localStorage.getItem('editStatus') === 'false') {
        await publishPost(postText, postSubject);
      } else {
        const postId = localStorage.getItem('postId');
        await editPost(postId, postText, postSubject);
      }

      window.location.hash = '#feed';
    }
  });

  const cancelPublish = containerPost.querySelector('#btnCancel');

  cancelPublish.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#feed';
  });

  return containerPost;
};
