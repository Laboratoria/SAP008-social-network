export function registerValidation(inputName, inputEmail, inputPassword) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  const validateEmail = emailRegex.test(inputEmail);

  if (inputName === '') {
    return {
      msg: 'Você precisa preencher o campo de nome!',
      src: 'name',
    }
  }
  if (inputEmail === '') {
    return {
      msg: 'Você precisa preencher o campo de e-mail!',
      src: 'email',
    }
  }
  if (inputPassword === '') {
    return {
      msg: 'Você precisa criar uma senha!',
      src: 'password',
    }
  }
  if (validateEmail === false) {
    return {
      msg: 'Insira um e-mail válido (ex: seunome@email.com)',
      src: 'email',
    }   
  }

  return null;
}

export function loginValidation(inputEmail, inputPassword) {
  return registerValidation('gabriela', inputEmail, inputPassword);
}

export function clearErrors() {
  document.querySelectorAll('.error-email, .error-password')
    .forEach( p => {
      p.innerHTML = '';
    });
  document.querySelectorAll('.input-email, .input-password')
    .forEach( p => {
      p.classList.remove('input-error');
    });
}