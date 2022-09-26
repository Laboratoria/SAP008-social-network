import { registerUser } from '../firebase/firebase.js' 
                                                                                                             
export default () => {
    const container = document.createElement('div');
    const template = `  
    <section id="register"> 

    <div class="image"> 
      <img class="background-register" src="./images/pexels-zachary-debottis-2067677.jpg" alt="logo do título"
    </div>

    <div class="container-register">
            <img class="logo-brown-register" src="./images/logo_01_brown_A6634B.png" alt="logo do título">
            <h1 class = "sub-title-register">MOMENTOS MUSICAIS INESQUECÍVEIS</h1>                     
            <form>
                <label for="usuario">Usuário</label>
                <input class ="box-name-register" type="name" id="name" placeholder="Nome completo"/>
                <input class ="box-email-register"type="e-mail" id="e-mail" placeholder="E-mail"/>
                <input class ="box-password-register" type="password" id="password" placeholder="Digite sua senha"/> 
                <input class ="box-password-repeat" id="box-register-password" type="password" id="password" placeholder="Repetir senha"/>    
                <button class ="btn-register" type="button" id="btn-register" class="btn-register">Registrar-se</button>
            </form>

            <p class="user"><a href="#login">Já possui uma conta? Iniciar sessão</p>

        </div>    
    </section> 
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
