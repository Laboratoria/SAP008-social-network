import { loginGoogle, userLogin, createUser } from '../src/firebase/auth.js';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../src/firebase/__mocks__/exports';

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
    const call = userLogin('email', 'password');
    expect(call).toHaveBeenCalledTimes(1);
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should call another function one time', async () => {
    await createUser('marjorye', 'marjorye@gmail.com', '1234');

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      'email',
      'password',
    );
  });
});
