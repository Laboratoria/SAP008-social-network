import { createPost, getPost, editPost} from './../../lib/firestore.js';
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
        <textarea disabled class="postTxt" id="textPost" data-post="${post.id}">${post.texto}</textarea>     
        <button data-confirm-edit="${post.id}" class="save-btn hide" >Salvar</button>     
        
        <button id="btnEdit" type="button">Editar</button>
        
      </div>

    `).join('');
    container.querySelector("#postContainer").innerHTML = postTemplate;
  }
  showPost();

  const btnPublish = container.querySelector("#btnPublish");
  const txtInputPost = container.querySelector('#post');
  const btnLogout = container.querySelector('#btnLogout');  
  const formFeed = container.querySelector('#formFeed');
  const editBtn = Array.from(container.querySelectorAll('#btnEdit'));
  

  // const textPost = container.querySelector('#textPost');
  // const postId = container.querySelector('#postID');
  
  btnPublish.addEventListener("click", (e) => {
    e.preventDefault();
    const textPost = txtInputPost.value;
    createPost(textPost);    
    showPost();
    formFeed.reset();
  });

  editBtn.addEventListener('click', alert('editar'));
      // const postToBeEdited = e.currentTarget.dataset.idPostEdit;
      // const postTxtarea = container.querySelector(`[data-post="${postToBeEdited}"]`);
      // const saveBtn = container.querySelector(`[data-confirm-edit="${postToBeEdited}"]`);

      // postTxtarea.removeAttribute('disabled');
      // saveBtn.classList.remove('hide');

      // saveBtn.addEventListener('click', async() => {
      //   await editPost(postToBeEdited, postTxtarea.value);
      //   postTxtarea.setAttribute('disabled', '');
      //   saveBtn.classList.add('hide');
      //   showPost();
      // });

    


  // btnEdit.addEventListener("click", alert("ta funcionando!"));
    
    //e.preventDefault();
    // const txtValue = textPost.value;
    // const idValue = postId.value;
    // editPost();
    

  btnLogout.addEventListener("click", () => {
    logout();
  });

  return container;
};