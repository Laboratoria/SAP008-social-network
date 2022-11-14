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
  nameUser,
} from '../../lib/firestore.js';
import { errorFire } from '../../lib/errorFirebase.js';

//template do post
const getPostsTemplate = (posts) => {
  const postTemplate = posts.map((post) => {
    const user = current().uid;
    const crud = post.author === user ? `
    <p class='sectionBtn' data-id='${post.id}' >
      <div class='modal'>
        <button class='btnDelete' data-id='${post.id}' data-action='delete-Post'><img class='imgDelete' src='../../img/delete.png' alt='Excluir'></button>
        <button class='btnEditar' data-id='${post.id}' data-action='edit-post'><img class='imgEditar' src='../../img/editar.png' alt='Editar'></button>
      </div>
      <section>
        <div class='modal-confirm'>
          <section class='boxModelConfirm'>
            <p class='textConfirm'> Tem certeza que deseja excluir este post? </p>
            <button class='btn-del' data-id='${post.id}' data-action='yes-Delete'> SIM </button>
            <button class='btn-del' data-action='no-Delete'> NÃO </button>
          </section>
        </div>
      </section>
      <section class='modal-edit'>
        <div class='boxSaveCancel'>
          <button class='btnSalvarCancelar' data-id='${post.id}' data-action='yes-edit'>SALVAR</button>
          <button class='btnSalvarCancelar' data-action='no-edit'>CANCELAR</button>
        </div>
      </section>
    </p>
    ` : '';
    return `
      <section class='sectionPost' data-id='${post.id}'>
        <section class='boxModelPost' data-id='${post.id}'>
          <div class='headerPost'>
            <img src=${post.photo} alt='User' class='fotoUserLogado'>
            <p class='userName'>${post.name}</p>
            <p class='date'>${post.date}</p>
          </div>
          <textarea data-id='${post.id}'class='textPost' disabled='' style='resize: none' rows='3' cols='40'>${post.text}</textarea>
          <section>${crud}</section>
        </section>
        <section class='sectionBtnLikeDeslike'>
          <button class='btnLike' id='btn-like'><img src='../../img/like.png' alt='Like'></button>
        </section>
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
    <img src=${current().photoURL} alt='User' class='fotoUser'>
    <p class='nomeUser'> Olá, ${nameUser()}!</p>
  </section>
  <div class='bodyFeed'>
    <div clas='corpotimeline'>
      <form id='create-Post'>
        <section class='boxModelPost'>
          <form>
            <form class='sectionTextarea'>
              <textarea id='text-publish' style='resize: none' class='inputText' rows='3' cols='40' placeholder='Escreva detalhes sobre a estadia em sua residência...'></textarea>
            </form>
            <p class='sectionBtnPubli'>
              <button type='submit' id='publish-btn' class='publicBtn'>Publicar</button>
            </p>
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

  //btn deslogar
  btnLogOut.addEventListener('click', () => {
    logOutUser().then(() => {
      window.location.hash = '#home';
    });
  });

  const elementPost = sectionFeed.querySelector('#post-feed');
  elementPost.addEventListener('click', (e) => {
    const element = e.target;
    const actionElement = element.dataset.action;
    const id = element.dataset.id;
    const modalDelete = elementPost.querySelector('.modal-confirm');
    const postElement = elementPost.querySelector(`.sectionPost[data-id='${id}']`);
    const modalEdit = elementPost.querySelector('.modal-edit');
    const textEdit = elementPost.querySelector(`.textPost[data-id='${id}']`);
    console.log(textEdit);

    const deletePost = () => {
      removePost(id)
        .then(() => {
          postElement.remove();
          printPost();
        })
        .catch(() => {
          alert('Não foi possivel excluir o post');
        });
    };

    const edit = () => {
      editPost(id, textEdit.value)
        .then(() => {
          textEdit.setAttribute('disabled', '');
        })
        .catch((error) => {
          console.log('caiu no erro do editar', error);
        });
    };

    switch (actionElement) {
      case 'delete-Post':
        modalDelete.style.display = 'flex';
        break;
      case 'yes-Delete':
        modalDelete.style.display = 'none';
        deletePost();
        break;
      case 'no-Delete':
        modalDelete.style.display = 'none';
        break;
      case 'edit-post':
        modalEdit.style.display = 'flex';
        textEdit.removeAttribute('disabled');
        console.log('abrir textarea');
        break;
      case 'yes-edit':
        modalEdit.style.display = 'none';
        edit();
        console.log('salvou o post');
        break;
      case 'no-edit':
        modalEdit.style.display = 'none';
        console.log('cancelar edição post');
        break;
      default:
        console.log('clicou em qualquer outro elemento');
        break;
    }
  });

  printPost();
  return sectionFeed;
};
