import { logOutUser } from '../../lib/auth.js';

export default () => {
  const sectionFeed = document.createElement('div');
  const contentFeed = `
    <div>
      <header>
          <img src="img/header.jpg" class="header" alt="header">
          <img src="img/logo.png" class="loginho" alt="Logo Peq Wanderlust">
          <nav class="navbar">
            <input id="logOut" class="btnSIgnInOut" type="button" value="Sair">
          </nav>
      </header>
      <main>
      </main>
    </div>`;
  sectionFeed.innerHTML = contentFeed;

  const btnLogOut = sectionFeed.querySelector('#logOut');
  btnLogOut.addEventListener('click', logOutUser);
  return sectionFeed;
};
