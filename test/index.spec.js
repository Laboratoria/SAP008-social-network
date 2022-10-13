import { signInWithGoogle, logInUser, logOutUser } from '../src/lib/auth.js';
import { signInWithPopup, signInWithEmailAndPassword, signOut } from '../src/lib/firebase.js';

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

describe('logInUser', () => {
  it('Deve ser uma função', () => {
    expect(typeof logInUser).toBe('function');
  });
  it('Deve chamar a função signInWithEmailAndPassword ao ser executado', () => {
    logInUser();
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('logOutUser', () => {
  it('Deve ser uma função', () => {
    expect(typeof logOutUser).toBe('function');
  });
  it('Deve chamar a função signOut ao ser executado', () => {
    logOutUser();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
