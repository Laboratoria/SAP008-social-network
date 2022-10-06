import {signOut, /*userName*/ } from "../firebase/firebase.js"

export default () => {
    const container = document.createElement('div');
    container.className = "content-profile";
    const template = `  
    
    <div class="container-logo-profile">
    <img class="logo-img" src="./images/logo_02_blue_081E26.png"alt="logo do título">
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
                    <li class="navbar-item" id="logout">
                        <a>Sair</a>
                    </li>
                </ul>
             </nav>
    <div class="container-title-profile">
        <h1>Meu perfil musical</h1>
    </div>    
    <div class="container-profile">
        <section> 
            <p class="box-profile-name" type="text" id="name"</p>
            <input class="box-age"type="text" id="age" placeholder="Idade"/>
            <p class="about" id="about"> Sobre mim</p>
            <textarea class="box-description" id="description" placeholder="Nos fale um pouco sobre você"></textarea> 
            <button type="button" id="btn-create-post" class="btn-create-post">Crie um post</button>
            <section>
        </div>  
         
    `;

    //linha 37 - Alterei de form para section, pois o navegador estava entendendo um comportamento de form
    //sendo que o que queremos é printar dados na tela.

    //Podemos verificar a retirada do input de local que o usuário pertence, pois teríamos que criar uma lógica mto complexa
    //pra avaliar se o usuário tem um local cadastrado ou não, pois na nossa página de cadastro, não disponibilizamos esse campo.
    //logo, teríamos que mexer nisso tbm.

    container.innerHTML = template;

    const menu = container.querySelector("#navbar-button");
    menu.addEventListener('click', () => {
    const items = container.querySelectorAll(".navbar-item");
    items.forEach ( item => {
    item.classList.toggle("hide");
        })
    console.log(items);
    });

    container.querySelector('#logout').addEventListener('click', e => {
        e.preventDefault();
        signOut();
        window.location.hash = ""
    
    });

    return container;
}

    function profileUser () {
        const odio = container.querySelector("#name").innerHTML = user.uid.displayName;
        console.log(profileUser);


    }