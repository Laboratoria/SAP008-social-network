//Importar serviço, se houver.

export default () => {
    let containerHome= document.createElement("div")
    
    const home = `
    <header>Home</header>
    `;
    containerHome.innerHTML = home;
  
    return containerHome;
  }