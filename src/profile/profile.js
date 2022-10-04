export default () => {
    const container = document.createElement('div');
    container.className = "content-profile";
    const template = `  
    
    <div class="container-logo-profile">
        <img class="logo-img-profile" src="./images/logo_02_azul_081E26.png" alt="logo do título">
    </div>
    <nav class="navbar">
                <ul class="navbar-list"> 
                    <li class="navbar-item-button">
                        <button type="button" id="navbar-button">BOTÃO</button>
                    </li>
                    <li class="navbar-item">
                        <a href='#post'>Publicar Post</a>
                    </li>
                    <li class="navbar-item">
                        <a href='#about'>Show +</a>
                    </li>
                    <li class="navbar-item">
                        <a href='#aboutus'>Sobre Nós</a>
                    </li>
                    <li class="navbar-item">
                        <a href='#timeline'>Timeline</a>
                    </li>
                    <li class="navbar-item">
                        <a>Sair</a>
                    </li>
                </ul>
             </nav>
    <div class="container-title-profile">
        <h1>Meu perfil musical</h1>
    </div>    
    <div class="container-profile">
        <form>
            <input class="box-profile-name" type="text" id="name" placeholder="Nome"/>
            <input class="box-age"type="text" id="age" placeholder="Idade"/>
            <p class="about" id="about"> Sobre mim</p>
            <textarea class="box-description" id="description" placeholder="Nos fale um pouco sobre você"></textarea> 
            <button type="button" id="btn-create-post" class="btn-create-post">Crie um post</button>
            </form>
        </div>  
         
    `;

    container.innerHTML = template;

    const menu = container.querySelector("#navbar-button");
    window.alert(menu)
    menu.addEventListener('click', () => {
    const items = container.querySelectorAll(".navbar-item");
    items.forEach ( item => {
    item.classList.toggle("hide");
        })
    console.log(items);
    });


    return container;
    
}