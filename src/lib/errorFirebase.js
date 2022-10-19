function errorFire(error) {
  switch (error) {
    case 'auth/invalid-email':
      return 'Preencha o campo de e-mail e senha!';
    case 'auth/user-not-found':
      return 'Este e-mail não está cadastrado!';
    case 'auth/email-already-exists':
      return 'O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.';
    case 'auth/invalid-email-verified':
      return 'Insira um valor de e-mail válido. Ex:123@email.com';
    case 'auth/invalid-password':
      return 'Senha inválida! Precisa ser uma senha com pelo menos seis caracteres.';
    case 'auth/invalid-password-hash':
      return 'O hash da senha precisa ser um buffer de byte válido.';
    case 'auth/invalid-password-salt':
      return 'O "salt" da senha precisa ser um buffer de byte válido';
    case 'auth/popup-closed-by-user':
      return 'Usuário não completou o login!';
    default:
      return '';
  }
}

export { errorFire };
