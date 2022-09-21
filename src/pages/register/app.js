export default () => {
  const container = document.createElement('div');
  const template = `  <div class="container-register">
    <div class="box-center">
      <div class="logo-register">
        <img id="logo-register" src="./img/logo.png" alt="logo">
      </div>
  
        <div class="form-register">
            <input type="text" id="nameUser" placeholder="Digite seu nome" >
            <input type="email" id="emailUser" placeholder="Digite seu e-mail" > 
            <input type="password" id="passwordUser" placeholder="Digite sua senha" >
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" >
            <button type="button" class="buttons" id="button-register"> Criar conta </button>
            <button type="button" class="buttons" id="button-back"> Voltar </button>
        </div>
    </div>
</div>
  
<div class="wrapper-register"></div>

  <footer>
    <div class="foot">
      <img src="./img/lab.png" alt="logo Laboratória">
      <p id="devTo"> Developed by:</p>
      <p id="developers">Ellen Cavalcante <spa>&</span> Vanessa Bueck</p>
    </div>
  </footer>`;

  container.innerHTML = template;

  const buttonRegister = container.querySelector('#button-register');
  const email = container.querySelector('#emailUser');
  const newPassword = container.querySelector('#confirmPassword');
  const password = container.querySelector('#passwordUser');
  const userName = container.querySelector('#nameUser');

  function register() {
    // eslint-disable-next-line max-len
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, newPassword.value)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.updateProfile({ displayName: userName.value, uid: user.uid });
      })
      .then(() => {
        window.location.replace('#page');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          alert('E-mail já cadastrado, insira um e-mail diferente');
        } else if (errorCode === 'auth/invalid-email') {
          alert('E-mail inválido');
        } else {
          alert('Algo deu errado. Por favor, tente novamente.');
        }
      });
  }

  // eslint-disable-next-line consistent-return
  function validatePassword() {
    if (
      userName.value === '' || email.value === '' || password.value === '' || newPassword.value === '') {
      alert('Por favor, preencha todos os campos');
    } else if (password.value !== newPassword.value) {
      alert('A senha digitada está diferente em um dos campos');
    } else {
      return register();
    }
  }
  buttonRegister.addEventListener('click', validatePassword);

  function backToPage() {
    window.location.hash = '#login';
  }

  const buttonBack = container.querySelector('#button-back');
  buttonBack.addEventListener('click', backToPage);

  return container;
};
