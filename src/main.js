

const main = document.querySelector('#root');

function init (){
  window.addEventListener("hashchange", ()=>{
    console.log("hashchange ", location.hash)
  })

}

window.addEventListener("load", () => {
   init()
})