import { logoutUser } from "../../lib/auth.js";

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
      <p id="welcome-user">Olá,Isabela! Esta é a Página Inicial!</p>
    </div>
    <hr class="colorful-line"/>
    <section class="post-container">
      <div class="posts">
        <p>@isabela</p>
        <p class="establishment">Café da Vila</p>
        <p>Rua Dr. Arthur Martins, 243. Sorocaba-
        <p>Atendimento excelente! Garçons simpáticos e dedicados. 
        Coquetéis muito bem preparados e de acordo com o gosto do cliente. 
        A comida é original e o lugar é muito charmoso, com decoração 
        caprichada. Acomoda bem grupo de amigos, casais e famílias.
        </p>
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
  
  logout.addEventListener('click', (e) => {
    e.preventDefault;
    logoutUser();
  });
  
  return container;
}