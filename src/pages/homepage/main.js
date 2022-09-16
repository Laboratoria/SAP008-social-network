export default () => {
  const container = document.createElement('div');
  const template = `
        <main id="initial-page" class="initial-page">
            <video autoplay loop muted plays-inline class="background-video">
              <source src="img/VideoBG.mp4" type="video/mp4">
            </video>
            <h1 class="logo-initial-page"><img class="img-logo" src="img/Rebu.png" alt="Rebu Logo"></h1>
            <nav class="button-initial-page">
                <a href="/#login"><button id="btn-login" class="btn-initial-page">ENTRAR</button></a>
                <a href="/#register"><button id="btn-register" class="btn-initial-page">CADASTRAR</button></a>
            </nav>
        </main>
        <footer class="footer">
            <nav>
                <ul class="list-footer">
                  <li><a class="about" href="/#sobre">SOBRE</a></li>
                  <li class="developed-by">DESENVOLVIDO POR
                    <a href="https://github.com/clasimplicio">CLARISSA</a>
                    , 
                    <a href="https://github.com/fbasoni">FABIANY</a>
                    E 
                    <a href="https://github.com/dodojoy">JOYCE</a>
                  </li>
                </ul>
            </nav>
        </footer>
    `;
  container.innerHTML = template;
  return container;
};
