export const feedFunction = () => {
  const containerFeed = document.createElement('section');

  const templateFeed = `
  <section class='feed-page'>
  <div class='form-feed'>
    <div class="img-user"></div>
    <div class='inputs-feed'>
      <input class='question-feed input-space' type=text placeholder= 'Qual trecho você gostaria de compartilhar hoje?' />
      <input type='text' class='author input-space' placeholder='Autora' />
      <input type='text' class='book input-space' placeholder='Livro'/>
    </div>
    <button type='submit' class='button-publish btnFeed'>Publicar 
    </button>
  </div>
  <div class='logout'>
    <button type='submit' class='button-logout btnFeed'>Sair
    </button>
    </div>
  <div class='posts-feed'>
  
  
  
  
  
  
  
  
  
  `

  containerFeed.innerHTML = templateFeed;
  return containerFeed;
}