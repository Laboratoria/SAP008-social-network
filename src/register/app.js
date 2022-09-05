export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-register">
    <div class="box-center">
      <div class="logo-login">
        <img id="logo-login" src="./img/logo.png" alt="logo">
      </div>
  
        <div class="form">
            <input type="text" id="nameUser" placeholder="Digite seu nome" required>
            <input type="email" id="emailUser" placeholder="Digite seu e-mail" required> 
            <input type="password" id="passwordUser" placeholder="Digite sua senha" required>
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" required>
            <button type="button" class="buttonRegister" id="button-register"> Criar conta </button>
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

    const email = container.querySelector('#emailUser');
    const password = container.querySelector('#passwordUser');
    const newPassword = container.querySelector('#confirmPassword');
    const buttonRegister = container.querySelector('#button-register');

    function validatePassword() {
        if (password.value != newPassword.value) {
            alert("Senhas diferentes!");
        } else {
            return register();
        }
    }
    buttonRegister.addEventListener('click', validatePassword);

    function register() {
        // eslint-disable-next-line max-len
        firebase.auth().createUserWithEmailAndPassword(email.value, newPassword.value).then(() => {
            window.location.href = '#page';
        }).catch(() => {
            const newLocal = 'Esse e-mail já está cadastrado';
            alert(newLocal);
        });
    }
    return container;

};
