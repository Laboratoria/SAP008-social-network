/* eslint-disable no-alert */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import { logOutUser } from '../../lib/auth.js';
import {
  createPost,
  postScreen,
  current,
  removePost,
  editPost,
  photoUser,
  nameUser,
} from '../../lib/firestore.js';
import { errorFire } from '../../lib/errorFirebase.js';

//template do post
const getPostsTemplate = (posts) => {
  const postTemplate = posts.map((post) => {
    const user = current().uid;
    const crud = post.author === user ? `
    <p class='sectionBtn' id='${posts.id}'>

      <div class='modal'>
        <button class='btnDelete' id='btn-delete' id='${posts.id}' data-action='delete'><img class='imgDelete' src='../../img/delete.png'></button>
        <button class='btnEditar' id='btn-editar' id='${posts.id}' data-action='editar'><img class='imgEditar' src='../../img/editar.png' alt='Editar'></button>
      </div>
      <section>
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
      </section>
    </p>
    ` : '';
    return `
      <section class='sectionPost'>
        <section class='boxModelPost' id='${posts.id}'>
          <div class='headerPost'>
            <p class='userName'>${post.name}</p>
            <p class='date'>${post.date}</p>
          </div>
          <textarea id='${posts.id} 'class='textPost' id='textPost' disabled='' style='resize: none' rows='3' cols='40'>${post.text}</textarea>
          <section>${crud}</section>
        </section>
        <section class='sectionBtnLikeDeslike'>
          <button class='btnLike' id='btn-like'><img src='../../img/like.png' alt='Like'></button>
        </section>`;
  })
    .join('');
  return postTemplate;
};

export default () => {
  const sectionFeed = document.createElement('div');
  //Template do feed
  sectionFeed.innerHTML = `
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
    <img src=${photoUser()} alt='User' class='fotoUser'>
    <p class='nomeUser'> Olá, ${nameUser()}!</p>
  </section>
  <div class='bodyFeed'>
    <div clas='corpotimeline'>
      <form id='create-Post'>
        <section class='boxModelPost'>
          <form>
            <p class='sectionTextarea'>
              <textarea id='text-publish' style='resize: none' class='inputText' rows='3' cols='40' placeholder='Escreva detalhes sobre a estadia em sua residência...'></textarea>
            </p>
            <p class='sectionBtnPubli'>
              <button type='submit' id='publish-btn' class='publicBtn'>Publicar</button>
            <p>
          </form>
        </section>
        <section class='principalTimeline' id='post-feed'></section>
      </form> 
     <footer class='footer'>
        <p>&copy; 2022 Criado e Desenvolvido por Aghatha, Andresa e Ariane para o Bootcamp SAP008 Laboratoria</p>
      </footer>
    </div>
  </div> `;

  const createform = sectionFeed.querySelector('#create-Post');
  const textAreaPost = sectionFeed.querySelector('#text-publish');
  const btnLogOut = sectionFeed.querySelector('#logOut');

  //btn deslogar
  btnLogOut.addEventListener('click', () => {
    logOutUser().then(() => {
      window.location.hash = '#home';
    });
  });

  const deletePost = (id) => {
    removePost(id)
      .then(() => {
        document.querySelectorAll('.modal-confirm').display = 'none';
      })
      .catch((error) => {
        console.log('caiu no erro do delete', error);
      });
  };

  const edit = (id) => {
    editPost(id)
      .then(() => {
        console.log('abriu a textarea para editar', id);
      })
      .catch((error) => {
        console.log('caiu no erro do editar', error);
      });
  };

  const elementPost = sectionFeed.querySelector('#post-feed');
  elementPost.addEventListener('click', (e) => {
    const element = e.target;
    const actionElement = element.dataset.action;
    const id = element.dataset.id;
    switch (actionElement) {
      case 'delete':
        deletePost(id);
        break;
      case 'editar':
        edit(id);
        break;
      default:
        console.log('clicou em qualquer outra coisa');
        break;
    }
  });

  //printando post na tela
  async function printPost() {
    const posts = await postScreen();
    sectionFeed.querySelector('#post-feed').innerHTML = getPostsTemplate(posts);
  }

  //Criando post
  createform.addEventListener('submit', (e) => {
    e.preventDefault();
    const postText = textAreaPost.value;
    createPost(postText)
      .then(async () => {
        await printPost();
      })
      .catch((error) => {
        const errorCode = errorFire(error.code);
        console.log(errorCode);
      });
  });

  printPost();
  return sectionFeed;
};
