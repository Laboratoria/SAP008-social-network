export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-logo-profile">
        <img class="logo-img-profile" src="./images/logo_02_azul_081E26.png" alt="logo do título">
    </div>
    <div class="container-title-profile">
        <h1>Meu perfil musical</h1>
    </div>    
    <div class="container-profile">
        <form>
            <input type="text" id="name" placeholder="Nome"/>
            <input type="text" id="age" placeholder="Idade"/>
            <p class="about" id="about"> Sobre mim</p>
            <textarea class="box-description" id="description" placeholder="Nos fale um pouco sobre você"></textarea> 
            <button type="button" id="btn-create-post" class="btn-create-post">Crie um post</button>
            </form>
        </div>     
    `;

    container.innerHTML = template;

    return container;
    
}