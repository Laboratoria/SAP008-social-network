export function errorsFirebase(error) {
  switch (error) {
    case 'auth/invalid-email':
      return 'Ops, e-mail inserido não é válido!';
    case 'auth/weak-password':
      return 'Ops, a senha deve ter 6 ou mais caracteres!';
    case 'auth/invalid-password':
      return 'Senha incorreta.';
    case 'auth/email-already-in-use':
      return 'O e-mail inserido já possui cadastro, volte à página de login!';
    case 'auth/wrong-password':
      return 'O e-mail ou a senha não está correto!';
    case 'auth/user-not-found':
      return 'O e-mail não possui cadastro, cadastre-se!';
    default:
      return '';
  }
}

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
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  const emailValid = regexEmail.test(email);

  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (password === '') {
    return 'Digite sua senha!';
  }
  if (emailValid === false) {
    return 'Insira um e-mail válido (ex: nome@email.com)';
  }
  if (!email && !password) {
    return 'Por favor, preencha todos os campos!';
  }
  return '';
}
