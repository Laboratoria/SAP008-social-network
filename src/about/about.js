export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-about">

        <img  class="logo-brown-about" src="./images/logo_02_azul_081E26.png" alt="logo do título"
        
        <h1> AQUI É ABOUT APP </h1>


            
               </div>     
    `;

    container.innerHTML = template;

    return container;
}