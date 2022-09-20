//Importar serviço, se houver.

export default () => {
    let containerRegister= document.createElement("div")
    
    let register = `
    <header>Cadastro</header>
    `;
    containerRegister.innerHTML = register;
  
    return containerRegister;
  }