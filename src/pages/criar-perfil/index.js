//Importar serviço, se houver.

export default () => {
    let containerProfile= document.createElement("div")
    
    let profile = `
    <header>Perfil</header>
    `;
    containerProfile.innerHTML= profile
  
    return containerProfile ;
  }