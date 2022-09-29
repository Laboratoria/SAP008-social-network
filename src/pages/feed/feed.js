export default () => {
  const sectionFeed = document.createElement('div');
  const contentFeed = `
    <div>
      <header>
          <img src="img/header.jpg" class="header" alt="header">
          <img src="img/logo.png" class="loginho" alt="Logo Peq Wanderlust">
          <nav class="navbar">
              <a class="navbar-brand">
              <img src="img/hamburguer.png" class="hamburguer">
              </a>
              </nav>
      </header>
      <main>
      </main>
    </div>`;
  sectionFeed.innerHTML = contentFeed;
  return sectionFeed;
};