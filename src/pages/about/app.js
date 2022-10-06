export default () => {
  const container = document.createElement('div');
  const getCurrentUser = () => firebase.auth().currentUser;
  const user = getCurrentUser();
  const template = ` 
  <div class="container">
  <div class="logo">
      <a href="#page"> <img id="logo" src="./img/logo.png" alt="logo Vanellen"></a>
      <span id="idUser"> Olá, ${user.displayName}</span>
      <span class="VanellenMore">Vanellen <span
              style="color:rgb(254, 123, 18); font-size:1.5rem; font-weight: bold;">+</span>     
  </div>

  <div class="navbar">
    <header id="header">
       <a href=""> <img id="logout"  src="./img/logout.png" alt="Ícone de logout"></a>
       
    <nav id="nav">
       <ul id="menu">
       <li><a href="#profile" id="profile">Perfil</a></li>
       <li><a href="#aboutUs" id="post"> Sobre</a></li>
       <li><a href="#page"><span class="active"> HOME</span></a></li>
       </ul>
    </nav>
   </header>
  </div>
  <div class="box-about">
  <div class="parag">
      <p>
          A rede social <b id="vanellen">VANELLEN</b> foi construída como parte do bootcamp da Laboratória, que visa desenvolver
          mulheres para o mercado tecnológico. <br/> <br/>
          Com isso, estudamos sobre qual seria o tema da aplicação e os possíveis usuários e então desenvolvemos o
          site “<b id="vanellen">VANELLEN</b>” que tem como objetivo
          ajudar os usuários a escolherem filmes/séries com base na opinião de outras pessoas, a <b id="vanellen">VANELLEN</b> traz
          como
          recurso não apenas a
          opção de compartilhar opinião e ler opinião de outros usuários, mas também curtir ou não curtir tal
          publicação, desta forma,
          sendo mais fácil mensurar se determinado filme/série foi bem aceito pelo público.
      </p>
  </div>
  <div class="aboutDev">
      <h2>Sobre as Desenvolvedoras</h2>
  </div>
  <div class="container-dev">
      <div class="dev-one">
          <div class="img">
          <img id="ellen-img" src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/main/src/img/ellen.png" alt="Ellen Cavalcante">
          </div>
          <div class="text">
          <h3>Ellen Cavalcante</h3> <br/>
          Sou uma pessoa comunicativa, proativa e que ama conhecer coisas novas, acredito que o conhecimento é a ferramenta mais valiosa 
          para o nosso crescimento. E claro, amo filmes e séries.
          <div class="networks">
          <div class="social">
          <a href="https://www.instagram.com/ellenccavalcante/"target="_blank"> <img " id="insta-icon" src="../src/img/Instagram-Icon.png.webp"></a>
          <a href="https://www.linkedin.com/in/ellencavalcantebrito/" target="_blank"><img id="linkedinIcon" src="../src/img/linkedinIcon.png"> </a>
           </div>
         </div> 
      </div>
     </div>

      <div class="dev-two">
          <div class="img">
          <img id="vanessa-img" src="https://github.com/EllenCavalcanteBrito/SAP008-social-network/blob/main/src/img/vanessa.png" alt="Vanessa Bueck">
          </div>
          <div class="text">
          <h3>Vanessa Bueck</h3> </br>
              Mamãe da Helena👶❤️ e amante de bons filmes e séries.<br/>
              Sou organizada, criativa, multitarefas (habilidade adquirida juntamente com a maternidade) e gosto de estar sempre aprendendo algo novo. 
              <div class="networks">
              <div class="social">
              <a href="https://www.instagram.com/vanessabuecker/"target="_blank"> <img " id="insta-icon" src="../src/img/Instagram-Icon.png.webp"></a>
              <a href="https://www.linkedin.com/in/vanessa-bueck/"target="_blank"> <img id="linkedinIcon" src="../src/img/linkedinIcon.png">  </div>
              </div> 
          </div>   
     </div>
</div> 

<div class="wrapper-about" ></div>

  <footer>
  <div class="foot">
      <img src="./img/lab.png" alt="logo Laboratória">
      <div class="developers">
          <p> Developed by:</p> 
          <p>Ellen Cavalcante <spa>&</span> Vanessa Bueck</p>
      </div>
  </div>
</footer>
    `;
  container.innerHTML = template;

  return container;
};
