export default () => {
    const container = document.createElement('div');
    const template = `  
    <div id="container-aboutus">
    <img id="logo-marron-aboutus" src="./images/logo_01_marrom_A6634B.png" alt="logo do título">
    <h1 id="aboutdevs">SOBRE AS DESENVOLVEDORAS</h1>
    <main>
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
    </main>   
    </div>     
    `;

    container.innerHTML = template;

    return container;
}