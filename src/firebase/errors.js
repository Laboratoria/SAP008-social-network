export function getErrorMessage(error) {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'Ops! Usuário não encontrado!';
    case 'auth/invalid-email':
      return 'Ops! O endereço de e-mail não é válido!';
    case 'auth/email-already-in-use':
      return 'Ops! O e-mail inserido já possui cadastro!';
    case 'auth/wrong-password':
      return 'Ops! Senha incorreta!';
    case 'auth/invalid-display-name':
      return 'Ops! O nome do usuário é inválido.';
    case 'auth/weak-password':
      return 'Ops! A senha deve ter 6 ou mais caracteres!';
    default:
      return `Aconteceu um erro não identificado, por favor entre em contato com as desenvolvedoras e indique o código que aparecerá a seguir: ${error.code}`;
  }
}
