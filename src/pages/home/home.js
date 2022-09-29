export default () => {
  const container = document.createElement('div');
  const conteudo = `
    <div class="container">
    <form method="post" action="" class="form">
      <img src="img/logo.png" class="logo" alt="Logo Wanderlust">
      <p class="register">
        <label for="email-login" >Email:</label>
        <input id="email-login" class="emailSenha" name="email-login" required="required" type="text" placeholder="Digite seu email" />
      </p>
      <p class="register">
        <label for="senha-login">Senha:</label>
        <input id="senha-login" class="emailSenha" name="senha-login" required="required" type="password" placeholder="Digite sua senha" />
      </p>
      <p class="register">
        <a href="#recuperarsenha" class="esqueciSenhaCadastre">Esqueci minha senha!</a>
      </p>
      <p class="register">
        <a href="#entrar" input type="submit" value="Entrar" class="btnEntrar"/>Entrar</a>
      </p>
      <p class="register">
        <a href="#paracadastro" class="cadastre">Cadastre-se</a>
      </p>
      <p class="textGoogle">Entre também com:</p>
      <p class="textGoogle">
        <a href="#logingoogle" class="loginGoogle"><img src="img/logoGoogle.jpg" class="imgGoogle"></a>
      </p>
      <p>
        <a href="#sobre" class="sobrepage">Sobre</a>
      </p>
    </form>`;
  container.innerHTML = conteudo;
  return container;
};
