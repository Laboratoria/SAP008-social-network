export default () => {
  const containerFeed = document.createElement('div');

  const feed = `
    <div>
      teste
    </div> 
  `;

  containerFeed.innerHTML = feed;

  return containerFeed;
};
