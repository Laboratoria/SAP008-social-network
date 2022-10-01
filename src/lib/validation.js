export function handleFirebaseErrors(errorCode) {
  let errorMessage;
  switch (errorCode) {
    case 'auth/invalid-display-name':
      errorMessage = 'Nome inválido.';
      return errorMessage;
    case 'auth/user-not-found':
      errorMessage = 'E-mail não encontrado. Faça seu cadastro.';
      return errorMessage;
    case 'auth/email-already-in-use':
      errorMessage = 'Este e-mail já foi registrado.';
      return errorMessage;
    case 'auth/invalid-email':
      errorMessage = 'Endereço de e-mail inválido.';
      return errorMessage;
    case 'auth/too-many-requests':
      errorMessage = 'Muitas tentativas de login realizadas. Reset sua senha.';
      return errorMessage;
    case 'auth/weak-password':
      errorMessage = 'Sua senha deve conter, no mínimo, 6 dígitos.';
      return errorMessage;
    case 'auth/invalid-password':
      errorMessage = 'Senha inválida.';
      return errorMessage;
    case 'auth/wrong-password':
      errorMessage = 'Senha incorreta.';
      return errorMessage;
    default:
      return '';
  }
}

export function validateRegisterForm(name, email, password, confirmPassword) {
  let message;
  // const emailRegExpression = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (name === '') {
    message = 'Digite seu nome.';
    return message;
  }
  if (email === '') {
    message = 'Digite seu e-mail.';
    return message;
  }
  // if (email !== emailRegExpression) {
  //   message = 'Este e-mail é inválido.';
  //   return message;
  // }
  if (password === '') {
    message = 'Digite sua senha.';
    return message;
  }
  if (password.length < 6) {
    message = 'Sua senha deve conter, no mínimo, 6 dígitos.';
    return message;
  }
  if (confirmPassword === '') {
    message = 'Confirme sua senha.';
    return message;
  }
  if (confirmPassword !== password) {
    message = 'Senhas não combinam.';
    return message;
  }
  return '';
}

export function validateLoginForm(email, password) {
  let message;
  // const emailRegExpression = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (email === '') {
    message = 'Digite seu e-mail.';
    return message;
  }
  // if (email !== emailRegExpression) {
  //   message = 'Este e-mail é inválido.';
  //   return message;
  // }
  if (password === '') {
    message = 'Digite sua senha.';
    return message;
  }

  return '';
}
