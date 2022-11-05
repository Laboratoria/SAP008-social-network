/* eslint-disable no-alert */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import { logOutUser } from '../../lib/auth.js';
import {
  createPost,
  postScreen,
  auth,
  //editPost,
  //removePost,
} from '../../lib/firestore.js';
import { errorFire } from '../../lib/errorFirebase.js';
//template da tela do feed completo
function getContentFeedTemplate() {
  return `
    <div>
    <header class='headerFeed'>
      <img src='../../img/logoTranp.png' class='loginhoFeed' alt='Logo Peq Wanderlust'>
    </header>
    <nav class='navBar'>
      <ul class='sectionSobreEperfil'>
        <a class='btnSIgnInOut' id='logOut'><img src='../../img/btnSair.png' alt='seta para sair'</a>
        <a href='#sobre' class='sobrepageFeed'>SOBRE</a>
        <a href='#perfil' class='perfilFeed'>PERFIL</a>
      </ul>
    </nav>
    <section class='msgBoasvindas'>
    <img src='${auth.currentUser.photoURL}' alt='User' class='fotoUser'>
    <p class='nomeUser'> Olá, ${auth.currentUser.displayName}!</p>
    </section>
    <div clas='corpotimeline'>
      <form id='create-Post'>
        <section class='boxModelPost'>
          <form>
            <textarea id='text-publish' style='resize: none' class='inputText' rows='3' cols='40' placeholder='Escreva detalhes sobre a estadia em sua residência...'></textarea>
            <button type='submit' id='publish-btn' class='publicBtn'>Publicar</button>
          </form>
        </section>
        <section class='principalTimeline' id='post-feed'></section>
      </form> 
      <footer class='footer'>
        <p>&copy; 2022 Criado e Desenvolvido por Aghatha, Andresa e Ariane para o Bootcamp SAP008 Laboratoria</p>
      </footer>
    </div>  
  </div>`;
}
//template do post
function getPostsTemplate(posts) {
  return posts.map((post) => {
    const postTemplate = `
      <section>
        <section class='boxModelPost' id='${posts.id}'>
          <div class='headerPost'>
            <p class='userName'>${post.name}</p>
            <p class='date'>${post.date}</p>
          </div>
          <textarea id='${posts.id} 'class='textPost' id='textPost' disabled="" style='resize: none' rows='3' cols='40'>${post.text}</textarea>
          <p class='sectionBtn'>
            <div class='modal'>
              <button class="btnDelete" id='btn-delete' data-post-id='${posts.id}'><img class='imgDelete' src='../../img/delete.png'></button>
              <button class="btnEditar" id='btn-editar'data=""><img class='imgEditar' src='../../img/editar.png' alt='Editar'></button>
            </div>
            
            <div class='modal-confirm'>
              <p> Tem certeza que deja excluir este post? </p>
              <button class='btn-del' data-sim='true'> SIM </button>
              <button class='btn-del' data-nao='true'> NÃO </button>
            </div>
            <div class='modal-edit'>
              <p> Confirma edição do post? </p>
              <button class='btn-del' data-salvar='true'>SALVAR</button>
              <button class='btn-del' data-cancelar='true'>CANCELAR</button>
            </div>
          </p>
        </section>
        <section class='sectionBtnLikeDeslike'>
          <button class='btnLike' id='btn-like'><img src='../../img/like.png' alt='Like'></button>
        </section>
    `; return postTemplate;
  }).join('');
}
async function printPost(sectionFeed) {
  const posts = await postScreen();
  sectionFeed.querySelector('#post-feed').innerHTML = getPostsTemplate(posts);
  const deletePost = sectionFeed.querySelector('#btn-delete');
  const btnEditPost = sectionFeed.querySelector('#btn-editar');
  //btn deletar
  deletePost.addEventListener('click', (e) => {
    const postId = e.currentTarget.dataset.postId;
    document.querySelector(`#${postId} .modal-confirm`).style.display = 'flex';
  });
  //btn editar
  btnEditPost.addEventListener('click', (e) => {
    const postId = e.currentTarget.dataset.postId;
    document.querySelector(`#${postId} .modal-edit`).style.display = 'flex';
  });
  //const postId = e.currentTarget.dataset.postId;
}
//btn like e deslike
export default () => {
  const sectionFeed = document.createElement('div');
  sectionFeed.innerHTML = getContentFeedTemplate();
  const createform = sectionFeed.querySelector('#create-Post');
  const textAreaPost = sectionFeed.querySelector('#text-publish');
  const btnLogOut = sectionFeed.querySelector('#logOut');
  //btn deslogar
  btnLogOut.addEventListener('click', () => {
    logOutUser().then(() => {
      window.location.hash = '#home';
    });
  });
  //Criando post
  createform.addEventListener('submit', (e) => {
    e.preventDefault();
    const postText = textAreaPost.value;
    createPost(postText)
      .then(async () => {
        await printPost(sectionFeed);
      })
      .catch((error) => {
        const errorCode = errorFire(error.code);
        console.log(errorCode);
      });
  });
  printPost(sectionFeed);
  return sectionFeed;
};
