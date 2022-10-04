import {
  login, googleLogin, register, recover, signOut,
} from '../src/lib/authentication.js';
// import { pageRegister } from '../src/pages/register/app.js';

beforeEach(() => jest.clearAllMocks());
// const sendPasswordResetEmail = jest.fn(() => Promise.resolve());

describe('google Login', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('should call Firebase signInWithPopup function', () => {
    googleLogin('provider');
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('login', () => {
  it('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('should call Firebase signInWithEmailAndPassword function', () => {
    const email = 'testevanellen@hotmail.com';
    const password = '123456';
    login(email, password);
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('register', () => {
  it('is a function', () => {
    expect(typeof register).toBe('function');
  });

  it('should call Firebase createUserWithEmailAndPassword( function', () => {
    const email = 'testevanellen@hotmail.com';
    const password = '123456';
    const username = 'vanellen';
    register(email, password, username);
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('recover', () => {
  it('is a function', () => {
    expect(typeof recover).toBe('function');
  });

  it('should call Firebase sendPasswordResetEmail( function', () => {
    // const email = 'testevanellen@hotmail.com';
    recover();
    expect(firebase.auth).toHaveBeenCalled(1);
  });
});

describe('signOut', () => {
  it('should be a function', () => {
    expect(typeof signOut).toBe('function');
  });

  it('should call Firebase signOut function', () => {
    signOut();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});
