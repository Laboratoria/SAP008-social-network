export default () => {
  const container = document.createElement('div');

  const template = `
      <section class="content">
         <form class="form">

         <div class="form-cx">
            <label for="email">Email</label><br>
            <input type="text" id="email" autocomplete="off" placeholder="cookie@cookie.com.br">
         </div>

         <div class="form-cx">
            <label for="password">Senha</label><br>
            <input type="password" id="password" autocomplete="off" placeholder="***********">
         </div>

         <div class="form-botaoentrar">
            <input type="submit" value="Entrar" class="submit">
         </div>
         
         <div class="linha-ou">
            <div class="linha" ></div>
            <p>ou</p>
            <div class="linha" ></div>
         </div>
         

         <div class="form-google">
            <a href="#" class="google" >
            <i class="fa-brands fa-google-plus-g"></i>Entrar com o Google
            </a>
         </div>

         <div class="form-cadastre">
            Não tem uma conta? <a href="#" class="cadastrar-se">Cadastre-se</a>
         </div>

         </form>
      </section>
   `;
  container.innerHTML = template;
  return container;
};
