import { getUserUid } from '../../lib/authentication.js';

export function getPostTemplate(doc) {
  const {
    name, text, movie, createdAt, like, deslike,
  } = doc.data();
  const userId = getUserUid();
  return ` <div id="poster-${doc.id}" class="posts">
  <div class="img-movie">
  <img id="testImg" src="./img/loadingimg.png" alt="logo Laboratória">
  </div>

  <div class="info-movies">
      <div class="name-movies">
      <textarea id="name-${doc.id}" style="resize:none" disabled>${movie}</textarea>
      </div>
      <div class="about-movies">
      <textarea id="about-${doc.id}"  style="resize:none" disabled>${text}</textarea>
      </div>
     
      <div class="stars">
      <span id="heart" data-liked=${doc.id} data-user=${doc.data().user_id}>❤️</span>
      <span class="getLike">${like}</span>

      <span id="breakHeart" data-desliked=${doc.id} data-user=${doc.data().user_id}>💔</span>
      <span class="getDeslike">${deslike}</span>

          <p class="username">Enviado por: ${name}</p> <p class="username"> Data de Criação: ${createdAt.toDate().toLocaleDateString()}  ${createdAt.toDate().toTimeString()}</p>
      <div class="buttons-posts" id="editButton-${doc.id}"> 
      ${userId === doc.data().user_id ? `
          <button data-remove=${doc.id} data-user=${doc.data().user_id} class="buttons" id="btn-delete"> Apagar</button>
          <button data-edit=${doc.id} data-user=${doc.data().user_id} class="buttons" id="btn-edit"> Editar</button>
      ` : ''}
      </div>
      <div class="buttons-posts" id="updateButton-${doc.id}" style="display:none"> 
          <button data-update=${doc.id} data-user=${doc.data().user_id} class="buttons" id="btn-edit">Salvar</button>
      </div>
      </div>
  </div>

</div>
`;
}
