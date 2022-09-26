export default () => {
    const container = document.createElement('div');
    container.className = "content-post";
    //const getCurrentUser = () => firebase.auth().currentUser;
    //const user = getCurrentUser();
    const template = `  
    <div class="container-logo">
        <img class="logo-img" src="./images/logo_02_azul_081E26.png" alt="logo do título">
    </div>
    <div class="container-title">
        <h1>Conte para nós suas experiências mais marcantes vividas em um show!</h1>
    </div>
    <div class="container-post">
        <form>
            <input class="box-artist" type="text" id="artist-name" placeholder="Artista"/>
            <input class="box-location "type="text" id="location" placeholder="Local"/> 
            <input class="box-date" id="date" type="date">
            <textarea class="box-post" id="post" placeholder="O show + inesquecível"></textarea> 
            <button type="button" id="btn-upload" class="btn-upload"> Carregue sua foto</button> 
            <button type="button" id="btn-post" class="btn-post">Enviar</button>  
        </form>
    </div>     
 `;

 container.innerHTML = template;  //Eventos de click adicionados - Na linha 18 alterei para textarea para conseguir quebrar o texto dentro do input

 container.querySelector('#btn-upload').addEventListener('click', e => {
    e.preventDefault();
    window.alert("Vai dar PT")
});

container.querySelector('#btn-post').addEventListener('click', e => {
    e.preventDefault();
    window.alert("Fora Bozo")
});

 return container;
}

