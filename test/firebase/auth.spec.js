import {
  loginUser, loginGoogle, newUser, logout,
} from '../../src/firebase/auth.js';

import {
  signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, signOut,
} from '../../src/firebase/exports.js';

jest.mock('../../src/firebase/exports.js');

describe('loginUser', () => {
  it('should be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('should call another function one time', () => {
    loginUser('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});

describe('loginGoogle', () => {
  it('should be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('should call another function one time', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, {});
  });
});

describe('newUser', () => {
  it('should be a function', () => {
    expect(typeof newUser).toBe('function');
  });
  it('should call another function one time', () => {
    newUser('email', 'password');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});

describe('logout', () => {
  it('should be a function', () => {
    expect(typeof logout).toBe('function');
  });
  it('should call another function one time', () => {
    logout();
    expect(signOut).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledWith(undefined, {});
  });
});
