export default () => {
  const container = document.createElement('div');
  const template = `    <div class="container">
  <div class="logo">
      <img id="logo" src="./img/logo.png" alt="logo Vanellen">
      <span id="testEmail"> E-mail </span>
      <span class="VanellenMore">Vanellen <span
              style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">+</span>
             
  </div>

  <div class="navbar">
      <a href="./login/index.html"> <img id="logout"  src="./img/logout.png" alt="Ícone de logout"></a>
      <a href="#profile" id="profile" class="active">Perfil</a>
      <a href="#newpost">Novo post</a>
  </div>

  <div class="content">
      <p> <a href="#best-vanellen-movies"> <span
          style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">#</span>
      Melhores filmes de acordo com os usuários</a></p>
      
      <a id="text" href="#best-user-movies"> <span
              style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">#</span>
          Melhores filmes de acordo com os usuários</a>
  </div>
</div>

<div class="posts">
  <div class="img-movie">
      <img id="img-movie" src="./img/image 7.png" alt="Capa do filme Minha mãe é uma peça 3">
  </div>

  <div class="info-movies">
      <div class="name-movies">
          <h1 id="bigOne">Minha mãe é uma peça 3</h1>
      </div>
      <div class="about-movies">
          Dona Hermínia descobre que Marcelina está grávida e que Juliano vai casar. Sofrendo ao ver que os filhos
          estão formando suas próprias famílias, ela tenta se alegrar focando nos preparativos para o casamento.
      </div>
      
  <div class="stars">
      <img id="stars-icon" src="./img/image 4.png" alt="Imagem de uma estrela">
  </div>
  </div>
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

  const profile = container.querySelector('#profile');

  profile.addEventListener('click', () => {
    window.location.href = '#profile';
  });

  const doLogout = container.querySelector('#logout');

  doLogout.addEventListener('click', (e) => {
    const main = document.querySelector('#root');
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      main.innerHTML = ' ';
      window.location.hash = '#login';
    });
  });

  return container;
};
