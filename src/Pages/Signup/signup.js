export default () => {
    const container = document.createElement('div');

    const template = `
        <figure class="img-logo-signup">
            <img src="./Imagens/logo-mobile.png" alt="logo">
        </figure>

        <form class="form-signup">
            <h1 class="title-signup">Cadastre-se</h1>
            <section class="inputs-signup">
            <label for="name-signup" class="label">Nome completo</label>
            <input type="name-signup" placeholder="Nome e sobrenome" id="name-signup" class="input-name-signup" />
            <label for="username-signup" class="label">Nome de usuário</label>
            <input type="username-signup" placeholder="@Usuario" id="username" class="input-username-signup" />
            <label for="email-signup" class="label">E-mail</label>
            <input type="email-signup" placeholder="E-mail" id="signup-email" class="input-email-signup" />
            <label for="passwordsignup">Digite sua senha</label>
            <input type="password-signup" placeholder="****" id="signup-password" class="input-password-signup" />
            </section>
            
            <section class="inputs">
            <label for="username" class="label">Nome de usuário</label>
            <input type="username" placeholder="@Usuario" id="username" class="input-username" />
            <label for="signupemail" class="label">E-mail</label>
            <input type="signupemail" placeholder="E-mail" id="signupemail" class="input-signupemail" />
            <label for="signuppassword">Digite sua senha</label>
            <input type="signuppassword" placeholder="****" id="signuppassword" class="input-signuppassword" />
            </section>

            <section class="buttons">
            <button type="submit" class="btn-login" id="register">Cadastrar</button>
            <button type="submit" class="btn-google"><img src="./Imagens/google.png"/> Cadastro com Google</button>

            <section class="buttons-signup">
            <button type="submit" class="btn-signup">Cadastrar</button>
            <button type="submit" class="btn-google-signup"><img src="./Imagens/google.png"/> Cadastro com Google</button>
            </section>
        </form>
    `;

    container.innerHTML = template;

    return container;
}