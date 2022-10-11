import {userLogin, loginGoogle} from '../firebase/firebase.js' 
import {redirect} from '../redirect.js'export default () => {
    const container = document.createElement('div');
    container.classList.add('wrapper-login');

    const template = `       
            <div class ='container-login'>
                <div class='container-logo'>
                    <img src='./images/logo_02_blue_081E26.png' id='logo-login'alt='logo do título'>
                </div>
                <div class='container-subtitle'
                    <h1 id="sub-title">MOMENTOS MUSICAIS INESQUECÍVEIS</h1>
                </div>
            
                <form class='container-form-login'> 
                    <div class='container-email-password>            
                        <input class='box-email' id='email-user' type='email' placeholder='Digite seu e-mail'/>
                        <span class='material-icons' id='icon-mail'>mail_outline</span>                         
                        <input class='box-password' id='password-user' type='password' placeholder='Digite sua senha'/>
                        <span class='material-icons' id='icon-password'>lock_outline</span>
                        <button class='btn-enter' type='submit' id='btn-submit'>Entrar</button>
                        <button class='new-password' type='button'>Esqueci a senha<a href='#password' id='btn-password'></button>  
                    </ div> 
                    <div class='container-buttons'>
                        <button class='box-login-google' type='button' id='btn-google'>
                            <img class='logo-google' src='./images/simbolo-do-google.png'/>
                            Login com Google</button>
                        <button class='box-register-login' type='button' id='btn-register'><a href='#register'>Cadastre-se</button> 
                    </div>
                </form>
        
                <footer>
                    <p class='footer-text'>Desenvolvido por
                        <a href='https://github.com/AngelMelo12'>
                            <span class='name'> Angelica Melo, </span>
                        </a>
                        <a href='https://github.com/Canzua'>
                            <span class="name"> Andrea dos Santos e </span>
                        </a>   
                        <a href='https://github.com/ClareanaRibeiro'>
                            <span class="name"> Clareana Ribeiro </span>
                        </a>
                    </p>    
                </footer>

            </div> 
    
    `;

    container.innerHTML = template;

    container.querySelector('#btn-submit').addEventListener('click', e => {
        e.preventDefault();
        const email = document.querySelector('#e-mail').value;
        const password = document.querySelector('#senha').value;
        userLogin(email, password)
        .then(() => {
                redirect ('#timeline')
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