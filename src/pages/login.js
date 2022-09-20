// aqui exportaras las funciones que necesites
//colocar import

//página inicial- Tela de login
export const telaInicialLogin = () => {
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
  return caixaDeLogin;
};
