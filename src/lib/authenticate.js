const validatePassword = (password) => {
  if (password === '') {
    return 'Digite sua senha';
  }
  if (password.length < 6) {
    return 'Sua senha deve ser de no minimo 6 digitos.';
  }
  return '';
};

export const validateEmail = (email) => {
  // const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  if (email === '') {
    return 'Digite seu e-mail';
  }
  // if (email === emailRegex) {
  //   return 'E-mail inválido. .';
  // }
  return '';
};

const validateName = (publish) => {
  if (publish === '') {
    return 'Digite seu nome de perfil';
  }
  return '';
};

export const validatePublish = (nameProfile) => {
  if (nameProfile === '') {
    return 'Escreva sua publicação.';
  }
  return '';
};

export const validateFormRegister = (nameProfile, email, password) => {
  const nameError = validateName(nameProfile);
  if (nameError) {
    return nameError;
  }
  const emailError = validateEmail(email);
  if (emailError) {
    return emailError;
  }
  const passwordError = validatePassword(password);
  if (passwordError) {
    return passwordError;
  }
  return '';
};

// validar email e senha do login//
export const validateFormlogin = (email, password) => {
  const emailError = validateEmail(email);
  if (emailError) {
    return emailError;
  }
  const passwordError = validatePassword(password);
  if (passwordError) {
    return passwordError;
  }
  return '';
};
