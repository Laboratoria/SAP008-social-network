export default () => {
const container = document.createElement('div');
const template = `  
    <div id="container-password">
        <img id="logo-azul-password" src="./images/logo_02_azul_081E26.png" alt="logo do título">
        <h1 id="title">Insira o e-mail que você usa para acessar o aplicativo.</h1>
        <h2 id="subtitle">Vamos enviar um e-mail para você recuperar a senha da conta.</h2>
        <form>
            <p id="p">E-mail</p>
            <input id="email" type="email" placeholder="Digite seu e-mail"/>
            <hr>
            <button id="enter" type="button">Enviar</button>
        </form>   
    </div>     
    `;

    container.innerHTML = template;

    return container;
}