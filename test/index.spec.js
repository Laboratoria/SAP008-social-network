import { createUser, loginEmailPassword } from '../src/lib/index.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/lib/exports.js';

jest.mock('../src/lib/exports.js');

const email = 'joao@gmail.com';
const senha = '12345678';

describe('createUser', () => {
  it('deve criar um usuário com email, senha', () => {
    createUser(email, senha);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, senha);
  });
});

describe('loginEmailPassword', () => {
  it('deve logar um usuario utilizando email e senha', () => {
    loginEmailPassword(email, senha);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, senha);
  });
});
