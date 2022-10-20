// validar nome do perfil, email e senha do cadastro//
export const validateFormRegister = (nameProfile, email, password) => {
  if (nameProfile === '' && email === '' && password === '') {
    return 'Digite seu nome de perfil, email e senha.';
  }
  if (nameProfile === '') {
    return 'Digite seu nome de perfil.';
  }
  if (email === '') {
    return 'Digite seu email';
  }
  if (password === '') {
    return 'Digite sua senha';
  }
  return '';
};

// validar email e senha do login//
export const validateFormlogin = (email, password) => {
  if (email === '' && password === '') {
    return 'Digite seu email e senha.';
  }
  if (email === '') {
    return 'Digite seu email';
  }
  if (password === '') {
    return 'Digite sua senha';
  }
  return '';
};

// validar senha //
// export const validateFieldPassword = (password) => {
//   if (password === '') {
//     return 'Digite sua senha';
//   }
//   if (password.length < 6) {
//     return 'Sua senha deve ser de no minimo 6 digitos.';
//   }
//   return 'Algo deu errado tente novamente.';
// };

// // validar email //
// export const validateFieldEmail = (email) => {
//   if (email === '') {
//     return 'Digite sue e-mail';
//   }
//   return 'Algo deu errado tente novamente.';
// };

// // validar campo de nome do perfil //
// export const validateFieldNameProfile = (nameProfile) => {
//   if (nameProfile === '') {
//     return 'Digite seu nome de perfil';
//   }
//   return 'Algo deu errado tente novamente.';
// };

// export const validate = (validateFieldPassword, validateFieldEmail, validateFieldNameProfile);
