export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-login">
    <div class="box-left">
      <div class="gif-box-left">
        <img id="gif-vanellen" src="./img/vanellen-gif.jpeg" alt="gif video">
        <p>Os melhores spoilers em um só lugar!</p>
      </div>
    </div>
  
    <div class="box-right">
      <div class="logo-login">
        <img id="logo-login" src="./img/logo.png" alt="logo">
      </div>
      <div class="register">
        <p>Cadastre-se para obter informações de novos filmes e séries, dar a sua opinião e se conectar com pessoas que
          tem tudo a ver com você.</p>
  
        <button type="button" id="button-gmail" class="button">
          <span class="button-icon"><img id="logo-gmail" src="./img/gmail-logo.png" alt="Logo Gmail"></span>
          <span class="button-txt">Fazer login com Gmail</span>
        </button>
  
        <div class="break">
          <div class="line"></div>
          <div class="or">OU</div>
          <div class="line" id="line-right"></div>
        </div>
        <p>Já tem uma conta?</p>
  
        <div class="form">
          <input id="inputEmail" type="email" placeholder="E-mail" name="email" required>
          <input id="inputPassword" type="password" placeholder="Senha" name="password" required>
        </div>
  
        <div class="register">
          <button type="button" id="button-enter" class="button">Entrar</button>
          <p>Não tem uma conta?</p>  <a href="#register" id="signUp" style="color:rgb(41, 73, 201); font-size:1.3rem"> Cadastre-se! </p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="wrapper-login"></div>
  
  <footer>
    <div class="foot">
      <img src="./img/lab.png" alt="logo Laboratória">
      <p id="devTo"> Developed by:</p>
      <p id="developers">Ellen Cavalcante <spa>&</span> Vanessa Bueck</p>
    </div>
  </footer>`;

    container.innerHTML = template;

    const buttonEnter = container.querySelector('#button-enter');
    const buttonGmail = container.querySelector('#button-gmail');
    const inputEmail = container.querySelector('#inputEmail');
    const inputPassword = container.querySelector('#inputPassword');



    const googleLogin = (provider) => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            const user = result.user;
            firebase.firestore().collection('users').doc(user.email).set({ name: user.displayName }, { merge: true });
        }).catch((error) => {
            const errorCode = error.code;
            if (errorCode) {
                alert(errorCode);
            } else window.location.replace('#page');
        });
    };

    buttonGmail.addEventListener('click', (event) => {
        event.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        googleLogin(provider);
    });


    function login() {
        if (firebase.auth().currentUser) {
            window.location.replace('#page');
            return ;
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
            .then(() => {
                window.location.replace('#page');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    buttonEnter.addEventListener('click', login);

   const signUp = container.querySelector('#signUp');
   console.log(signUp);

    signUp.addEventListener('click', () => {
        window.location.href = '#register';
    });

    return container;
};
