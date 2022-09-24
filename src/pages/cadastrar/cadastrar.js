export default () => {
    const container = document.createElement('div');
    const template =
    `<section class="container">
        <div class="frame">
            <h1 class="titles">Cadastre-se<br>no BatePrato</h1>
            <form action="/firebase.php" method="get">
                <input type="text" id="name" name="name" class="form-input" placeholder="Digite seu nome"><br>
                <input type="text" id="email" name="email" class="form-input" placeholder="E-mail"><br>
                <input type="text" id="password" name="password" class="form-input" placeholder="Senha"><br>
                <input type="text" id="confirm-password" name="confirm-password" class="form-input" placeholder="Confirme sua senha"><br>
                
                <div class="policies-container">
                    <input type="checkbox" id="checkbox">

                    <p class="policies">Concordo com os
                    <a class="cta" href="">Termos<br>de Serviço</a> e a
                    <a class="cta" href="">Política de <br>Privacidade</a>, incluindo o<br>
                    <a class="cta" href="">Uso de Cookies.</a>
                    </p>

                    <a href="/#home"><button id="ok-form-btn">OK</button></a>
                </div>
            </form>

            <a href="/#" class="instructions">Cancelar</a>
        </div>
        <div class="logo"></div>
    </section>`;

    container.innerHTML = template;
    return container;
}
