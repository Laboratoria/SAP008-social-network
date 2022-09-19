// aqui exportaras las funciones que necesites

export default () => {
  const container = document.createElement('div');
  const template = ´
   <h1>Login</h1>
   <input type="texto"></input>
   <input type="password"></input>
 ´;
 container.innerHtml = template;

 return container

}