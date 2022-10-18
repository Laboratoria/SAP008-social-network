import {
  signOut, getAllPosts,
} from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const container = document.createElement('div');
  const template = `  
        <div class="container-timeline">
            <div class="container-logo">
                <img class="logo-img" src="./images/logo_02_blue_081E26.png"alt="logo do título">
            </div>
            <nav class="navbar">
                    <ul class="navbar-list"> 
                        <li class="navbar-item-button">
                            <button type="button" id="navbar-button">BOTÃO</button>
                        </li>
                        <li class="navbar-item">
                            <a href='#post'>Publicar Post</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#aboutus'>Sobre Nós</a>
                        </li>
                        
                        <li class="navbar-item" id="logout">
                            <a>Sair</a>
                        </li>
                    </ul>
                </nav>
               <section id="show-timeline"></section>
        </div>     
    `;

  container.innerHTML = template;
  const menu = container.querySelector('#navbar-button');

  const showPosts = async () => {
    const groupArr = await getAllPosts();
    const postsTemplate = groupArr.map((post) => `
            <div class="post">
                <section class="box-post-timeline">
                  <p id="user-name">${post.name}</p>
                  <p id="artist-name">${post.artist}</p>
                  <p id="show-location">${post.location}</p>
                  <p id="show-date">${post.date}</p>
                  <p id="text-post">${post.text}</p>
                  <div class="btns-post-container">
                    <button class="btn-edit"id="btn-edit"type="button">Editar</button>
                    <button class="btn-edit-save" id="btn-edit-save" type="button">Salvar</button>  
                    <button class="btn-delete" id="btn-delete" type="button">Excluir</button>
                  </div>   
                </section>
            </div>
        `).join('');
    container.querySelector('#show-timeline').innerHTML += postsTemplate;
  };

  showPosts();

  menu.addEventListener('click', () => {
    const items = container.querySelectorAll('.navbar-item');
    items.forEach((item) => {
      item.classList.toggle('hide');
    });
    console.log(items);
  });

  container.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
    redirect('');
  });

  // eslint-disable-next-line no-alert
  alert(document.querySelector('#btn-edit'));
  // container.querySelector('#btn-edit').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   container.querySelector('#artist').setAttribute('contenteditable', 'true');
  // const artistEdit = container.querySelector('#artist').value;
  // const locationEdit = container.querySelector('#location').value;
  // const dateEdit = container.querySelector('#date').value;
  // const textEdit = container.querySelector('#text-post').value;
  // editPost(artistEdit, locationEdit, dateEdit, textEdit);
  // });

  return container;
};
