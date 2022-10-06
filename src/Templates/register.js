import { createUser } from "../lib/index.js";

export default () => {
    const container = document.createElement("div");

    const template = `
        <form class="form">
            <div class="dados">
                <label>Email</label>
                <input type="email" class="btn-texto"  id="username" placeholder="example@gmail.com">
                <label>Senha</label>
                <input type="password" class="btn-texto"  id="password" placeholder="*************">
            </div>
            <button>Cadastre-se</button>  
        </form>
        <div>
            <a href="#login">Entrar</a>
        </div>
        `
    container.innerHTML = template; 
    const form= container.querySelector(".form")
    const email = container.querySelector("#username")
    const senha = container.querySelector("#password")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        console.log("submter o form")
        console.log(email.value)
        console.log(senha.value)
        createUser(email.value, senha.value)
            .then(user =>{
                console.log(user)
            })
    })
    return container;
}


        
