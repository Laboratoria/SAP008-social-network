export default() => {
    const container = document.createElement('div');

    const template = `

        <section class="login">

        <div class="op">
            <img src="./img/picsfem.png" class="login-logo">

            <h1 class="login__title">Fazer login</h1>

            <div id="form-container"></div>

            <form id="login-form">

            <div class="email-pass">
            
                <label class="login-label">
                <span>Email:</span>
                <input id="txtEmail" type="email" name="email" class="input">
            </label>
            
                <label class="login-label">
                <span>Senha</span>
                <input id="txtPassword" type="password" name="password" class="input">
                </label>
                
            </div>
            <div class="txt-error" id="txt-error"></div>
            
            <div class="ads">
                <label class="login-label-checkbox">
                <input type="checkbox" class="input-checkbox">Manter login 
                </label>
                <a href="#" class="login-link">Esqueceu a senha?</a>
            </div>
            
            <div class="entrar">
                <button id="btnLogin" type="button" class="button">Entrar</button>
            </div>
            
            <div class="Criar">
                <button id="btnSignup" type="button" class="button2">Criar conta</button>
            </div>
            <a class="login-link2">Logar como:</a>
            <div class="login-icons">
            <button id="btn-gmail" type="button" class="icons-button">
                <img src="./img/icongmail.png" alt="gmail">
            </button>
            
            </div> 

            </form>
        </div>
        </section>

        <div class="wallpaper">
        <img src="./img/foto.png">
        </div>
        <button id="btnLogout" type="button" class="button buttonBlue">Log out</button>

        `;

    container.innerHTML = template;

    return container;
}

