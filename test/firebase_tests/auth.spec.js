/* eslint-disable no-unused-vars */
import {
// eslint-disable-next-line max-len
  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, collection, addDoc, getFirestore, signInWithEmailAndPassword, signOut, updateProfile, getDocs,
} from '../../src/lib/firebase.js';
import {
  // eslint-disable-next-line no-unused-vars
  newUser, googleAccess, create, loginUser, logoutUser, getPosts,
} from '../../src/lib/auth.js';

jest.mock('../../src/lib/__mocks__/exports.js');

describe('newUser', () => {
  it('should be a function', () => {
    expect(typeof newUser).toBe('function');
  });
  it('should call another function one time', () => {
    newUser('email', 'password', 'name');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(undefined, {});
  });
});
