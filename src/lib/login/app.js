export default () => {
  const container = document.createElement("div")
  const template = ` 
   <div class="container-login">
    <div>
      <input type="email" name="email" id="input-email" placeholder="Email do usuário" required>
      <input type="password" name="password" id="input-password" placeholder="Senha" required>
      <button type="button" id="button-login" class="button">Entrar</button>
    </div>
   </div>
  
  `
  console.log(container)
  container.innerHTML = template;
  return container
}

