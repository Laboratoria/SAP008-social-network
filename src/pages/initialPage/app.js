export default () => {
  const container = document.createElement('div');
  const getCurrentUser = () => firebase.auth().currentUser;
  const user = getCurrentUser();
  const template = ` <div class="container">
    <div class="logo">
        <a href="#page"> <img id="logo" src="./img/logo.png" alt="logo Vanellen"></a>
        <span id="idUser"> Olá, ${user.displayName}</span>
        <span class="VanellenMore">Vanellen <span
                style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">+</span>
    </div>
  
    <div class="navbar">
        <a href=""> <img id="logout"  src="./img/logout.png" alt="Ícone de logout"></a>
        <a href="#profile" id="profile" class="active">Perfil</a>
        <a href="#aboutUs" id="post"> Sobre</a>
        <a href="#page"><span style="color:rgb(250, 246, 49); font-weight: bold;">+</span></a>
    </div>
  
    <div class="content">
        <p> <a href="#movies"> <span
            style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">#</span>
        Melhores filmes Vanellen</a></p>
        
        <p> <a id="text" href="#series"> <span
        style="color:rgb(250, 246, 49); font-size:1.5rem; font-weight: bold;">#</span>
    Melhores series Vanellen</a></p>
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
          <input type="text" class="formInput" id="name" name="name" placeholder="Digite seu nome" />
          <input type="text" class="formInput" name="movie" id="movieName" placeholder="Digite o nome do filme ou série." />
          <textarea class="formInput" name="text" id="message" placeholder="Conte-nos o que achou!"></textarea> 
         
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

  const db = firebase.firestore();

  //   const pictureImg = container.querySelector('.picture-image');
  //     const pictureInput = container.querySelector('.picture_input');
  //   const pictureImgText = 'Você tem uma imagem da capa do filme/série? Sobe aí!';
  //   pictureImg.innerHTML = pictureImgText;

  const doLogout = container.querySelector('#logout');
  const formAction = container.querySelector('#myForm');
  const boxPost = container.querySelector('.posts');

  doLogout.addEventListener('click', (e) => {
    const main = document.querySelector('#root');
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      main.innerHTML = ' ';
      window.location.hash = '#login';
    });
  });

  function dateConvert() {
    const data = new Date();
    const day = data.getDate().toString();
    const dayF = (day.length === 1) ? `0${day}` : day;
    const month = (data.getMonth() + 1).toString();
    const monthF = (month.length === 1) ? `0${month}` : month;
    const yearF = data.getFullYear();
    return `${dayF}/${monthF}/${yearF}`;
  }

  function postTemplate() {
    db.collection('test').get()
      .then((snapshot) => {
        const postContainer = snapshot.docs.reduce((acc, doc) => {
          const {
            name, text, movie, createdAt, like, deslike,
          } = doc.data();
          // eslint-disable-next-line no-param-reassign
          acc += ` <div id="poster-${doc.id}" class="posts">
                 <div class="img-movie">
                 <img id="testImg" src="./img/loadingimg.png" alt="logo Laboratória">
                 </div>
         
                 <div class="info-movies">
                     <div class="name-movies">
                         <h2>${movie}</h2>
                     </div>
                     <div class="about-movies">
                         ${text}
                     </div>
                     <div class="stars">
                     <span data-liked=${doc.id} data-user=${doc.data().user_id}>❤️</span>
                     <span class="getLike">${like}</span>
                     <span data-desliked=${doc.id} data-user=${doc.data().user_id}>💔</span>
                     <span class="getDeslike">${deslike}</span>
                         <p class="username">Enviado por: ${name}</p> <p class="username"> Data de Criação: ${dateConvert(createdAt)}</p>
                     <div class="buttons-posts"> 
                         <button data-remove=${doc.id} data-user=${doc.data().user_id} class="buttons" type="button" id="btn-delete"> Apagar</button>
                         <button data-edit=${doc.id} data-user=${doc.data().user_id} class="buttons" type="button" id="btn-edit"> Editar</button>
                         </div>
                     </div>
                 </div>
               
             </div>
             `;
          return acc;
        }, '');

        container.querySelector('.posts').innerHTML += postContainer;
      });
  }
  postTemplate();

  const userId = firebase.auth().currentUser.uid;

  formAction.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('test').add({
      name: event.target.name.value,
      user_id: userId,
      movie: event.target.movie.value,
      createdAt: new Date(),
      text: event.target.text.value,
      like: 0,
      deslike: 0,
    })
      .then(() => {
        container.querySelector('#message').value = '';
        container.querySelector('#name').value = '';
        container.querySelector('#movieName').value = '';
        const postsCollection = db.collection('test');
        container.querySelector('.posts').innerHTML = 'Carregando...';
        postsCollection.get().then(() => {
          container.querySelector('.posts').innerHTML = '';
          postTemplate();
        });
      });

    postTemplate();
  });

  // eslint-disable-next-line consistent-return
  boxPost.addEventListener('click', (e) => {
    const removeButtonId = e.target.dataset.remove;
    const userCurrent = e.target.dataset.user;

    if (removeButtonId) {
      if (userId !== userCurrent) {
        alert('Não é possivel deletar post de outros usuarios');
        return false;
      }
      // eslint-disable-next-line no-alert
      const resultado = window.confirm('Você deseja apagar essa postagem?');
      if (resultado === true) {
        db.collection('test').doc(removeButtonId).delete()
          .then(() => {
            const posts = document.querySelector(`#poster-${removeButtonId}`);
            posts.remove();
          });
      }
    }
  });

  // eslint-disable-next-line consistent-return
  boxPost.addEventListener('click', (e) => {
    const editButton = e.target.dataset.edit;
    const userCurrent = e.target.dataset.user;

    if (editButton) {
      if (userId !== userCurrent) {
        alert('Não é possivel editar post de outros usuarios');
        return false;
      }
      const resultado = window.confirm('Você deseja editar essa postagem?');

      if (resultado === true) {
        const updateMovie = prompt('Digite o nome do filme/série');
        const updateText = prompt('Digite seu spoiler');

        boxPost.querySelector(`#poster-${editButton}`).getElementsByTagName('h2')[0].innerHTML = updateMovie;
        boxPost.querySelector(`#poster-${editButton}`).getElementsByClassName('about-movies')[0].innerHTML = updateText;
        db.collection('test').doc(editButton)
          .update({
            movie: updateMovie,
            text: updateText,
          })
          .then(() => {
          })
          .catch(() => {
            alert('Algo deu errado. Por favor, tente novamente.');
          });
      }
    }
  });

  boxPost.addEventListener('click', (e) => {
    const buttonLike = e.target.dataset.liked;
    const increment = firebase.firestore.FieldValue.increment(1);

    boxPost.querySelector(`#poster-${buttonLike}`).getElementsByClassName('getLike')[0].innerHTML = increment;
    db.collection('test').doc(buttonLike)
      .update({
        like: increment,
      })
      .then(() => {
        window.location.reload();
      });
  });

  boxPost.addEventListener('click', (e) => {
    const buttonDeslike = e.target.dataset.desliked;
    const increment = firebase.firestore.FieldValue.increment(1);

    boxPost.querySelector(`#poster-${buttonDeslike}`).getElementsByClassName('getDeslike')[0].innerHTML = increment;
    db.collection('test').doc(buttonDeslike)
      .update({
        deslike: increment,
      })
      .then(() => {
        window.reload = () => window.location.hash('.posts');
      });
  });

  return container;
};
