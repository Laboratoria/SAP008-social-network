export default () => {
  const containerFeed = document.createElement('div');

  const feed = `
    <div class='body-post-feed'>
      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>

      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>
      
      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>
      
      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>

      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>

      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>

      <div class='main-post-feed'>
        <div class='photo-name-post-feed'>
          <div>foto pessoa</div>
          <div class='name-post-feed'>Nome Sobrenome</div>
        </div> 
        <div class='content-post-feed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class='select-data-post-feed'>
          <div class='select-post-feed'>#assunto</div>
          <div class='data-post-feed'>data</div>
        </div>
        <div class='icone-like-post-feed'>icone like</div>
      </div>
    </div>
  `;

  containerFeed.innerHTML = feed;

  return containerFeed;
};
