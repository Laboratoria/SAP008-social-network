export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-post">

        <img src="./images/logo_02_azul_081E26.png" alt="logo do título"
        <br>
        <form>
            <input type="text" id="artist-name" placeholder="Artista"/>
            <input type="text" id="location" placeholder="Local"/> 
            <input id="date" type="date">
            <input type="text" id="post" placeholder="O show + inesquecível"/>
            <input type="button" id="btn-upload" class="btn-upload" value="Carregar foto"/>  
            <input type="button" id="btn-post" class="btn-post" value="Enviar"/>  
        </form>
    </div>     
 `;

 container.innerHTML = template;
 return container;
}