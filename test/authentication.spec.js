import { googleLogin, login } from '../src/lib/authentication.js';

describe('googleLogin', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('Firebase signInWithPopup function', () => {
    googleLogin('provider');
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('googleLogin', () => {
  it('should be a function', () => {
    expect(typeof googleLogin).toBe('function');
  });
});

describe('login', () => {
  const email = 'srtnelly@hotmail.com';
  const password = '20298168';
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });

  it('should call Firebase login function', () => {
    login(email, password);
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});