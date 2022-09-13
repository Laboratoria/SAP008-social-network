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
              style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">+</span>
             
  </div>

  <div class="navbar">
      <a href=""> <img id="logout"  src="./img/logout.png" alt="Ícone de logout"></a>
      <a href="#profile" id="profile" class="active">Perfil</a>
      <a href="#aboutUs">Sobre</a>
  </div>
</div>

  <h1>Em construção. 🚧 🏗️</h1>

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
