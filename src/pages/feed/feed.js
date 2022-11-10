export const mainFeed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.innerHTML = `
  <form class="feed">
    <label class="feed-post" for="feed-post">Publique aqui:</label>
    <input class="input-post" type="text" id="feed-post"/>
    <button class="btn-post" type="button">Publicar</button>
    <a href="#login">
    <button class="btn-return" type="button">Sair</button>
    </a>
  </form>
  `;
  return sectionFeed;
};
