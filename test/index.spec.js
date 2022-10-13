// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from '../src/lib/__mocks__/firebase.js';
import { registerUser } from '../src/firebase/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('registerUser', () => {
  it('deve criar um usuário', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    registerUser('teste@teste.com', 'teste123');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
