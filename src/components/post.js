import { deletePost, editarPost, curtirPost } from '../lib/firestore.js';

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
          <div class="conjPost" >
            <button type="submit" data-id="${pt.id}" id="botaoEditar" class="botaoEditar">Editar</button>
            <button type="submit" data-id="${pt.id}" id="botaoDeletar" class="botaoDeletar">Deletar</button>
            <div class="like">
            <button type= "button"  class="botaoCurtir" id="botaoCurtir" 
              data-id="${pt.id}" 
              data-like="${pt.like}" 
              data-likecount= ${pt.like.length}>
              <span class='like-icon ${pt.like ? 'liked-red' : ''}'>&#10084;</span>
                <span class='like-count'>${pt.like.length}</span>
            </button>
            </div>
          </div>
      </div>
     </section>
`;
  }).join("");

  container.innerHTML = template;
  const postArea = document.getElementById('posts');
  const postDelete = container.querySelectorAll('.botaoDeletar');
  const postEditar = container.querySelectorAll('.botaoEditar');
  const postCurtir = container.querySelectorAll('.botaoCurtir');

  postDelete.forEach((e) =>{
    e.addEventListener('click',(e) =>{
      const postId = e.target.dataset.id;
      console.log(postId)
      deletePost(postId)
        .then((result) =>{
          document.location.reload(true)
          console.log("delete")
        })
        .catch((error) =>{
          console.log("deu ruim")
        }) 
    })
  });
  postEditar.forEach((e) =>{
    e.addEventListener('click',(e) =>{
      const postId = e.target.dataset.id;
      console.log(postId)
      const textoNovo = prompt("editar seu post")
      editarPost(postId, textoNovo)
        .then((result) =>{
          document.location.reload(true)
          console.log("editar")
        })
        .catch((error) =>{
          console.log("deu ruim")
        }) 
    })
  });
  postCurtir.forEach((e)=>{
    e.addEventListener('click', (e) =>{
      const postId = e.target.dataset.id;
      curtirPost(postId)
            .then((result) =>{
                document.location.reload(true);
            }).catch((error) =>{
                console.log("deu ruim")
            });
    })
  });
  postArea.innerHTML = '';
  postArea.appendChild(container);
};
