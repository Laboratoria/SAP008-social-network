export default () => {
  // const name = nameUser();
  const containerFeed = document.createElement('div');

  const templateFeed = `
  <div class='body-post-feed'>
  <div class='main-post-feed'>
    <div class='photo-name-post-feed'>
    <label class="picture" for="picture__input" tabIndex="0">
    <span class="picture__image"></span>
    </label>
      <input type='file' name='picture_input' id='picture_input'>

      <div class='name-post-feed'></div>
    </div> 
    <div class='content-post-feed'></div>
    <div class='select-data-post-feed'>
      <div class='select-post-feed'>#assunto</div>
      <div class='data-post-feed'>data</div>
    </div>
    <div class='icone-like-post-feed'></div>
  </div>

</div>
  `;
  containerFeed.innerHTML = templateFeed;
  return containerFeed;
};
