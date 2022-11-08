import { deletePost } from '../lib/firestore.js';

export default (post) => {
  console.log(post);
  const container = document.createElement('div');
  const template = post.map(pt => {
    return `
    <section id="section-postado" class="section-postado">
      <div class="postado">
        <form class="form-postado">
          <h4>Enviado por: ${pt.name}</h4>
          <p>${pt.text}</p><br>
        </form>
          <div>
            <button type="button" id="botaoEditar" class="botaoEditar">Editar</button>
            <button type="button" data-id="${pt.id}" id="botaoDeletar" class="botaoDeletar">Deletar</button>
          </div>
      </div>
     </section>
`;
  }).join("");

  container.innerHTML = template;
  const postArea = document.getElementById('posts');
  const postDelete = container.querySelectorAll('.botaoDeletar');
  //const postEditar = container.querySelector('#botaoEditar');

  postDelete.forEach((e) =>{
    e.addEventListener('click',(e) =>{
      const postId = e.target.dataset.id;
      console.log(postId)
      deletePost(postId)
        .then((result) =>{
          document.location.reload(true)
        })
        .catch((error) =>{
          console.log("deu ruim")
        }) 
    })
  })
  postArea.innerHTML = '';
  postArea.appendChild(container);
};
