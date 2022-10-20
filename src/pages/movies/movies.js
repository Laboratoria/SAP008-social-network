/* eslint-disable camelcase */
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
        <header id="header">
           <a href=""> <img id="logout"  src="./img/logout.png" alt="Ícone de logout"></a>
  
        <nav id="nav">
           <ul id="menu">
           <li><a href="#profile" id="profile" class="active">Perfil</a></li>
           <li><a href="#aboutUs" id="post"> Sobre</a></li>
           <li><a href="#page"><span class="active"> HOME</span></a></li>
           </ul>
        </nav>
       </header>
      </div>
  
       <div class="movies">
       <h1>Abaixo vai uma lista das 20 melhores séries, selecionadas pela Vanellen, excluviamente pra você! 😎🍿</h1>
       </div>
       <div class="wrapper" /div>
  
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

  const API_KEY = 'api_key=89c6cfc4ef506ee4df5166ec020a99f2';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = `${BASE_URL}/movie/top_rated?language=pt-BR&${API_KEY}`;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const main = container.querySelector('.movies');

  function showMovies(data) {
    data.forEach((movie) => {
      const {
        title, poster_path, release_date, overview,
      } = movie;
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = ` 
      <div class="box-movies">
          <div class="posts-movies">
              <div class="img-movie">
              <img id="movieImg" src="${IMG_URL + poster_path}" alt="logo Laboratória">
              </div>
        
              <div class="info-movies">
                  <div class="title-movies">
                      <h2>${title}</h2>
                  </div>
                  <div class="overview-movies">
                      ${overview}
                      <p><b>Data de criação:</b>  ${release_date}</p>
                  </div>
                  <div class="likes">
                  <p id="star">⭐⭐⭐⭐⭐</p> 
                  </div>
              </div>
          </div>   
      </div>
        `;
      main.appendChild(movieElement);
    });
  }

  function getMovies(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      showMovies(data.results);
    });
  }
  getMovies(API_URL);

  return container;
};
