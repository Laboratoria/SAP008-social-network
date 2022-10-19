// erros do firebase //
export const errorsFirebase = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-display-name':
      return 'Nome inválido.';
    case 'auth/user-not-found':
      return 'usuário não localizado';
    case 'auth/email-already-in-use':
      return 'E-mail já cadastrado. Faça seu login.';
    case 'auth/invalid-email':
      return 'e-mail inválido. Ex: exemplo@exemplo.com.';
    case 'auth/expired-action-code':
      return 'Seu link expirou, Faça login novamente.';
    case 'auth/weak-password':
      return ' Senha é fraca, use letras e números.';
    default:
      return `Algo inexperado aconteceu. Por favor entre em contato com o suporte e informe o código ${errorCode}`;
  }
};

// validar nome do perfil, email e senha do cadastro//
export const validateFormRegister = (nameProfile, email, password) => {
  // const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6}/;
  if (nameProfile === '') {
    return 'Digite seu nome de perfil.';
  }
  if (email === '') {
    return 'Digite seu email';
  }
  if (password === '') {
    return 'Digite sua senha';
  }
  // if (password !== passwordRegEx) {
  //   return 'Sua senha deve ser de no minimo 6 digitos com letras e números.';
  //   return messageError;
  // }
  return '';
};

// validar email e senha do login//
export const validateFormlogin = (email, password) => {
  let messageError;
  // const emailRegEx = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6}/;

  if (email === '') {
    messageError = 'Digite seu email';
    return messageError;
  }
  if (password === '') {
    messageError = 'Digite sua senha';
    return messageError;
  }
  // if (password !== emailRegEx) {
  //   messageError = 'Sua senha deve ser de no minimo 6 digitos com letras e números.';
  //   return messageError;
  // }
  return '';
};
