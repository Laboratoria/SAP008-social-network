export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-register">
    <div class="box-center">
      <div class="logo-login">
        <img id="logo-login" src="./img/logo.png" alt="logo">
      </div>
  
        <div class="form">
            <input type="text" id="nameUser" placeholder="Digite seu nome" >
            <input type="email" id="emailUser" placeholder="Digite seu e-mail" > 
            <input type="password" id="passwordUser" placeholder="Digite sua senha" >
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" >
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

    const buttonRegister = container.querySelector('#button-register');
    const email = container.querySelector('#emailUser');
    const newPassword = container.querySelector('#confirmPassword');
    const password = container.querySelector('#passwordUser');
    const userName = container.querySelector('#nameUser');

    function validatePassword() {
        if (userName.value === "" || email.value === "" || password.value === "" || newPassword.value === ""){
            alert("Por favor, preencha todos os campos");
        } 
       else if (password.value != newPassword.value) {
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

