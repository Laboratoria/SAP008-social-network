export const loginElements = () => {
  const printElements = document.createElement('div');
  printElements.innerHTML = `
    <div class="logo">
    <p>LOGO</p>
    </div>
    <form class="input-container"> 
    <input class="input-item" type="text" id="input-email"/>
    <input class="input-item" type="text" id="input-senha">
    </form>
    `;
  return printElements;
};
