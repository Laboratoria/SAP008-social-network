/* eslint-disable no-unused-vars */
import {
  // eslint-disable-next-line max-len
  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, collection, addDoc, getFirestore, signInWithEmailAndPassword, signOut, updateProfile, getDocs,
} from '../../src/lib/firebase.js';
import {
  // eslint-disable-next-line no-unused-vars
  newUser, googleAccess, create, loginUser, logoutUser, getPosts,
} from '../../src/lib/auth.js';

jest.mock('../../src/lib/firebase.js');

describe('newUser', () => {
  it('should creat a new account', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    newUser('email', 'password', 'name');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginUser', () => {
  it('should provide access', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      password: {},
    });
    loginUser('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});



