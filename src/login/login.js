export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-login">
    
        <img src="./images/logo_02_azul_081E26.png" alt="logo do título"
        <br>
        <p>Momentos musicais inesqueciveis</p>                     
        <form>
            <input type="e-mail" id="e-mail" placeholder="Nome de usuário ou e-mail"/>
            <input type="senha" id="senha" placeholder="Digite sua senha"/> 
            <input type="button" id="btn-submit" class="btn-submit" value="Entrar"/>       
        </form>
           
        <a href="">Esqueci a senha</a>
        </br>
        <a href="">Continuar com sua conta do google</a>
        </br>
        <a href="">Cadastre-se</a>

    </div>     
 `;

 container.innerHTML = template;
 return container;
}
