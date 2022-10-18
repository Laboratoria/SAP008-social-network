import { createUser, loginEmailPassword } from '../src/lib/index.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/lib/exports.js';

jest.mock('../src/lib/exports.js');

describe('createUser', () => {
  it('deve criar um usuário com email, senha e nome', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    createUser('joao@gmail.com', '12345678');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginEmailPassword', () => {
  it('deve logar um usuario utiulizando email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      senha: {},
    });
    loginEmailPassword('joao@gmail.com', '12345678');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
