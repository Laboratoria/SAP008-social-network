// Este es el punto de entrada de tu aplicacion
export const homeFunction = () => {
  const container = document.createElement('div');

  const templateLogin = `
<section class="login">
      <div>
        <img src="./img/logo.png" alt="Logo Booknotes" />
        <p>
          “Sempre fomos o que os homens disseram que nós éramos. Agora somos nós
          que vamos dizer o que somos.“ — Lygia Fagundes Telles
        </p>
        <p>Faça seu login!</p>
        <input type="email" placeholder="leitora@email.com" />
        <input type="text" placeholder="***********" />
        <button type="submit">Entrar</button>
        <button type="submit">Entrar com o google</button>
        <p>Ainda não tem uma conta?</p>
        <button type="submit">Cadastre-se!</button>
      </div>
    </section>
`;
  container.innerHTML = templateLogin;
  return container;
};
