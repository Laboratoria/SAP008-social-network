export default () => {
    const container = document.createElement('div');
    console.log('container');
    const template = `
        <header class="register-login-header display-flex">
            <img class="return-btn" src="img/returnBtn.png" alt="back arrow">
            <h1><img class="img-logo-register" src="img/Rebu.png" alt="rebu logo"></h1>
        </header>
        <main class="register-content display-flex">
            <form class="register-login display-flex">
                <legend class="login-text">CADASTRAR</legend>
                <input id="register-input" class="input-style" type="email" placeholder="E-MAIL">
                <input type="password" id="password-register" class="input-style" placeholder="SENHA">
                <input type="password" id="password-register-confirm" class="input-style" placeholder="CONFIRME SUA SENHA">
                <input type="submit" class="btn-register" value="CADASTRAR">
                <button class="btn-google-register display-flex"><img class="google-btn-register" src="img/googleIcon.png" alt="google logo">CADASTRE-SE COM O GOOGLE</button>
            </form>
        </main>
    `;
    container.innerHTML = template;
    return container;
}


