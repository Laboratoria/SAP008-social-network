import { logoutUser, auth } from "../../lib/auth.js";

export default () => {
  //fazer if usuario não estiver logado "currentUser" redirecionar tela login
  const container = document.createElement('div');
  const template = `<section>
    <nav id="mobile-top-icons" class="icons-container">
      <img id="menu-icon" class="icons-size" src="https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/menu-icon.svg"/>
      <img id="home-icon" class="icons-size" src="https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/home-icon.svg"/>
      <img id="heart-icon" class="icons-size" src="https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/0442f1be51cd71480d7dcb6acbaf76779ee5450e/external/svg_icons_social_network/heart-icon.svg"/>
    </nav>
    <hr class="colorful-line"/>
    <div>
      <p id="welcome-user">Olá, ${auth.currentUser.displayName}! Esta é a Página Inicial!</p>
    </div>
    <hr class="colorful-line"/>
    <section class="post-container">
      <div class="posts">
        <p>@isabela</p>
        <p id="local" class="edit-local establishment" contenteditable="false">Café da Vila </p>
        <p id="adress" class="edit-adress" contenteditable="false">Rua Dr. Arthur Martins, 243. Sorocaba-SP </p>
        <p id="review" class="edit-review" contenteditable="false">Atendimento excelente! Garçons simpáticos e dedicados. 
        Coquetéis muito bem preparados e de acordo com o gosto do cliente. 
        A comida é original e o lugar é muito charmoso, com decoração 
        caprichada. Acomoda bem grupo de amigos, casais e famílias.
        </p>
        <button id="cancel">Cancelar</button>
        <button id="ok">OK</button>
      </div> 
    
    <div id="modal-delete" class="hide">
      <p>Tem certeza que quer excluir este post?</p>
      <button id="yes-delete">Sim</button>
      <button id="no-close">Não</button>
    </div>
    
    <aside class="infos-container">
      <div>
        <div id="user-image"><p class="name-letter">I</p></div>
        <p id="grade">4.7</p>
        <div class="icons-post">
          <img id="heart-icon" class="icons-post-size" src="./external/svg/heart-icon.svg"/>
          <img id="pencil-icon" class="icons-post-size" src="./external/svg/pencil-icon.svg"/>
          <img id="trash-icon" class="icons-post-size" src="./external/svg/trash-icon.svg"/>
        </div>
      </div>
    </aside>
  </section>  
  <hr class="colorful-line"/>
  <nav id="mobile-footer-icons" class="icons-container">
    <img id="plus-icon" class="icons-size" src="./external/svg/plus-icon.svg"/>
    <img id="plate-icon" class="icons-size" src="./external/svg/heart-icon.svg"/>
    <img id="up-icon" class="icons-size" src="./external/svg/chevron-up-icon.svg"/>
  </nav>
  <button id="logout">Sair</button>
</section>`;

  container.innerHTML = template;

  const logout = container.querySelector('#logout');
  const toTheTop = container.querySelector("#up-icon");
  const newPost = container.querySelector('#plus-icon');
  const editPost = container.querySelector("#pencil-icon");
  const local = container.querySelector(".edit-local");
  const adress = container.querySelector(".edit-adress");
  const review = container.querySelector(".edit-review");
  const cancel = container.querySelector("#cancel");
  const ok = container.querySelector("#ok");
  const modalDelete = container.querySelector('#modal-delete');
  const warnDelete = container.querySelector('#trash-icon');
  const closeModalDelete = container.querySelector('#no-close');


  cancel.hidden = true;
  ok.hidden = true;


  logout.addEventListener('click', (e) => {
    e.preventDefault;
    logoutUser();
  });

  toTheTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  newPost.addEventListener('click', () => {
    window.location.hash = '#new_post';
  })

  function show(elemento) {
    elemento.focus();
  }

  editPost.addEventListener('click', () => {
    cancel.hidden = false;
    ok.hidden = false;
    review.contentEditable = true;
    show(review)
    local.contentEditable = true;
    show(local)
    adress.contentEditable = true;
    show(adress)
  })

  cancel.addEventListener('click', () => {
    cancel.hidden = true;
    ok.hidden = true;
    review.contentEditable = false;
    local.contentEditable = false;
    adress.contentEditable = false;
  })



  warnDelete.addEventListener('click', () => {
    modalDelete.classList.toggle('hide')
  })

  closeModalDelete.addEventListener('click', () => {
    modalDelete.classList.toggle('hide')
  })


  return container;
}

















