
import { logoutUser, auth, getPosts } from "../../lib/auth.js";

export default () => {
  //fazer if usuario não estiver logado "currentUser" redirecionar tela login
  const container = document.createElement('div');
  const template =
    `<section>
    <nav id="mobile-top-icons" class="icons-container">
      <img id="menu-icon" class="icons-size" src="./external/svg/menu-icon.svg"/>
      <img id="home-icon" class="icons-size" src="./external/svg/home-icon.svg"/>
      <img id="heart-icon" class="icons-size" src="./external/svg/heart-icon.svg"/>
    </nav>
    <hr class="colorful-line"/>
    <div>
      <p id="welcome-user">Olá, ${auth.currentUser.displayName}! Esta é a Página Inicial.</p>
    </div>
    <hr class="colorful-line"/>
    <section class="post-container"></section>  
    <hr class="colorful-line"/>
    <nav id="mobile-footer-icons" class="icons-container">
      <img id="plus-icon" class="icons-size" src="./external/svg/plus-icon.svg"/>
      <img id="plate-icon" class="icons-size" src="./external/svg/heart-icon.svg"/>
      <img id="up-icon" class="icons-size" src="./external/svg/chevron-up-icon.svg"/>
    </nav>
    <button id="logout">Sair</button>
    </section>`;
    
    container.innerHTML = template;
    
    const firstLetter = (element) => {
      const getFirst = element[0]
      return getFirst
    }

  const printPosts = async () => {
    const all = await getPosts();
    const postsTemplate = all.map((Posts) =>
      `<div class="posts">
        <div id="text">
          <p>@ ${Posts.name}</p>
          <p id="local" class="edit-local establishment" contenteditable="false">${Posts.nomeRest}</p>
          <p id="adress" class="edit-adress" contenteditable="false">${Posts.endRest}</p>
          <p id="review" class="edit-review" contenteditable="false">${Posts.critica}</p>
        </div>

        <button id="cancel">Cancelar</button>
        <button id="ok">OK</button>
    
        <div id="modal-delete" class="hide">
          <p>Tem certeza que deseja excluir este post?</p>
          <button id="yes-delete">Sim</button>
          <button id="no-close">Não</button>
        </div>
    
        <aside class="infos-container">
          <div>
            <div id="user-image"><p class="name-letter">${firstLetter(Posts.name)}</p></div>
            <p id="grade">4.7</p>
            <div class="icons-post">
              <img id="heart-icon" class="icons-post-size" src="./external/svg/heart-icon.svg"/>
              <img id="pencil-icon" class="icons-post-size" src="./external/svg/pencil-icon.svg"/>
              <img id="trash-icon" class="icons-post-size" src="./external/svg/trash-icon.svg"/>
            </div>
          </div>
        </aside>
      </div>
      <hr class="colorful-line"/>`
    ).join('');
    container.querySelector('.post-container').innerHTML += postsTemplate;

    const editPost = container.querySelector("#pencil-icon");
    const local = container.querySelector(".edit-local");
    const adress = container.querySelector(".edit-adress");
    const review = container.querySelector(".edit-review");
    const modalDelete = container.querySelector('#modal-delete');
    const warnDelete = container.querySelector('#trash-icon');
    const closeModalDelete = container.querySelector('#no-close');
    const cancel = container.querySelector("#cancel");
    const ok = container.querySelector("#ok");

    cancel.hidden = true;
    ok.hidden = true;

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
  };

  printPosts()

  const logout = container.querySelector('#logout');
  const toTheTop = container.querySelector("#up-icon");
  const newPost = container.querySelector('#plus-icon');

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

  return container;
}
























