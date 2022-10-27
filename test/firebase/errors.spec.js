import { getErrorMessage } from '../../src/firebase/errors.js';

const inputs = [
  ['auth/user-not-found', 'Ops! Usuário não encontrado!'],
  ['auth/email-already-in-use', 'Ops! O e-mail inserido já possui cadastro!'],
  ['auth/invalid-email', 'Ops! O endereço de e-mail não é válido!'],
  ['auth/wrong-password', 'Ops! Senha incorreta!'],
  ['auth/invalid-display-name', 'Ops! O nome do usuário é inválido.'],
  ['auth/weak-password', 'Ops! A senha deve ter 6 ou mais caracteres!'],
  ['Error-not-found!', 'Aconteceu um erro não identificado, por favor entre em contato com as desenvolvedoras e indique o código que aparecerá a seguir: Error-not-found!'],
];

describe('getErrorMessage', () => {
  it('should be a function', () => {
    inputs.forEach((codeValues) => {
      const error = { code: codeValues[0] };
      const result = getErrorMessage(error);
      expect(result).toBe(codeValues[1]);
    });
  });
});
