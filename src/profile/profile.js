export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-profile">
            <img src="./images/logo_02_azul_081E26.png" alt="logo do título"
            <h1>Meu perfil musical</h1>   


            
               </div>     
    `;

    container.innerHTML = template;

    return container;
    
}