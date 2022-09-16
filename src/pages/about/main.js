export default () => {
  const aboutContainer = document.createElement('div');
  const template = `
    <header id="about-header">
      <a href="/#homepage" class="return-btn"><img class="return-btn" src="img/returnBtn.png" alt="back arrow"></a>
    </header>
    <main id="about-page">
      <h2 id="about-title">SOBRE <span class="about-rebu-title">REBU</span></h2>
      <p class="about-paragraph"><span class="about-rebu">REBU</span> é uma rede social de interação & comunidade feita para mulheres lésbicas.</p> 
      <p class="about-paragraph">Proporcionamos um espaço inclusivo e seguro para nossas usuárias serem suas versões mais autênticas, encontrarem novas amizades ou relacionamentos a partir de interesses em comum, se conectarem.</p> 
      <p class="about-paragraph">Não importa onde você more, <span class="about-rebu">REBU</span> te prorporciona se conectar com outras mulheres e criar sua própria rede.</p>
    </main>
  `;
  aboutContainer.innerHTML = template;

  const returnBtn = aboutContainer.querySelector('.return-btn');
  returnBtn.addEventListener('click', () => window.location.replace('#homepage'));

  return aboutContainer;
};
