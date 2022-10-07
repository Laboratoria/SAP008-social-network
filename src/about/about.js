import {signOut} from "../firebase/firebase.js"
import { redirect } from "../redirect.js"

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-about">
        <img  class="logo-brown-about" src="./images/logo_01_brown_A6634B.png" alt="logo do título">
        <nav class="navbar">
                <ul class="navbar-list"> 
                    <li class="navbar-item-button">
                        <button type="button" id="navbar-button">BOTÃO</button>
                    </li>                   
                    <li class="navbar-item">
                        <a href='#profile'>Perfil</a>
                    </li>
                    <li class="navbar-item">
                        <a href='#post'>Publicar Post</a>
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
        
        <h1> AQUI É ABOUT APP </h1>


            
               </div>     
    `;

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
    redirect("");

});


    return container;
}