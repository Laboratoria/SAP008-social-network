import { loginUser } from "../../lib/auth.js";
// export const msgError = container.querySelector('#msg-error');

export default () => {
    const container = document.createElement('div');
    const template =
        `<section class="container">
<div class="frame">
                <h1 class="titles">Entrar no<br>BatePrato</h1>
  
                <button id="google-login" class= "signin-btn">Entrar com Google <img src="./external/svg/google-icon.svg" class="google-icon"/></button>
  
                <div class="lines">
                    <hr style="margin-right: 5%">
                    <p>ou</p>
                    <hr style="margin-left: 5%">
                </div>
                <form class="form-login">
                    <input type="text" id="email" class="email-login" placeholder="E-mail"><br>
                    <p id="msg-error"></p>
                    <div>
                    <input type="text" id="password" class="pswd-login" placeholder="Senha">
                    <span>
                        <button id="ok-login-btn">OK</button><br>
                        </span>
                    </div>
                    </form>
                <a href="" id="forgot-it" class="instructions cta">Esqueci minha senha</a>
                <p class="instructions">Não tem uma conta?<a id="first-page" class="cta"href="/#cadastre-se"> Cadastre-se</a></p>
            </div>
            <div class="logo"></div>
            </section>`;
        
            container.innerHTML = template;

            const logInEmail = container.querySelector('#email');
            const logInPassword = container.querySelector('#password');
    const formLogIn = container.querySelector('#ok-login-btn');
    

    formLogIn.addEventListener('click', async (e) => {
        e.preventDefault()
        await loginUser(logInEmail.value, logInPassword.value);
        window.location.hash = '#home';
    });

    return container;
}