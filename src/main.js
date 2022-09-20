import "./config-firebase.js"

import {telaInicialLogin} from "./pages/login.js" 

const root= document.getElementById ("root")

window.addEventListener ("load", function(){
    const page = telaInicialLogin ()
    root.innerHTML=page
})