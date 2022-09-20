export const txtEmail = document.querySelector('#txtEmail');
export const txtPassword = document.querySelector('#txtPassword');
export const btnLogin = document.querySelector('#btnLogin');
export const btnSignup = document.querySelector("#btnSignup");
export const btnLogout = document.querySelector('#btnLogout');
const formContainer = document.querySelector('#form-container');
const loginForm = document.querySelector('#login-form');
const txtError = document.querySelector('#txt-error');
const btnGmail = document.querySelector('#btn-gmail');


// export function displayError() {    
//     txtError.innerHTML = 'Sua senha está incorreta!';
// };

// btnLogin.addEventListener("click", displayError());


//criação do formulário de criar conta
export const formSignup = () => {
    const signUp = `
    <form>
        <label for="name">Nome:
            <input type="text" required>
        </label>
        <label for="email">Email:
            <input type="email" id="txtEmail" required>
        </label>
        <label for="password">Senha:
            <input type="password" id="txtPassword" minlength="8" required>
        </label>
        <input type="submit" value="CRIAR CONTA">
    </form>
    `
    return signUp;
};

//esconde formulario de login quando aperta no criar conta
export function hideLoginForm() {
    
};
btnSignup.addEventListener("click", () => {
    loginForm.style.display = 'none';
    formContainer.innerHTML = formSignup();
});

//evento para clicar no botao da conta do google
btnGmail.addEventListener("click", )