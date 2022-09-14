export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-register">

    <img src="./images/logo_01_marrom_A6634B.png" alt="logo do título"
        <br>
        <p>Momentos musicais inesqueciveis</p>                     
        <form>
            <input type="name" id="name" placeholder="Nome completo"/>
            <input type="e-mail" id="e-mail" placeholder="E-mail"/>
            <input type="password" id="password" placeholder="Digite sua senha"/> 
            <input type="password" id="password" placeholder="Repetir senha"/>   
            <input type="button" id="btn-register" class="btn-register" value="Registrar-se"/>   
        </form>

        <a href="">Já possui uma conta? Iniciar sessão</a>

        </div>     
        `;
        
        container.innerHTML = template;
        return container;
}