export default () => {
  const container = document.createElement('div');
  const template = `
        <main id="initial-page" class="initial-page">
              <video autoplay loop muted plays-inline class="background-video-mobile">
                <source src="img/VideoBGMobileTablet.mp4" type="video/mp4">
              </video>
            <h1 class="logo-initial-page"><img class="img-logo" src="img/Rebu.svg" alt="Rebu Logo"></h1>
            <aside class="video-aside">
              <video autoplay loop muted plays-inline class="background-video-desktop">
                <source src="img/videoBGDesktop.mp4" type="video/mp4">
              </video>
            </aside>

            
            <div class="vertical-line-text-box">
              <h2 class="connections-headline">FAÇA CONEXÕES REAIS</h2>
              <p class="homepage-text">Encontre mulheres que compartilhem <br>
              os mesmos interesses e vivências.</p>
            </div>
         

            <nav class="button-initial-page">
                <a href="#login"><button id="btn-login" class="btn-initial-page">ENTRAR</button></a>
                <a href="#register"><button id="btn-register" class="btn-initial-page">CADASTRAR</button></a>
            </nav>
        </main>
        <footer class="footer footer-tablet">
            <nav class="nav-footer">
                <ul class="list-footer">
                  <li><a class="about" href="#about">SOBRE</a></li>
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
