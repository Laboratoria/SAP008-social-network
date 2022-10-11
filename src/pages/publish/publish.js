import { publishPost } from "../../lib/index.js";

export default () => {
  const containerPost = document.createElement("div");

  const formPost = `
  <div class="main">
    <div class="new-post">
      <form action="" class="form-post">
        <textarea id="textAreaPost" name="textarea" placeholder="O que deseja compartilhar?"></textarea>
          <div class="icons-and-button">
              <select>
                <option value="typeTitle" disabled selected style="display: none"># Selecionar assunto</option>
                <option value="gravidez">Gravidez</option>
                <option value="puerpério">Puerpério</option>
                <option value="vinculoPaterno">Vínculo Paterno</option>
              </select>
            <div class="btn-cancel-publish">
              <button class="btn-form-cancel" type="submit">Cancelar</button>
              <button id="submitPublish" class="btn-form-publish" type="submit">Publicar</button>
            </div>
          </div>
      </form>
    </div>
  </div> 
  `;

  containerPost.innerHTML = formPost;

  const submitPublish = containerPost.querySelector("#submitPublish");
  
  submitPublish.addEventListener("click", async (e) => {
    let post = containerPost.querySelector("#textAreaPost").value;
    
    await publishPost(post);
  });

  return containerPost;
};
