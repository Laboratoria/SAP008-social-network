export default () => {
  const container = document.createElement('div');
  const conteudo = `
    <div class="container-two">
    <form method="post" action="">

      <p class="name">
        <label for="name-cadastro">Nome:</label>
        <input id="name-cadastro" name="name-cadastro" required="required" type="text" placeholder="Email" />
      </p>

      <p class="email-cadastro">
        <label for="email-cadastro">Email:</label>
        <input id="email-cadastro" name="email-cadastro" required="required" type="text" placeholder="Email" />
      </p>

      <p class="senha-cadastro">
        <label for="senha-cadastro">Senha:</label>
        <input id="senha-cadastro" name="senha-cadastro" required="required" type="password" placeholder="Senha" />
      </p>

      <p class="criar-conta">
        <a href="#cadastre-se">Cadastre-se</a>
      </p>

      <p class="voltar">
        <a href="#home">Voltar</a>
      </p>
  </form>`;
  container.innerHTML = conteudo;
  return container;
};
