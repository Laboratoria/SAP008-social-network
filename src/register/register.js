import { registerUser } from '../firebase/firebase.js' 
                                                                                                             
export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-register">

    <img class="logo-marron" src="./images/logo_01_marrom_A6634B.png" alt="logo do título"
        <br>
        <p class = "sub-title-register">Momentos musicais inesqueciveis</p>                     
        <form>
            <input class ="box-name-register" type="name" id="name" placeholder="Nome completo"/>
            <input class ="box-email-register"type="e-mail" id="e-mail" placeholder="E-mail"/>
            <input class ="box-password-register" type="password" id="password" placeholder="Digite sua senha"/> 
            <input class ="box-password-repeat" id="box-register-password" type="password" id="password" placeholder="Repetir senha"/>    
            <button class ="btn-register" type="button" id="btn-register" class="btn-register">Registrar-se</button>
        </form>

        <p class="user"><a href="#login">Já possui uma conta? Iniciar sessão</p>

        </div>     
        `;
        
        container.innerHTML = template;


        container.querySelector('#btn-register').addEventListener('click', e => {
            e.preventDefault();
            const email = document.querySelector('#e-mail').value;
            const password = document.querySelector('#password').value;
            registerUser(email, password);
        });

        return container;
}
