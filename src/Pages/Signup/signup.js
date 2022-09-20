export default () => {
    const container = document.createElement('div');

    const template = `
        <figure class="img-logo">
            <img src="./Imagens/logo-mobile.png" alt="logo">
        </figure>

        <form class="form-signup">
            <h1 class="title-signup">Cadastre-se</h1>
            <section class="inputs">
            <label for="name" class="label">Nome completo</label>
            <input type="name" placeholder="Seu Nome" id="name" class="input-name" />
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
            </section>
        </form>
    `

    container.innerHTML = template;

    return container;
}