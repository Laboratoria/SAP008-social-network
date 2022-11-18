import {
  signInWithGoogle,
  logInUser,
  logOutUser,
  createRegister,
  observerLogin,
  resetPassword,
} from '../src/lib/auth.js';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

beforeEach(() => {
  jest.clearAllMocks();
});

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
    const email = 'wanderlust@email.com';
    const password = '123456';
    logInUser(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith({
      currentUser: {
        uid: '2XzH88YYd8MirsXiT7zG3UlYhZI3',
        displayName: 'maria',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu0oUhaqC88INbgCSrPJwkRC6ihmJW7084he3JMz=s96-c',
      },
    }, email, password);
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
    const email = 'wanderlust@email.com';
    const password = '123456';
    createRegister(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith({
      currentUser: {
        uid: '2XzH88YYd8MirsXiT7zG3UlYhZI3',
        displayName: 'maria',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu0oUhaqC88INbgCSrPJwkRC6ihmJW7084he3JMz=s96-c',
      },
    }, email, password);
  });
});

describe('observerLogin', () => {
  it('Deve ser uma função', () => {
    expect(typeof observerLogin).toBe('function');
  });
  it('Deve chamar a função onAuthStateChanged ao ser executado', () => {
    observerLogin();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});

describe('resetPassword', () => {
  it('Deve ser uma função', () => {
    expect(typeof resetPassword).toBe('function');
  });
  it('a função deve enviar um e-mail com link para redefinição de senha', () => {
    const email = 'wanderlust@email.com';
    resetPassword(email);
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
    expect(sendPasswordResetEmail).toHaveBeenCalledWith({
      currentUser: {
        uid: '2XzH88YYd8MirsXiT7zG3UlYhZI3',
        displayName: 'maria',
        photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu0oUhaqC88INbgCSrPJwkRC6ihmJW7084he3JMz=s96-c',
      },
    }, email);
  });
});
