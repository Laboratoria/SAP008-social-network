export const mainFeed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.innerHTML = `
  <form class="feed">
    <input class="input-post"></input>
    <button class="btn-post">Publicar</button>
    <a href="#login">
    <button type="button" class="btn-return">Sair</button>
    </a>
  </form>
  `;
  return sectionFeed;
};
