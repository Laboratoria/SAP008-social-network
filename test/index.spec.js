// importamos la funcion que vamos a testear
import { createUser } from '../src/lib/index.js';
import { createUserWithEmailAndPassword } from '../src/lib/exports.js';
import { mockResovedValue } from '../src/lib/__mocks__/exports.js';

jest.mock('../src/lib/exports.js');

describe('createUser', () => {
  it('testando cadastro com email e senha', () => {
    createUserWithEmailAndPassword.mockResovedValue({
      user: {},
    });
    createUser('teste@gmail.com', '12345678');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
