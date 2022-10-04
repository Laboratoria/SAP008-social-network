import { getDisplayName, getPhotoUser } from '../../lib/authentication.js';

export default () => {
  const container = document.createElement('div');
  const userName = getDisplayName();
  const userPhoto = getPhotoUser();
  const template = `    <div class="container">
  <div class="logo">
      <a href="#page"> <img id="logo" src="./img/logo.png" alt="logo Vanellen"></a>
      <span id="idUser"> Olá, ${userName}</span>
      <span class="VanellenMore">Vanellen <span
              style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">+</span>
             
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

    <div class="profile-data">
    <center>
        <img id="img_redonda" src="${userPhoto || './img/gif-avatar-vanellen.gif'}" alt="A foto do usuário">
        <h3> Olá, ${userName} </h3>
        </br>
        <h2> Senta que lá vem spoiler 🎞️ </h2>
    </div>

<div class="wrapper"> </div>

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
