export default () => {
  const containerHeader = document.createElement('div');

  const header = `
    <div class='header-body'>
      <div class='header-header'>
        <nav class='header-menu-logo'>
          <div id='menu'>
            <ion-icon class='menu-icon' name='menu-outline'></ion-icon>
          </div>
          <div id='bodyMenu' class='desk-all'>
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
        <img class='green-logo' src='img/logo_teste.png'>
      </div>
    </div>
    `;

  containerHeader.innerHTML = header;

  // const menu = containerHeader.querySelector('#menu');

  // menu.addEventListener('click', () => {
  //   const contentMenu = containerHeader.querySelector('#bodyMenu');

  //   if (contentMenu.style.display === 'block') {
  //     contentMenu.style.display = 'none';
  //   } else {
  //     contentMenu.style.display = 'block';
  //   }
  // });

  return containerHeader;
};
