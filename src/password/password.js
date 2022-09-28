import{resetPassword} from "../firebase/firebasejs"
import  {redirect} from "../redirect.js"  

export default () => {
const container = document.createElement('div');
const template = `  
    <div id="container-password">
        <img id="logo-azul-password" src="./images/logo_02_azul_081E26.png" alt="logo do título">
        <h1 id="title">Insira o e-mail que você usa para acessar o aplicativo.</h1>
        <h2 id="subtitle">Vamos enviar um e-mail para você recuperar a senha da conta.</h2>
        <form>
            <p id="p">E-mail</p>
            <input id="email" type="email" placeholder="Digite seu e-mail"/>
            <hr>
            <button id="btn-enter" type="button">Enviar</button>
        </form>   
    </div>     
    `;

    container.innerHTML = template;

container.querySelector("#btn-enter").addEventListener("click", e => {
    e.preventDefault();
    const newPassword = container.querySelector("#email").value;
    resetPassword(newPassword)
    .then(() => {
        redirect ("")
            })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
})


    return container;
}