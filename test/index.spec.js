import { loginWithGoogle, loginWithEmailAndPassword } from '../src/lib/index.js';
import { signInWithPopup, signInWithEmailAndPassword } from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('loginWithGooglen', () => {
  it('a função deve ser chamada uma vez', () => {
    loginWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('loginWithEmailAndPassword', () => {
  it('a função deve ser chamada uma vez', () => {
    const email = 'peba@demais.com';
    const password = 'pebademais';
    loginWithEmailAndPassword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});
