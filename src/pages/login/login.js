export const loginElements = () => {
  const printElements = document.createElement('div');
  printElements.innerHTML = `
    <div class="logo">
    <p>LOGO</p>
    </div>
    <form class="input-container"> 
    <input class="input-item" type="text" id="input-email"/>
    <input class="input-item" type="text" id="input-password">
    <a href="#register">
    <p>Cadastre-se</p>
    </a>
    <a href="#feed">
    <button class="btn-enter" id="btn-enter">Entrar</button>
    </a>

    </form>
    `;
  return printElements;
};
