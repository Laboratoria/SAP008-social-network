
export default () => {
  const containerRegistration = document.createElement("div")
  const template = `
  <div class="container-registration">
    <div class="btnback">
      <button type="button" id="btn-back" onclick="window.location.href='/#login'">
        Voltar
      </button>
        <img id="one-logo" src="./imagens/image-2.png">
        <p>atualizado a main</p>
  
   </div>
  
  `
  containerRegistration.innerHTML = template;





  return containerRegistration

}