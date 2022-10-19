export function registerValidation(inputName, inputEmail, inputPassword) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  const validateEmail = emailRegex.test(inputEmail);

  if (inputName === '') {
    return 'Você precisa preencher o campo de nome!';
  }
  if (inputEmail === '') {
    return 'Você precisa preencher o campo de e-mail!';
  }
  if (inputPassword === '') {
    return 'Você precisa criar uma senha!';
  }
  if (validateEmail === false) {
    return 'Insira um e-mail válido (ex: seunome@email.com)';
  }
  if (!inputName && !inputEmail && !inputPassword) {
    return 'Por favor, preencha todos os campos!';
  }
  return '';
}

export function loginValidation(inputEmail, inputPassword) {
  if (inputEmail === '') {
    return 'Você precisa preencher o campo de e-mail!';
  }
  if (inputPassword === '') {
    return 'Você precisa preencher o campo de senha!';
  }
  return '';
}
