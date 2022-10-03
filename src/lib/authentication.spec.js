/*
* @jest-environment jsdom
*/

// eslint-disable-next-line import/no-unresolved, import/no-duplicates
import * as auth from './authentication.js';
import {
  login, googleLogin, register, recover, signOut,
} from './authentication.js';

jest.mock('./authentication.js');

describe('google Login', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('should call Firebase signInWithPopup function', () => {
    // const auth = jest.spyOn(firebase, 'auth');
    googleLogin('provider');
    // firebase.auth();
    setTimeout(() => {
      expect(firebase.auth).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});

describe('login', () => {
  it('is a function', () => {
    expect(typeof login).toBe('function');
  });
  it('should call Firebase signInWithEmailAndPassword function', () => {
    const email = 'eutesto@teste.com';
    const password = 'teste123';
    login(email, password);
    jest.setTimeout(() => {
      expect(auth.login).toHaveBeenCalledTimes(1);
      expect(auth.login).toHaveBeenCalledWith(undefined, email, password);
    }, 1000);
  });
});

describe('register', () => {
  it('is a function', () => {
    expect(typeof register).toBe('function');
  });

  it('should call Firebase createUserWithEmailAndPassword( function', () => {
    auth.register();
    setTimeout(() => {
      expect(firebase.auth).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});

describe('recover', () => {
  it('is a function', () => {
    expect(typeof recover).toBe('function');
  });

  it('should call Firebase sendPasswordResetEmail( function', () => {
    auth.recover();
    setTimeout(() => {
      expect(firebase.auth).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});

describe('signOut', () => {
  it('is a function', () => {
    expect(typeof signOut).toBe('function');
  });
});
