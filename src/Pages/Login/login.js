export default () => {
    const container = document.createElement('div');

    const template = `
        <figure class="img-logo">
            <img src="./Imagens/Logo.png" alt="logo">
        </figure>

        <form class="form-login">
            <div class="form-background">
            <section class="inputs">
            <label for="email">Digite seu e-mail</label>
            <input type="email" placeholder="seuemail@gmail.com" id="email" class="input-email" />
            </section>

            <section class="inputs">
            <label for="password">Digite sua senha</label>
            <input type="password" placeholder="****" id="password" class="input-password" />
            </section>

            <section class="buttons">
            <button type="submit" class="btn-login">Iniciar Sessão</button>
            <button type="submit" class="btn-google"><img src="./Imagens/google.png"/> Entrar com Google</button>
            <button type="submit" class="btn-register">Criar nova conta</button>
            </section>
            </div>
        </form>
    `

    container.innerHTML = template;

    return container;
}
