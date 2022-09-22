export default() => {
    const container = document.createElement('div');
    
    const template = `
        <form>
            <label for="name">Nome:
                <input type="text" required>
            </label>
            <label for="email">Email:
                <input type="email" id="txtEmail" required>
            </label>
            <label for="password">Senha:
                <input type="password" id="txtPassword" minlength="8" required>
            </label>
            <input type="submit" value="CRIAR CONTA">
        </form>
    `;
    container.innerHTML = template;
    
    return container;    
}