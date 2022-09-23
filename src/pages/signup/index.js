import { createAccount } from "../../lib/signup.js";

export default() => {
    const container = document.createElement('div');
    
    const template = `
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
            <button id="btnSignup">CRIAR CONTA</button>            
        </form>
    `;
    container.innerHTML = template;

    // const txtEmail = container.querySelector('#txtEmail');
    // const txtPassword = container.querySelector('#txtPassword');
    // const btnSignup = document.querySelector("#btnSignup");

    // btnSignup.addEventListener("click", () => {
    //      const email = txtEmail.value;
    //      const password = txtPassword.value;
    //      createAccount(email, password);
    //  });
    
    return container;    
}