export function errorMessages(error) {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Esse endereço de e-mail não é válido!';
    case 'auth/user-not-found':
      return 'Usuário não encontrado!';
    case 'auth/email-already-in-use':
      return 'Este e-mail já está em uso!';
    case 'auth/weak-password':
      return 'A senha deve ter 6 ou mais caracteres!';
    case 'auth/invalid-display-name':
      return 'O nome do usuário é inválido.';
    case 'auth/wrong-password':
      return 'Senha incorreta!';
    default:
      return `Aconteceu um erro não identificado, entre em contato com as desenvolvedoras e informe o erro a seguir: ${error.code}`;
  }
}

export function validationLogin(email, password) {
  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (password === '') {
    return 'Preencha o campo de senha!';
  }
  return '';
}

export function validateRegister(name, email, password, confirmPassword, iAm, confirmBox) {
  if (name === '') {
    return 'Preencha seu nome!';
  }
  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (password === '') {
    return 'Escolha uma senha';
  }
  if (confirmPassword === '') {
    return 'Confirme sua senha';
  }
  if (password !== confirmPassword) {
    return 'As senhas não são compatíveis';
  }
  if (iAm === '') {
    return 'Escolha uma categoria';
  }
  if (!confirmBox.checked) {
    return 'Você não concorda com os termos';
  }
  return '';
}
