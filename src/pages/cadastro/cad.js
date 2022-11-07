export const mainRegister = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.innerHTML = `
  <form class="register">
    <label for="input-name" class="text-name">Nome:</label>
    <input class="input-name" type="text" id="input-name"/>
    <label for="text-name" class="text-email">Email:</label>
    <input class="input-email" type="email" id="input-email"/>
    <label for="text-password" class="text-password">Senha:</label>
    <input class="input-password" type="password" id="input-password"/>
    <label for="text-password-repeat" class="text-password-repeat">Confirme sua senha:</label>
    <input class="input-password-repeat" type="password" id="input-password-repeat"/>
    <a class="btn" id="btn-register" href="login">Cadastrar</a>
    <button type="button" class="btn" id="btn-back">Voltar</button>
  </form>
  `;

  return sectionRegister;
};
