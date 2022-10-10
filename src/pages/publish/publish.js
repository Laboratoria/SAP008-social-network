import { publishPost } from "../../lib/index.js";

export default () => {
  const containerPost = document.createElement("div");

  const post = `
  <div class="main">
    <div class="new-post">
      <form action="" class="form-post">
        <textarea id="textAreaPost" name="textarea" placeholder="O que deseja compartilhar?"></textarea>
          <div class="icons-and-button">
            <div class="icon">
              <ul>
                <li>
                  <button class="btn-form-options"><ion-icon name="image-outline"></ion-icon>Adicionar Foto</button>
                  <button class="btn-form-options"><ion-icon name="videocam-outline"></ion-icon>Adicionar Video</button>
                </li>
              </ul>    
              <select>
                <option value="typeTitle" disabled selected style="display: none"># Selecionar assunto</option>
                <option value="gravidez">Gravidez</option>
                <option value="puerpério">Puerpério</option>
                <option value="vinculoPaterno">Vínculo Paterno</option>
              </select>
            </div>
            <div class="btn-cancel-publish">
              <button class="btn-form-cancel" type="submit">Cancelar</button>
              <button id="submitPublish" class="btn-form-publish" type="submit">Publicar</button>
            </div>
          </div>
      </form>
    </div>
  </div> 
  `;

  containerPost.innerHTML = post;

  // const submitPublish = document.getElementById("submitPublish");

  // submitPublish.addEventListener("click", (e) => {
  //   let post = document.getElementById("textAreaPost").value;

  //   publishPost(post);
  // });

  return containerPost;
};
