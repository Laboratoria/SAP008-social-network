export default () => {
  const containerPost = document.createElement('div');

  const formPost = `
  <div class='body-post'>
  <form class='main-form-post'>
    <textarea id='textAreaPost' name='textarea' placeholder='O que deseja compartilhar?'></textarea>
      <select id='options'>
        <option value='typeTitle' disabled selected style='display: none'>Selecionar assunto</option>
        <option value='gravidez'>Gravidez</option>
        <option value='puerpério'>Puerpério</option>
        <option value='vinculoPaterno'>Vínculo Paterno</option>
      </select>
      <span id='saida'></span>
      <div class='btns-form'>
         <button class='btn-form-cancel' id='btn-cancel'>Cancelar</button>
        <button id='submitPublish' class='btn-form-publish'>Publicar</button>
      </div>
  </form>
</div>
  `;

  containerPost.innerHTML = formPost;

  const btnCancel = containerPost.querySelector('#btn-cancel');
  btnCancel.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  // const submitPublish = containerPost.querySelector('#submitPublish');
  // submitPublish.addEventListener('click', async (e) => {
  //   e.preventDefault();
  //   const post = containerPost.querySelector('#textAreaPost').value;
  //   const postValue = post;
  //   const saida = containerPost.querySelector('#saida');
  //   saida.innerHTML = postValue;

  //   await createPost(post);
  // });

  return containerPost;
};
