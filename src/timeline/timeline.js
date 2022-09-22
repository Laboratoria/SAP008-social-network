import {signOut} from "../firebase/firebase.js"

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-login">
        
        <h1>AQUI É timeline</h1>
        <button type="button" id="logout">SAIR</button>


            
               </div>     
    `;

    container.innerHTML = template;

    container.querySelector('#logout').addEventListener('click', e => {
        e.preventDefault();
        signOut();
        window.location.hash = ""

    });

    return container;


}
