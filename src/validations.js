export function validateRegister(name, email, password, passwordRepeat) {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
    const emailValid = regexEmail.test(email);
  
    if (name === '') {
      return 'Preencha o campo de nome!';
    }
    if (email === '') {
      return 'Preencha o campo de e-mail!';
    }
    if (password === '') {
      return 'Digite sua senha!';
    }
    if (password !== passwordRepeat) {
      return 'As duas senhas não são iguais';
    }
    if (emailValid === false) {
      return 'Insira um e-mail válido (ex: nome@email.com)';
    }
    if (!name && !email && !password && !passwordRepeat) {
      return 'Por favor, preencha todos os campos!';
    }
    return '';
  }
  
  export function validateLogin(email, password) {
    if (email === '') {
      return 'Preencha o campo de e-mail!';
    }
    if (password === '') {
      return 'Preencha o campo de senha!';
    }
    return '';
  }