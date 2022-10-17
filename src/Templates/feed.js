export default () => {
  const container = document.createElement('div');

  const template = `
        <header>
            <ul>
                <li>
                    <a href="/#Perfil">Perfil</a>
                </li>
                <li>
                    <a href="/#Momento Cookie">Momento Cookie</a>
                </li>
                <li>
                    <a href="/#Bem Estar">Bem Estar</a>
                </li>
            </ul>
        </header>
            `;
  container.innerHTML = template;
  return container;
};
