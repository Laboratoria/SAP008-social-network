import { userLogin } from '../firebase/firebase.js' //importei a const userLogin para poder criar o evento de escuta e fazer a funcionalidade
                                                    //do usuario logar com e-mail e senha. Separei dessa forma para deixar o evento funcionar
                                                    //logo após do template criado.

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-login">
        
            <img  src="./images/logo_02_azul_081E26.png" alt="logo do título"
            <br>
            <p class = "sub-title">Momentos musicais inesqueciveis</p>                     
            <form>
                <input class="box-name" type="e-mail" id="e-mail" placeholder="Nome de usuário ou e-mail"/>
                <input class= "box-password" type="senha" id="senha" placeholder="Digite sua senha"/> 
                <input class="box-enter" type="button" id="btn-submit" class="btn-submit" value="Entrar"/>       
            </form>
            
            <a class="new-password" "href="">Esqueci a senha</a>
            </br>
            <a class="box-login-google" placeholder=" " href="">Continuar com sua conta do google</a>
            </br>
            <p class="box-register"><a href = '#register'>Cadastre-se</p>

        </div>     
    `;

    container.innerHTML = template;

    // -- EVENTO DE CLICK
    
    container.querySelector('#btn-submit').addEventListener('click', e => {
        e.preventDefault();
        const email = document.querySelector('#e-mail').value;
        const password = document.querySelector('#senha').value;
        userLogin(email, password);
    });

    return container;
}

