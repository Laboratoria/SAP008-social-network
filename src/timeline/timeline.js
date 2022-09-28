import {signOut} from "../firebase/firebase.js"

export default () => {
    const container = document.createElement('div');
    const template = `  
    <section>
        <div class="container-timeline">
            <div class="menu">
                <img id="logo-azul-timeline" src="./images/logo_02_blue_081E26.png" alt="logo do título">
                <nav class="navbar">
                        <ul class="navbar-list"> 
                        <li class="navbar-item-button">
                            <button type="button" id="navbar-button">BOTÃO</button>
                        </li>
                        <li class="navbar-item">
                            <a href='#about'>About</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#aboutus>About us</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#post'>Publicar post</a>
                        </li>
                        <li class="navbar-item">
                            <a href='#profile'>Profile</a>
                        </li>
                        <li class="navbar-item">
                            <a>Sair</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>     

    </section>
    `;

    container.innerHTML = template;

    container.querySelector('#logout').addEventListener('click', e => {
        e.preventDefault();
        signOut();
        window.location.hash = ""

    });

    container.querySelector('#btn-post').addEventListener('click', e => { //evento adicionado p/ eu conseguir visualizar a pagina
        e.preventDefault();                                             // adicionei o botão post e o href.
        window.alert("sucesso");
        window.location.hash = "#post"
    });

    return container;


}
