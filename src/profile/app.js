export default () => {
  const container = document.createElement('div');
  const template = `    <div class="container-profile">
  <h1>Em construção. 🚧 🏗️</h1>
 
  </div>
  
  <div class="wrapper"> </div>
  
  <footer>
    <div class="foot">
        <img src="./img/lab.png" alt="logo Laboratória">
        <div class="developers">
            <p> Developed by:</p> 
            <p>Ellen Cavalcante <spa>&</span> Vanessa Bueck</p>
        </div>
    </div>
  </footer>
  `;

  container.innerHTML = template;
  return container;
};
