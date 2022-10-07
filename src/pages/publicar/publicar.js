export default () => {
  const containerPost = document.createElement("div");

  const post = `
  <div class="main">
    <div class="new-post">
      <form action="" class="form-post">
        <textarea name="textarea" placeholder="O que deseja compartilhar?"></textarea>
          <div class="icons-and-button">
            <div class="icon">
              <ul>
                <li>
                  <button class="btn-form-options"><ion-icon name="image-outline"></ion-icon>Adicionar Foto</button>
                  <button class="btn-form-options"><ion-icon name="videocam-outline"></ion-icon>Adicionar Vídeo</button>
                </li>
              </ul>    
              <select>
                <option value="typeTitle" disabled selected style="display: none"># Selecionar assunto</option>
                <option value="gravidez">Gravidez</option>
                <option value="puerpério">Puerpério</option>
                <option value="vinculoPaterno">Vínculo Paterno</option>
              </select>
            </div>
            <button class="btn-form-cancel" type="submit">Cancelar</button>
            <button class="btn-form-publish" type="submit">Publicar</button><br>
          </div>
      </form>
    </div>
  </div> 
  `;

  containerPost.innerHTML = post;

  // containerPost.addEventListener("click", function () {
  //   openMenu(internalContentMenu);
  // })

  return containerPost;
};

// // function openMenu (internalContentMenu) {
// //   const openMenu = document.getElementById("internalContentMenu");
// //   openMenu.style.display = "block";
// }