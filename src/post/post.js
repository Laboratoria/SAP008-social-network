import { createPost } from "../firebase/firebase.js";
import { redirect } from "../redirect.js" ;

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-logo">
            <img class="logo-img" src="./images/logo_02_azul_081E26.png" alt="logo do título">
        </div>
        <div class="container-title">
            <h1>Conte para nós suas experiências mais marcantes vividas em um show!</h1>
        </div>
        <div class="container-post">
            <form>
                <input class="box-artist" type="text" id="artist" placeholder="Artista">
                <input class="box-location "type="text" id="location" placeholder="Local"> 
                <input class="box-date" id="date" type="date">
                <textarea class="box-post" id="post" placeholder="O show + inesquecível"></textarea>
                <input type="submit" id="btn-post" class="btn-post" value="Postar">
            </form>
        </div>     
    `;

    container.innerHTML = template;
    container.querySelector("#btn-post").addEventListener('click', e => { //evento trocado de submit p/click
        e.preventDefault();
        const artist = container.querySelector("#artist").value; //estávamos usando document, ao invés de container.
        const location = container.querySelector("#location").value;
        const date = container.querySelector("#date").value;
        const post = container.querySelector("#post").value;
        createPost(artist, location, date, post);
        alert("Post criado com sucesso") //adicionado
        redirect("#timeline");
    });

    // container.querySelector("#btn-post").addEventListener("submit", e => {
    //     e.preventDefault();
    //     const artist = document.querySelector("#artist").value;
    //     const location = document.querySelector("#location").value;
    //     const date = document.querySelector("#date").value;
    //     const post = document.querySelector("#post").value;
    //     createPost(artist, location, date, post);
    //     redirect("#timeline");
    // });

    return container;
}

