export default () => {
    const container = document.createElement('div');
    const template =
        `<section class="container">
            <div class="frame">
                <h1 class="titles">Entrar no<br>BatePrato</h1>
  
                <button id="google-login" class= "signin-btn">Entrar com Google <img src= "https://raw.githubusercontent.com/nunesisabela/SAP008-social-network/d46e6e8dcc786eb98911e3a332cae8cb1f1baf6a/external/svg_icons_social_network/google-icon.svg" class="google-icon"/></button>
  
                <div class="lines">
                    <hr style="margin-right: 5%">
                    <p>ou</p>
                    <hr style="margin-left: 5%">
                </div>
  
                <input type="text" id="email" class="email-login" placeholder="E-mail"><br>
                <div>
                    <input type="text" id="password" class="pswd-login" placeholder="Senha">
                    <span>
                    <button id="ok-login-btn">OK</button><br>
                    </span>
                </div>
                <a href="" id="forgot-it" class="instructions cta">Esqueci minha senha</a>
                <p class="instructions">Não tem uma conta?<a id="first-page" class="cta"href="/#cadastre-se"> Cadastre-se</a></p>
            </div>
            <div class="logo"></div>
        </section>`;
    container.innerHTML = template;
    return container;
}