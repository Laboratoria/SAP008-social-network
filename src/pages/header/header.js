export default () => {
  const containerHeader = document.createElement('div');

  const header = `
    <div class='header-body'>
      <div class='header-main'>
        <nav class='header-menu-and-logo'>
          <div id='headerMenu'>
            <img class='header-menu' src='img/header_menu.png'>
          </div>
          <div id='bodyMenu' class='header-body-menu'>
            <ul>
              <li>
                <a class='side-icon-list' href='#guidelines'>
                  <span class='side-internal-icon'><ion-icon name='people-outline'></ion-icon></span>
                  <span class='side-internal-list'>Diretrizes</span>
                </a>
              </li>
              <li>
                <a class='side-icon-list' href='#termsOfUse'>
                  <span class='side-internal-icon'><ion-icon name='checkbox-outline'></ion-icon></span>
                  <span class='side-internal-list'>Termos de uso</span>
                </a>
              </li>
              <li>
                <a class='side-icon-list' href='#logout'>
                  <span class='side-internal-icon'><ion-icon name='log-out-outline'></ion-icon></span>
                  <span class='side-internal-list'>Sair</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <img class='header-logo' src='img/logo_green.png'>
      </div>
    </div>
  `;

  containerHeader.innerHTML = header;

  const menu = containerHeader.querySelector('#headerMenu');

  menu.addEventListener('click', () => {
    const contentMenu = containerHeader.querySelector('#bodyMenu');

    if (contentMenu.style.display === 'block') {
      contentMenu.style.display = 'none';
    } else {
      contentMenu.style.display = 'block';
    }
  });

  return containerHeader;
};
