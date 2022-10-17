import { createPost, getPost, upDatePost } from './../../lib/firestore.js';
import { logout } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('wrapper-feed');
  const template = `      
    <header class="header-feed">
      <img src="./img/picsfem.png" class="logo-feed">
      <a href="#login"><button id="btnLogout" type="button">Logout</button></a>
    </header>

    <form id="formFeed" class="form-feed">
      <label class="label-input-publish" for="text">
        <input id="post" class="input-publish" name="text" type="text">
      </label>
      <div class="btns-container">
        <button class="btn-publish" type="button">Imagem</button> 
        <button class="btn-publish" type="button">Tema</button>    
        <button class="btn-publish" id="btnPublish" type="button">Publicar</button>
      </div>      
    </form>

    <section id="postContainer" class="post-container">
    </section>
    
    <nav class="nav-footer"></nav>

    `;

  container.innerHTML = template;

  const showPost = async () => {
    const arrayPost = await getPost();
    const postTemplate = arrayPost.map((post) => `
      <div class="post">
        <p class="postTxt name" id="user-name">${post.name}</p>
        <textarea class="postTxt" data-post="${post.id}" id="text-post" disabled>${post.texto}</textarea>
        <button class="btn-edit" data-id-post-edit="${post.id}" id="btnEdit" type="button">Editar</button>
        <button class="btn-save hide" data-save="${post.id}"id="btnSave" type="button">Salvar</button>   
      </div>

    `).join('');
    container.querySelector("#postContainer").innerHTML = postTemplate;

    const btnsEdit = Array.from(container.querySelectorAll('.btn-edit'));

    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const postToBeEdited = e.currentTarget.dataset.idPostEdit;
        const txtPost = container.querySelector(`[data-post="${postToBeEdited}"]`);
        const dataSave = container.querySelector(`[data-save="${postToBeEdited}"]`);
        const btnSave = container.querySelector('.btn-save');
        
        console.log(txtPost.value);

        txtPost.removeAttribute('disabled');
        btnSave.classList.remove('hide');

        dataSave.addEventListener("click", async () => {
          await upDatePost(postToBeEdited, txtPost.value);
          txtPost.setAttribute('disabled', '');
          btnSave.classList.add('hide');
        });
      });
    });

  }
  showPost();

  const btnPublish = container.querySelector("#btnPublish");
  const txtInputPost = container.querySelector('#post');
  const btnLogout = container.querySelector('#btnLogout');
  const formFeed = container.querySelector('#formFeed');

  btnPublish.addEventListener("click", (e) => {
    e.preventDefault();
    const textPost = txtInputPost.value;
    createPost(textPost);
    showPost();
    formFeed.reset();
  });

  btnLogout.addEventListener("click", () => {
    logout();
  });

  return container;
};