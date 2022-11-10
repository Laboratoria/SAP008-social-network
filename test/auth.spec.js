import {
  loginGoogle,
  userLogin,
  createUser,
} from '../src/firebase/auth.js';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../src/firebase/exports.js';

jest.mock('../src/firebase/exports.js');

describe('loginGoogle', () => {
  it('should be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('should been called once', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('userLogin', () => {
  it('should be a function', () => {
    expect(typeof userLogin).toBe('function');
  });
  it('should call another function one time', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      senha: {},
    });
    userLogin('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should call another function one time', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    createUser('name', 'email', 'password');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
