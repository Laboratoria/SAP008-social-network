export const signUpFunction = () => {
  const containerSignUp = document.createElement('div');

  const templateSignUp = `
  <section class="home-page" id="sign-up">
      <div class="background-home"> 
        <p class="background-home quote">
          “Sempre fomos o que os homens disseram que nós éramos. Agora somos nós
          que vamos dizer o que somos.“ — Lygia Fagundes Telles
        </p>
        <img class="img-woman" src="img\\reading.png" alt="Mulher sentada e lendo livro">
      </div>
      <div class="form-signup">
        <input type="text" class="input-signup">
        <p>Nome</p>
        <input type="email" class="input-signup">
        <p>E-mail</p>
        <input type="text" class="input-signup">
        <p>Senha</p>
        <button type="submit" class="button-signup" id="buttonSignUp">Cadastrar e entrar!</button>
      </div>
  </section>   
  
  
  `;
  containerSignUp.innerHTML = templateSignUp;
  return containerSignUp;
}