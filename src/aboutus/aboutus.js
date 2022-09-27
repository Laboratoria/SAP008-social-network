export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-aboutus"> 
        <img id="logo-marron-aboutus" src="./images/logo_01_marrom_A6634B.png" alt="logo do título">
            <nav class="navbar">
                <ul class="navbar-list"> 
                    <li class="navbar-item-button">
                        <button type="button" id="navbar-button">BOTÃO</button>
                    </li>
                    <li class="navbar-item">
                        <a href='#about'>About</a>
                    </li>
                    <li class="navbar-item">
                        <a href='#timeline'>Timeline</a>
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

    <h1 id="aboutdevs">SOBRE AS DESENVOLVEDORAS</h1>
    <section>
        <article id="cla"> 
        <h2 id="h2-cla">Clareana Ribeiro</h2>
        <p id="p-cla">Sua paixão por música vem de berço.<br>
        A origem do seu nome é o nome de uma música.</p>
        </article>
    
        <article id="angelica"> 
        <h2 id="h2-angelica">Angélica Melo</h2>
        <p id="p-angelica">Breve descrição sobre você relacionado ao tema da rede social.</p>
        </article>
    
        <article id="andrea"> 
        <h2 id="h2-andrea">Andrea Santos</h2>
        <p id="p-andrea">Cantora apaixonada pela diversidade da música brasileira e do mundo.</p>
        </article>
    </section>   
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
