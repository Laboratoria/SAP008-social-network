import { userLogin, loginGoogle } from '../firebase/firebase.js' 
import  {redirect} from "../redirect.js"                                     

export default () => {
    const container = document.createElement('div');
    const template = ` 
        
                 
        <section id="login">

            <div class="image"> 
                    <img  class="background-login" src="./images/3f33b30335ec98928fa197ddc3866963.jpg" alt="background">
            </div>

            <div class="container-login">
                <img  class="logo-blue-login" src="./images/logo_02_blue_081E26.png" alt="logo do título">
                <h1 class="sub-title">MOMENTOS MUSICAIS INESQUECÍVEIS</h1> 
                <form> 
                    <div>
                        <input class="box-name" type="e-mail" id="e-mail" placeholder="Digite seu e-mail"/>
                        <span class="material-icons">mail_outline</span>
                        
                    </ div> 
                    <input class="box-password" type="password" id="senha" placeholder="Digite sua senha"/> 
                    <span class="material-icons">lock_outline</span>
                    <input class="box-enter" type="submit" id="btn-submit" value="Entrar">
                    <button class="new-password" type="button" id="btn-password"><a href = "#password">Esqueci a senha</button>
                    <input class="box-login-google" type="button" id="btn-google" value="Login com Google"><img class="logo-google" src="./images/simbolo-do-google.png">
                    <button class="box-register" type="button" id="btn-register" ><a href = "#register">Cadastre-se</button>     
                </form>
            </div>    
        </section> 
            
   
    `;

    container.innerHTML = template;

    
    container.querySelector('#btn-submit').addEventListener('click', e => {
        e.preventDefault();
        const email = document.querySelector('#e-mail').value;
        const password = document.querySelector('#senha').value;
        userLogin(email, password)
        .then(() => {                                          
            redirect ("#timeline")
          })                                                      
          .catch((error) => {                                                            
            const errorMessage = error.message;
            window.alert(errorMessage);
          });
    });

    container.querySelector('#btn-google').addEventListener('click', e => {
        e.preventDefault();
        loginGoogle();
    });


    return container;


}