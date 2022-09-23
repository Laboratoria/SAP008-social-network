export default () => {
    const container = document.createElement('div');
    const template =
        `<section class="container">
            <div class="frame">
                <h1 class="titles">Entrar no<br>BatePrato</h1>
  
                <button id="google-login">Entrar com Google</button>
  
                <div class ="lines">
                    <hr>
                    <p>ou</p>
                    <hr>
                </div>
  
                <input type="text" id="email" class="boxes" placeholder="E-mail"><br>
                <input type="text" id="password" class="pswd-ok"placeholder="Senha">
  
                <button id="btn-ok">OK</button><br>
  
                <a href="" id="forgot-it" class="instructions cta">Esqueci minha senha</a>
                <p class="instructions">Não tem uma conta?<a id="first-page" class="cta"href=""> Cadastre-se</a></p>
            </div>
        </section>`;
    container.innerHTML = template;
    return container;
}