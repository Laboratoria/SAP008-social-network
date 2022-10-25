export function errorMessages(error) {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Endereço de e-mail não é válido!';
    case 'auth/user-not-found':
      return 'Usuário não encontrado!';
    case 'auth/email-already-in-use':
      return 'Este email já está em uso!';
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
