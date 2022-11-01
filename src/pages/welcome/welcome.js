export default () => {
  const containerWelcome = document.createElement('div');
  const welcome = ` 
    <main class = 'container-welcome'>
      <figure>
        <img class='logo' src="imagens/logoINspire.png" alt="Logo palavra Inspire com as letras I e N maiúsculas e o restante minísculas" />
      </figure>
  
      <p class = 'message-welcome'>
        Olá, você está se conectando em um rede cheia 
        de empatia e motivação!
        Separe um momento para você e se conecte com pessoas que buscam melhorar 
        sua qualidade de vida, saúde mental e ter um dia mais leve!
      </p>
      <button id="signin-button" class="signin-button btn">Seguir para o feed
      </button>        
    </main>
    
    `;
  containerWelcome.innerHTML = welcome;

  const btnSigninFeed = containerWelcome.querySelector('#signin-button');
  btnSigninFeed.addEventListener('click', () => {
    window.location.hash = '#feed';
  });

  return containerWelcome;
};
