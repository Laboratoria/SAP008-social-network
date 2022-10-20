export default () => {
  const container = document.createElement('div');
  const template = `
    <header>
        <ul class="nav">
            <li class="btn-nav">
                <a href="/#Perfil" class="link">Perfil</a>
            </li>
            <li class="btn-nav">
                <a href="/#Momento Cookie" class="link">Momento Cookie</a>
            </li>
            <li class="btn-nav">
                <a href="/#Bem Estar" class="link">Bem Estar</a>
            </li>
        </ul>
    </header>
    <main>
        <div class="posts">
        </div>
        <div class="criar-posts">
            <form>
                <input type="text" placeholder="Digite" class="caixa-de-texto">
                <button type="submit" class="submit">></button>
            </form>
        </div>
    </main>
            `;
  container.innerHTML = template;
  return container;
};
