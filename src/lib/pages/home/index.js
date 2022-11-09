export default () => {
  const container = document.createElement('div');
  const template = `
       <div class="box">    
        <h2>login</h2>
        <form>
          <div class="inputBox">
            <input type= "text" name="name">
            <label for ="">Nome</label>
          </div>
          <div class="inputBox">
            <input type= "password" name="Password">
            <label for ="">senha</label>
          </div>
         <input type= "submit" value="Entrar">
        </form>
       </div>
       `;
  container.innerHTML = template;
  return container;
};
