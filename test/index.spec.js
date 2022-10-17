import { createUser, loginEmailPassword } from '../src/lib/index.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/lib/export.js';

jest.mock('../src/lib/export.js')

describe('loginEmailPassword', () => {
  it('deve logar um usuario utiulizando email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      senha: {},
    });
    loginEmailPassword('joao@gmail.com', '123456');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
