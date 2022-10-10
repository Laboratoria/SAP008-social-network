
import { newUser, create } from '../../lib/auth.js';
export default () => {
    const container = document.createElement('div');
    const template =
        `<section class="container">
        <div class="frame">
            <h1 class="titles">Cadastre-se<br>no BatePrato</h1>
            <form class="form-register">
                <input type="text" id="name" name="name" class="form-input" placeholder="Digite seu nome"><br>
                <input type="text" id="email" name="email" class="form-input" placeholder="E-mail"><br>
                <input type="password" id="password" name="password" class="form-input" placeholder="Senha"><br>
                <input type="password" id="confirm-password" name="confirm-password" class="form-input" placeholder="Confirme sua senha"><br>
                
                <div class="policies-container">
                    <input type="checkbox" id="checkbox">

                    <p class="policies">Concordo com os
                    <a class="cta" href="">Termos<br>de Serviço</a> e a
                    <a class="cta" href="">Política de <br>Privacidade</a>, incluindo o<br>
                    <a class="cta" href="">Uso de Cookies.</a>
                    </p>

                    <button id="ok-form-btn">OK</button>
                </div>
            </form>

            <a href="/#" class="instructions cta">Cancelar</a>
        </div>
        <div class="logo"></div>
    </section>`;

    container.innerHTML = template;


    const signInName = container.querySelector('#name');
    const signInEmail = container.querySelector('#email');
    const signInPassword = container.querySelector('#password');
    const signInConfPassword = container.querySelector('#confirm-password');
    const checkBox = container.querySelector('#checkbox')
    const formRegister = container.querySelector('.form-register');




    formRegister.addEventListener('submit', (e) => {
        e.preventDefault()

        if (signInPassword.value !== signInConfPassword.value) {
            return alert('As senhas devem ser a mesma')

        } else if (signInName.value === "" || signInEmail.value === "" || signInPassword.value === "" || signInConfPassword.value === '' || checkBox.checked === false) {
            return alert('Todos os campos devem ser preenchidos')

        }
        return newUser(signInEmail.value, signInPassword.value)
            .then(() => {
                create(signInName.value, signInEmail.value, signInPassword.value)
            })

            .then(() => {
                window.location.hash = '#home'
            })

    })

    return container;
}








