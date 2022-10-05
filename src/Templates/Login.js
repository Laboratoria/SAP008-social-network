export default () => {
    const container = document.createElement("div");

    const template = `
            <form>
            <div class="dados">
            <label>Email</label>
            <input type="email" class="btn-texto" name="username" id="username" placeholder="example@gmail.com">
            <label>Senha</label>
            <input type="password" class="btn-texto" name="password" id="password" placeholder="*************">
            </div>

            <div>
                <a href="#feed">Entrar</a>
            </div>
             
            <div>
                <a href="#cadastro">Cadastre-se</a>
            </div>

            
        </form>
        `

container.innerHTML = template; 
return container;
}


        
