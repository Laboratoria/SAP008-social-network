/* eslint-disable import/no-unresolved */
import {
  createUser,
  signIn,
  logout,
} from '../../src/lib/auth.js';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '../../src/lib/exports.js';

jest.mock('../../src/lib/exports.js');

describe('function of Firebase should been called once', () => {
  it('login using email', () => {
    signIn();
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });

  it('new user using email', () => {
    createUser();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });

  it('logout', () => {
    logout();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
