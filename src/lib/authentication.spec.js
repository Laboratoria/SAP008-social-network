/*
* @jest-environment jsdom
*/

// eslint-disable-next-line import/no-unresolved
import * as auth from './authentication.js';
import { login, googleLogin } from './authentication.js';

jest.mock('./authentication.js');

describe('google Login', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('Firebase signInWithPopup function', () => {
    // const auth = jest.spyOn(firebase, 'auth');
    googleLogin('provider');
    // firebase.auth();
    setTimeout(() => {
      expect(firebase.auth).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});

describe('loginEmailAndPassword', () => {
  it('deve logar com email e senha', () => {
    const email = 'eutesto@teste.com';
    const password = 'teste123';
    login(email, password);
    jest.setTimeout(() => {
      expect(auth.login).toHaveBeenCalledTimes(1);
      expect(auth.login).toHaveBeenCalledWith(undefined, email, password);
    }, 1000);
  });
});
