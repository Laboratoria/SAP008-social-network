import { register } from '../../lib/auth.js';

export default () => {
  const containerRegistration = document.createElement('div');
  const template = `
    <main class="container-registration">
      <button type="button" class="btn-back">&#11013 voltar</button>

      <figure class="logo-tittle">
        <img id="one-logo-coração" src="./imagens/image-2.png">
        <p class="tittle-logotype">INspire</p>
      </figure>

      <forms class="registration-input">
        <input type="text" name="profile-name" id="input-profile-name" class="input" placeholder="Nome do perfil " required>
        <input type="email" name="email" id="input-email-registration" class="input" placeholder="Digite seu email". required>
        <input type="password" id="password" class="input" placeholder="Senha de 6 dígitos" required>
      </forms>
      <button type="button" id="button-registration" class="button">Finalizar cadastro</button>
  
    </main>
  
  `;
  containerRegistration.innerHTML = template;

  const nameProfile = containerRegistration.querySelector('#input-profile-name');
  const email = containerRegistration.querySelector('#input-email-registration');
  const password = containerRegistration.querySelector('#password');
  const btnRegistration = containerRegistration.querySelector('#button-registration');
  const btnBack = containerRegistration.querySelector('.btn-back');

  btnBack.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  btnRegistration.addEventListener('click', (e) => {
    e.preventDefault();
    register(email.value, password.value, nameProfile.value)
      .then(() => {
        alert(`Bem vindo(a) ${nameProfile.value}!`);
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          alert('E-mail já cadastrado. Faça seu login');
          window.location.hash = '#login';
        } else if (errorCode === 'auth/invalid-email') {
          alert('e-mail inválido. Ex: suzana@provedor.com');
        } else {
          alert('Algo deu errado. Por favor, tente novamente.');
        }
      });
  });

  return containerRegistration;
};
