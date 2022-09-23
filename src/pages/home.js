// Este es el punto de entrada de tu aplicacion
export const homeFunction = () => {
  const container = document.createElement('div');

  const templateLogin = `
<section class="home-page">
      <div class="background-home"> 
        <p class="background-home quote">
          “Sempre fomos o que os homens disseram que nós éramos. Agora somos nós
          que vamos dizer o que somos.“ — Lygia Fagundes Telles
        </p>
        <img class="img-woman" src="../src/img/reading.png" alt="Mulher sentada e lendo livro">
      </div>   
      <div class="form">
        <picture><img src="/src/img/logo.png" class="img-logo" alt="Logo Booknotes"></picture>
        <p class="text-login text-one">Faça seu login!</p>
        <input class="input-login" type="email" placeholder="leitora@email.com" />
        <input class="input-login" type="text" placeholder="***********" />
        <button class="button-sign-in button-login" type="submit">Entrar</button>
        <p class="text-login text-two">────── Ou entrar com ──────</p>
        <a href=""><img src="/src/img/google.png" class="button-google" alt="Logo do Google"></a>
        <p class="text-login text-three">Ainda não tem uma conta?</p>
        <button class="button-sign-up button-login" type="submit">Cadastre-se!</button>
      </div>
    </section>
`;
  container.innerHTML = templateLogin;
  return container;
};
