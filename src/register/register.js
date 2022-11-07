import { registerUser } from '../firebase/firebase.js';
import { redirect } from '../redirect.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container-register');
  const template = `  
    <div class='box-register'> 
      <div class='box-content-register'>
        <div class='container-top-logo-register'>
          <img src='./images/logo_01_brown_A6634B.png' id='logo-register' alt='logo do título'>
        </div>
        <div class='container-top-subtitle-register'>
          <p id='sub-title'>MOMENTOS MUSICAIS INESQUECÍVEIS</p>
        </div>              
        <form class='form-register'>
          <input class ='placeholder box-name-register' type='name' id='name-register' placeholder='Nome Completo'/>
          <input class ='placeholder box-email-register' type='e-mail' id='e-mail-register' placeholder='E-mail'/>
          <input class ='placeholder box-password-register' id='new-password' type='password' placeholder='Digite sua senha'/> 
          <input class ='placeholder box-password-repeat' id='password-repeat' type='password' placeholder='Repetir senha'/> 
          <button class = 'btn-register' type='button' id='btn-register'>Registrar</button>
        </form>
        <a href='#login' class='user'>Já possui uma conta? Iniciar sessão</a> 
        <button class ='btn-back' type='button' id='btn-back'>Voltar</button>  
      </div> 
    </div> 
  `;

  container.innerHTML = template;

  container.querySelector('#btn-register').addEventListener('click', (e) => {
    e.preventDefault();
    const name = container.querySelector('#name').value;
    const email = container.querySelector('#e-mail').value;
    const password = container.querySelector('#box-new-password').value;
    registerUser(name, email, password)
      .then(() => {
        redirect('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  });

  container.querySelector('#btn-back').addEventListener('click', (e) => {
    e.preventDefault();
    redirect('');
  });

  return container;
};
