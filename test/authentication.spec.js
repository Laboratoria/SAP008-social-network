import {
  login, googleLogin, register, recover, signOut,
} from '../src/lib/authentication.js';

// beforeEach(() => jest.clearAllMocks());

describe('google Login', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('should call Firebase signInWithPopup function', () => {
    // const auth = jest.spyOn(firebase, 'auth');
    googleLogin();
    // firebase.auth();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
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
    expect(firebase.auth).toHaveBeenCalledTimes(1);
    expect(firebase.auth).toHaveBeenCalledWith(undefined, email, password);
  });
});

describe('register', () => {
  it('is a function', () => {
    expect(typeof register).toBe('function');
  });

  it('should call Firebase createUserWithEmailAndPassword( function', () => {
    register();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('recover', () => {
  it('is a function', () => {
    expect(typeof recover).toBe('function');
  });

  it('should call Firebase sendPasswordResetEmail( function', () => {
    recover();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('signOut', () => {
  it('is a function', () => {
    expect(typeof signOut).toBe('function');
  });
});
