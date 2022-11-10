import {
  signInWithGoogle,
  logInUser,
  logOutUser,
  createRegister,
  resetPassword,
  statusUser,
} from '../src/lib/auth.js';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from '../src/lib/firebase.js';

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

describe('createRegister', () => {
  it('Deve ser uma função', () => {
    expect(typeof createRegister).toBe('function');
  });
  it('Deve chamar a função createUserWithEmailAndPassword ao ser executado', () => {
    createRegister();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('statusUser', () => {
  it('Deve ser uma função', () => {
    expect(typeof statusUser).toBe('function');
  });
  it('Deve chamar a função onAuthStateChanged ao ser executado', () => {
    statusUser();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(2);
  });
});

describe('resetPassword', () => {
  it('Deve ser uma função', () => {
    expect(typeof resetPassword).toBe('function');
  });
  it('Deve chamar a função sendPasswordResetEmail ao ser executado', () => {
    resetPassword();
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
});
