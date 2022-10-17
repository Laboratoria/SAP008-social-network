import { loginEmailPassword, initWithGoogle } from "../firebase-services/auth.js";

// Este es el punto de entrada de tu aplicacion
export const homeFunction = () => {
  const container = document.createElement('section');

  const templateLogin = `
<section class='home-page'>
      <div class='background-home'> 
        <p class='background-home quote'>
          “Sempre fomos o que os homens disseram que nós éramos. Agora somos nós
          que vamos dizer o que somos.“ — Lygia Fagundes Telles
        </p>
        <img class='img-woman' src='img\\reading.png' alt='Mulher sentada e lendo livro'>
      </div>   
      <div class='form'>
        <picture><img src='img\\logo.png' class='img-logo' alt='Logo Booknotes'></picture>
        <p class='text-login text-one'>Faça seu login!</p>
        <input class='input-login' id='loginEmail' type='email' placeholder='leitora@email.com' />
        <input class='input-login' id='loginPassword' type='password' placeholder='***********' maxlength='20'/>
        <button class='button-sign-in button-login' id='buttonLogin' type='submit'>Entrar</button>
        <p class='text-login text-two'>───── Ou entrar com ─────</p>
        <button class='button-img'>
          <img src='img\\/google.png' class='button-google' id='buttonGoogle' alt='Logo do Google'>
        </button>
        <p class='text-login text-three'>Ainda não tem uma conta?</p>
        <button class='button-sign-up button-login' type='submit' id='buttonSignUp'>Cadastre-se!</button>
      </div>
    </section>
`;
  container.innerHTML = templateLogin;
  const btnGoogle = container.querySelector('#buttonGoogle');
  btnGoogle.addEventListener('click', () => {
    initWithGoogle().then(() => {
      window.location.hash = '#feed';
    })
  });
  
  const btnLogin = container.querySelector('#buttonLogin')
  
  btnLogin.addEventListener('click', () => {
    const inputLoginEmail = container.querySelector('#loginEmail').value;
    const inputLoginPassword = container.querySelector('#loginPassword').value;
      loginEmailPassword(inputLoginEmail, inputLoginPassword).then((result) => {
        if (result) window.location.hash = '#feed';
      });
      
  })

  const buttonSignUp = container.querySelector('#buttonSignUp');
    buttonSignUp.addEventListener('click', () => {
      window.location.hash = '#signup';
    });

  return container;
};

