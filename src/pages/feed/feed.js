const mainFeed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.innerHTML = `
  <form class="feed">
    <input class="input-post"></input>
    <button class="btn-post">Publicar</button>
  </form>
  `;
  return sectionFeed;
};

export { mainFeed };
