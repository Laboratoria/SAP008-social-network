export default () => {
    const container = document.createElement('div'); 

    const template = `
        <section class="content">
            <div class="title">
                <div class="logo">
                    <h1>MCMR</h1>
                    <h3>Meu Corpo Minhas Regras</h3>
                </div>
                <img src="./img/logo.png">
            </div>
            <h2>Entre ou crie uma conta</h2>
            <!-- DIV DO CAMPO DE ENTRAR -->
            <div class="container">
                <h1>Entrar</h1>
                <a href="#google" class="link-google"><i class="fa-brands fa-google"></i> Entrar com o Google</a>
                <a href="#feed" class="link-entrar">Entrar</a>
            </div>

            <a href= "#cadastre">Nova Conta</a>
        </section> 
    `;
    container.innerHTML = template; 

    return container;

}