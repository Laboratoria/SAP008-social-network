export default () => {
    const container = document.createElement('div'); 

    const template = `
        <h1> Cadastre </h1>
        <a href= "#feed">entrar</a> 
        <a href= "#cadastre">cadastre</a> 
    `;
    container.innerHTML = template; 

    return container;

}