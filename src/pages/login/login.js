// aqui exportaras las funciones que necesites
//colocar import

//página inicial- Tela de login
/*export default () => {
    const container = document.createElement ("div")
    const caixaDeLogin = `
              <div id="inicial" class="caixaLogin">
                  <form id="caixaDeLogin" class="boxLogin">
                      <p class="texto">Bem vindo!</p>
                      <div class="registroInicial">
                          <input type="text" id="emailLogin" class="dadosAcesso" placeholder="E-mail do usuário" required>
                      </div>
                      <div class="registroInicial">
                          <input type="password" id="senhaLogin" class="dadosAcesso" placeholder="Senha" required>
                      </div>
                      <button type="submit" id="botaoDeLogin" class="iniciarSessao">Login</button>
                  </form>
              </div>
              `;
        container.innerHTML = caixaDeLogin
        return container;      
}*/

export default () => {
    const container = document.createElement("div")
    const template = ` 
     <div class="container-login">
      <div>
        <input type="email" name="email" id="input-email" placeholder="Email do usuário" required>
        <input type="password" name="password" id="input-password" placeholder="Senha" required>
        <button type="button" id="button-login" class="button">Entrar</button>
      </div>
     </div>
    
    `
    console.log(container)
    container.innerHTML = template;
    return container
}
