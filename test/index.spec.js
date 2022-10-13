import { signInWithGoogle } from '../src/lib/auth.js';
import { signInWithPopup } from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('signInWithGoogle', () => {
  it('Deve ser uma função', () => {
    expect(typeof signInWithGoogle).toBe('function');
  });
  it('Deve chamar a função signInWithPopup ao ser executado', () => {
    signInWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});
