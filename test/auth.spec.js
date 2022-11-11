import {
  signInWithGoogle,
  logInUser,
  logOutUser,
  createRegister,
  resetPassword,
  observerLogin,
} from '../src/lib/auth.js';

import {
  app,
} from '../src/lib/configuration.js';

import {
  getAuth,
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

describe('observerLogin', () => {
  it('Deve ser uma função', () => {
    expect(typeof observerLogin).toBe('function');
  });
  it('Deve chamar a função onAuthStateChanged ao ser executado', () => {
    observerLogin();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(2);
  });
});

describe('resetPassword', () => {
  it('Deve ser uma função', () => {
    expect(typeof resetPassword).toBe('function');
  });
  it('a função deve enviar um e-mail com link para redefinição de senha', () => {
    const email = 'wanderlust@gmail.com';
    const auth = getAuth(app);
    resetPassword(auth, email);
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
});
