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
    case 'auth/too-many-requests':
      return 'Muitas tentativas de login realizadas. faça uma nova senha.';
    default:
      return `Algo inexperado aconteceu. Por favor entre em contato com o suporte e informe o código ${errorCode}`;
  }
};
