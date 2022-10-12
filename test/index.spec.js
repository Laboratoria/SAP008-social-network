// importamos la funcion que vamos a testear
import { initWithGoogle } from '../src/firebase-services/auth.js';
import { signInWithPopup } from '../src/firebase-services/exports.js';

jest.mock('../src/firebase-services/exports.js');

describe('initWithGoogle', () => {
  it('a função deve possibilitar login com o Google', () => {
    initWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});
