import { signInGoogle, createAccount } from '../src/lib/auth.js';
import { signInWithPopup, createUserWithEmailAndPassword } from '../src/lib/export.js';

jest.mock('../src/lib/export.js');

describe('signInGoogle', () => {
  it('a função deve ser chamada uma vez', () => {
    signInWithPopup.mockResolvedValue();
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('createAccount', () => {
  it('deve criar um usuário com email, senha e nome', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    createAccount('bella@gmail.com', '12345678');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});


