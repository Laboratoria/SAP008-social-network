export default () => {
    const container = document.createElement('div'); 

    const template = `
        <h1> Login </h1>
        <a href= "#feed">entrar</a> <br>
        <a href= "#cadastre">cadastre</a> 
    `;
    container.innerHTML = template; 

    return container;

}