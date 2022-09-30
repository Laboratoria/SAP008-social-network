import { collection } from "../firebase/firebase.js";
import  {redirect} from "../redirect.js" ;

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
            <input class="box-artist" type="text" id="artist" placeholder="Artista"/>
            <input class="box-location "type="text" id="location" placeholder="Local"/> 
            <input class="box-date" id="date" type="date">
            <textarea class="box-post" id="post" placeholder="O show + inesquecível"></textarea> 
            <input type=" id="btn-upload" class="btn-upload"> Carregue sua foto</button>
            <button type="submit" id="btn-post" class="btn-post">Enviar</button>  
        </form>
    </div>     
 `;

 container.innerHTML = template;  
const botão = container.querySelector("#btn-post");
console.log (botão);
//const postsCollection = collection(db, 'posts');

async function createUserPost(artistValue, locationValue, dateValue, postValue) {
  const newPost = {
        artist: artistValue,
        location: locationValue,
        date: dateValue,
        post: postValue,

    };
    const docRef = await addDoc(collection(db, newPost), {
        //const docRef = await addDoc(postsCollection, newPost);
}
)};


    container.querySelector("#btn-post").addEventListener("submit", e => {
        e.preventDefault( );
        const artist = document.querySelector("#artist").value;
        const location = document.querySelector("#location").value;
        const date = document.querySelector("#date").value;
        const post = document.querySelector("#post").value;
        createUserPost(artistValue, locationValue, dateValue, postValue);
        redirect ("#timeline");
        console.log(createPost);
    });

 return container;
}

