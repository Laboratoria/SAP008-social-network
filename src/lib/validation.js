//funcao de validar e-mail: se email está correto, não está vazio, segue padrão de email e a pessoa nao digitou qlqr coisa no campo

// export function validateEmail(email) {
//   const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (email !== '' && email.match(emailRegExpression)) {
//     return true;
//   }
//   return false;
// }

// melhorar a mensagem pro case de nome invalido

export function handleFirebaseErrors(errorCode) {
  let errorMessage;
  switch (errorCode) {
    case 'auth/user-not-found':
      errorMessage = 'E-mail não encontrado. Faça seu cadastro.';
      return errorMessage;
    case 'auth/invalid-display-name':
      errorMessage = 'Nome inválido.';
      return errorMessage;
    case 'auth/email-already-in-use':
      errorMessage = 'Este e-mail já foi registrado.';
      return errorMessage;
    case 'auth/invalid-email':
      errorMessage = 'Endereço de e-mail inválido.';
      return errorMessage;
    case 'auth/weak-password':
      errorMessage = 'Sua senha deve ter, pelo menos, 6 dígitos.';
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

// export function validatePasswords(password, confirmPassword){
//   if (password.length >= 6)
// }