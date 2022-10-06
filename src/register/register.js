import { registerUser } from '../firebase/firebase.js' 
import { redirect } from "../redirect.js" ;
                                                                                                             
export default () => {
    const container = document.createElement('div');
    const template = `  
    <section id="register"> 

    <div class="image"> 
      <img class="background-register" src="./images/pexels-zachary-debottis-2067677.jpg" alt="logo do título"
    </div>

    <div class="container-register">
            <img class="logo-brown-register" src="./images/logo_01_brown_A6634B.png" alt="logo do título">
            <h1 class = "subtitle-register">MOMENTOS MUSICAIS INESQUECÍVEIS</h1>                     
            <form>
                <input class ="box-name-register" type="name" id="name" placeholder="Nome completo"/>
                <span class="material-icons">person</span>
                <input class ="box-email-register"type="e-mail" id="e-mail" placeholder="E-mail"/>
                <span class="material-icons">email</span>
                <input class ="box-password-register"  id="box-new-password"type="password" placeholder="Digite sua senha"/> 
                <span class="material-icons">key</span>
                <input class ="box-password-repeat" id="box-password-repeat" type="password" id="password" placeholder="Repetir senha"/> 
                <span class="material-icons">key</span>
                <button class ="btn-register" type="button" id="btn-register">Registar</button>
                <button class ="btn-back" type="button" id="btn-back">Voltar</button>
            </form>

            <p class="user"><a href="#login">Já possui uma conta? Iniciar sessão</p>

        </div>    
    </section> 
    `;

    container.innerHTML = template;


   container.querySelector('#btn-register').addEventListener('click', e => {
            e.preventDefault();
            const name = container.querySelector('#name').value;
            const email = container.querySelector('#e-mail').value;
            const password = container.querySelector('#box-new-password').value;
            registerUser(name, email, password)
            .then(() => {                                                  
                window.location.hash = "";   
              })                                                                                                     
              .catch((error) => {                                                                 
                const errorMessage = error.message;
                window.alert(errorMessage);
              });
        });

        container.querySelector("#btn-back").addEventListener("click", e => {
          e.preventDefault();
          redirect("");
      })

    return container;
}
