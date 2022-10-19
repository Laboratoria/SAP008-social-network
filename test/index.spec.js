import {
  loginGoogle,
  userLogin,
//   createUser
} from '../src/firebase/auth.js';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
} from '../src/firebase/exports.js';

jest.mock('../src/firebase/exports.js');

describe('loginGoogle', () => {
  it('a função deve ser chamada uma vez', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});
describe('userLOgin', () => {
  it('função deve ser chamada uma vez', () => {
    const email = 'angelinajolie@hotmail.com';
    const password = '12345';
    userLogin(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
