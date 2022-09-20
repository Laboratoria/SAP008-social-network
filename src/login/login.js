import { userLogin, loginGoogle } from '../firebase/firebase.js'                                         

export default () => {
    const container = document.createElement('div');
    const template = `  
        <div class="container-login">
        
            <img  src="./images/logo_02_azul_081E26.png" alt="logo do título"
            <br>
            <p class = "sub-title">Momentos musicais inesqueciveis</p>                     
            <form>
                <input class="box-name" type="e-mail" id="e-mail" placeholder="Nome de usuário ou e-mail"/>
                <input class="box-password" type="password" id="senha" placeholder="Digite sua senha"/> 
                <button class="box-enter" type="button" id="btn-submit">Entrar</button>
                <button class="new-password" type="button" id="btn-password">Esqueci a senha</button>
                <button class="box-login-google" type="button" id="btn-google"> Continuar com conta google</button>
                <button class="box-register" type="button" id="btn-register" ><a href = "#register">Cadastre-se</button>     
            </form>
            
               </div>     
    `;

    container.innerHTML = template;

    
    container.querySelector('#btn-submit').addEventListener('click', e => {
        e.preventDefault();
        const email = document.querySelector('#e-mail').value;
        const password = document.querySelector('#senha').value;
        userLogin(email, password);
    });


    container.querySelector('#btn-google').addEventListener('click', e => {
        e.preventDefault();
        loginGoogle();
    });


    return container;


}