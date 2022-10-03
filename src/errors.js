export const showErrors = (error) => {
  const errors = [
    { code: 'auth/email-already-exists', message: 'Este e-mail já existe' },
    { code: 'auth/wrong-password', message: 'Verifique seus dados' },
    { code: 'auth/invalid-email', message: 'E-mail inválido' },
    { code: 'auth/user-not-found', message: 'Usuário não encontrado' },
    { code: 'auth/weak-password', message: 'Digite uma senha mais forte' },
    { code: 'auth/network-request-failed', message: 'Falha na conexão' },
    { code: 'auth/operation-not-allowed', message: 'Operação não permitida' },
  ];

  const results = errors.filter((err) => err.code.includes(error.code));
  const divErrors = document.querySelector('.login-error-div');
  divErrors.innerHTML = '';

  if (results.length !== 0) {
    const errorMessage = results[0].message;
    const printError = `<p class="authenticationError"> ${errorMessage} </p>`;
    divErrors.innerHTML = printError;
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');

    switch (true) {
      case results[0].code.includes('email'):
        inputEmail.classList.add('login-error-div');
        inputPassword.classList.remove('login-error-div');
        break;

      case results[0].code.includes('password'):
        inputPassword.classList.add('login-error-div');
        inputEmail.classList.add('login-error-div');
        break;

      default:
        inputPassword.classList.remove('login-error-div');
        inputEmail.classList.remove('login-error-div');
        break;
    }
  } else {
    divErrors.innerHTML = 'Oops! Ocorreu um erro. Tente novamente.';
  }
};
