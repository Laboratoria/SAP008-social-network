/*
* @jest-environment jsdom
*/

// import { pageLogin } from '../src/pages/login/app.js';
// import * as firebaseFunctions from '../src/lib/authentication.js';
import { googleLogin } from '../src/lib/authentication.js';

jest.mock('../src/lib/authentication.js');

describe('google Login', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('Firebase signInWithPopup function', () => {
    googleLogin('provider');
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});
