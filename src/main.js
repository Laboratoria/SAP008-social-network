import register from "./Templates/register.js";
import feed from "./Templates/feed.js";

const main = document.querySelector("#root")

const init = ()=>{
  main.innerHTML = "";
  switch(window.location.hash){
    case "#feed":
        main.appendChild(feed());
        break;
    default:
        main.appendChild(register());
   }
 }
window.addEventListener("load", () =>{
    window.addEventListener("hashchange", init);
    init();
});
