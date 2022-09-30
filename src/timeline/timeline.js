import {signOut} from "../firebase/firebase.js"

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-login">
        
        <h1>AQUI É timeline</h1>
        <button type="button" id="logout">SAIR</button>
        <button type="button" id="btn-post">POST</button> 
        <a href="#post"></a>


            
               </div>     
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
