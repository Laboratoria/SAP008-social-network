export default () => {
  const container = document.createElement('div');
  const conteudo = geraTemplate();
  container.innerHTML = conteudo;

  const inputEmail = container.querySelector('#email-login');
  const inputSenha = container.querySelector('#senha-login');
  const formLogin = container.querySelector('#template-form');
  configuraSubmitDoForm(formLogin, inputEmail, inputSenha);

  return container;
};

function configuraSubmitDoForm(form, inputEmail, inputSenha) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputEmail.value, inputSenha.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  })
}
function geraTemplate() {
  return `
  <div class="container" id="template-form">
  <form class="form">
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
      <input href="#entrar" type="submit" value="Entrar" class="btnEntrar"/>
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
}
