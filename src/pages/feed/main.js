export default () => {
  const feedContainer = document.createElement('div');
  const template = `
    <div>banana 🍌</div>
  `;
  feedContainer.innerHTML = template;
  return feedContainer;
};
