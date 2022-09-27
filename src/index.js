import home from "./pages/home/home.js"
import register from "./pages/cadastrar/register.js"

const main = document.querySelector("#root")

const inicio = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case "":
                main.appendChild(home())
                break;
            case "#paracadastro":
                main.appendChild(register())
                break;
            default:
                main.appendChild(home())
        }
    })
}

window.addEventListener("load", () => {
    location.hash = " ";
    main.appendChild(home())
    inicio()
})

