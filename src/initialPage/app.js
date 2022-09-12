export default () => {
  const container = document.createElement('div');
  const getCurrentUser = () => firebase.auth().currentUser;
  const user = getCurrentUser();
  const template = `    <div class="container">
  <div class="logo">
      <img id="logo" src="./img/logo.png" alt="logo Vanellen">
      <span id="idUser"> Olá, ${user.displayName}</span>
      <span class="VanellenMore">Vanellen <span
              style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">+</span>
             
  </div>

  <div class="navbar">
      <a href="./login/index.html"> <img id="logout"  src="./img/logout.png" alt="Ícone de logout"></a>
      <a href="#profile" id="profile" class="active">Perfil</a>
      <a href="#aboutUs" id="post"> Sobre</a>
  </div>

  <div class="content">
      <p> <a href="#best-vanellen-movies"> <span
          style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">#</span>
      Melhores filmes de acordo com os usuários</a></p>
      
      <a id="text" href="#best-user-movies"> <span
              style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">#</span>
          Melhores séries de acordo com os usuários</a>
  </div>
</div>

<div class="posts">
  </div>
</div>

<div class="wrapper"> </div>

<div class="containerPosts">
<div class="text_share">
<p><b>Compartilhe aqui o que você achou daquele filme ou série que você <b>curtiu muito assistir</b>.🥰<br/> Ou que foi uma
    <b>total perda de tempo</b>...😞🤦‍♂️</b></p>
</div>

<h2 id="fill-form"> Preencha o formulário abaixo! Estamos ansiosos pela sua opinião. 🤩</h2>
<form action="" id="myForm">
    <div id="postx">
        <input type="text" class="formInput" id="name" placeholder="Digite seu nome" />
        <input type="text" class="formInput" id="movieName" placeholder="Digite o nome do filme ou série." />
        <textarea cols='60' rows='8' class="formInput" id="message" placeholder="Conte-nos o que achou!"> </textarea> 
       
        <div class="formposts">
        <label class="picture" tabIndex="0">
        <input type="file" accept="image/*" class="picture_input"/>
        <span class="picture-image"></span>
        </label>
    </div>
    <button class="buttons "type="submit" id="buttonSend"> Enviar</button>
</form>
</div>
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

  const pictureImg = container.querySelector('.picture-image');
  const pictureInput = container.querySelector('.picture_input');
  const pictureImgText = 'Você tem uma imagem da capa do filme/série? Sobe aí!';
  pictureImg.innerHTML = pictureImgText;
  const doLogout = container.querySelector('#logout');
  const buttonSend = container.querySelector('#buttonSend');
  const formAction = container.querySelector('#myForm');
  const btnDelete = container.querySelector('#btn-delete');

  doLogout.addEventListener('click', (e) => {
    const main = document.querySelector('#root');
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      main.innerHTML = ' ';
      window.location.hash = '#login';
    });
  });

  async function addPost(post) {
    const postTemplate = ` 
        <div class="posts">
        <div class="img-movie">
        <img id="testImg" src="./img/loadingimg.png" alt="logo Laboratória">
        </div>

        <div class="info-movies">
            <div class="name-movies">
                <h2>${post.data().movie}</h2>
            </div>
            <div class="about-movies">
                ${post.data().text}
            </div>
            <div class="stars">
            ❤️
                <p class="username">Enviado por: ${post.data().name}</p> <p class="username"> Data de Criação: ${post.createdAt}</p>
            <div class="buttons-posts"> 
                <button class="buttons" type="button" id="btn-delete"> Apagar</button>
                <button class="buttons" type="button" id="btn-edit"> Editar</button>
                </div>
            </div>
        </div>
    </div>
    `;
    container.querySelector('.posts').innerHTML += postTemplate;
  }

  buttonSend.addEventListener('click', addPost);

  function loadPosts() {
    const postsCollection = firebase.firestore().collection('test');
    container.querySelector('.posts').innerHTML = 'Carregando...';
    postsCollection.get().then((snap) => {
      container.querySelector('.posts').innerHTML = '';
      snap.forEach((post) => {
        addPost(post);
      });
    });
  }
  loadPosts();

  formAction.addEventListener('submit', (event) => {
    event.preventDefault();
    const textpost = container.querySelector('#message').value;
    const username = container.querySelector('#name').value;
    const movieName = container.querySelector('#movieName').value;
    const post = {
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      id: 'userId',
      name: username,
      text: textpost,
      movie: movieName,
      likes: 0,
      comments: [],
    };
    const postsCollection = firebase.firestore().collection('test');
    postsCollection.add(post).then(() => {
      container.querySelector('#message').value = '';
      container.querySelector('#name').value = '';
      container.querySelector('#movieName').value = '';
      loadPosts();
    });
  });

  function deletePost(id) {
    const postsCollection = firebase.firestore().collection('test');
    postsCollection.doc(id).delete().then(() => {
      loadPosts();
    });
  }

  if (btnDelete) {
    btnDelete.addEventListener('click', deletePost, false);
  }

  // eslint-disable-next-line func-names
  pictureInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadedImage = reader.result;
      document.querySelector('.img-movie').style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

  return container;
};
