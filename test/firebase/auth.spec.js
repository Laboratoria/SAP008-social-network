import { loginUser, loginGoogle, getErrorMessage } from '../../src/firebase/auth.js';
import { signInWithEmailAndPassword, signInWithPopup } from '../../src/firebase/exports.js';

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

// const codes = [
//   'auth/user-not-found',
//   'auth/email-already-in-use',
//   'auth/invalid-email',
//   'auth/wrong-password',
//   'auth/invalid-display-name',
//   'auth/invalid-email-verified',
//   'default',
// ];

// describe('getErrorMessage', () => {
//   it('should be a function', () => {
//     codes.forEach((codeValue) => {
//       const error = { code: codeValue };
//       const result = getErrorMessage(error);
//       expect(typeof result).toBe('string');
//     });
//   });
// });
