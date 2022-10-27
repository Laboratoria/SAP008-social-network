export default () => {
  const containerFooter = document.createElement('div');

  const footer = `
    <footer class='footer-desk-all'>
      <nav class='footer-nav'>
        <ul>
          <li>
            <a href='#feed'>
              <span class='footer-icon'><ion-icon name='home-outline'></ion-icon></span>
              <span class='footer-list'>Início</span>
            </a>
          </li>
          <li>
            <a href='#publish'>
              <span class='footer-icon'><ion-icon name='add-circle-outline'></ion-icon></span>
              <span class='footer-list'>Publicar</span>
            </a>
          </li>
          <li>
            <a href='#profile'>
              <span class='footer-icon'><ion-icon name='person-outline'></ion-icon></span>
              <span class='footer-list'>Perfil</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  `;

  containerFooter.innerHTML = footer;

  return containerFooter;
};
