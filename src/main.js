
export const txtEmail = document.querySelector('#txtEmail');
export const txtPassword = document.querySelector('#txtPassword');
export const btnLogin = document.querySelector('#btnLogin');
export const btnSignup = document.querySelector("#btnSignup");
export const btnLogout = document.querySelector('#btnLogout');
const formContainer = document.querySelector('#form-container');

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


btnSignup.addEventListener("click", () => {
    formContainer.innerHTML = formSignup();
});