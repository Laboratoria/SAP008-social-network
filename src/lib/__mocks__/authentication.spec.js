/*
* @jest-environment jsdom
*/

// import { pageLogin } from '../src/pages/login/app.js';
// import * as firebaseFunctions from '../src/lib/authentication.js';

import { googleLogin } from '../authentication.js';

jest.mock('../authentication.js');

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
