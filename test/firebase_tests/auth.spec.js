/* eslint-disable no-unused-vars */
import {
  // eslint-disable-next-line max-len
  createUserWithEmailAndPassword, signInWithPopup, addDoc, signInWithEmailAndPassword, signOut, getDocs, collection, updateProfile,
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

describe('logoutUser', () => {
  it('should end the access session and log out', () => {
    signOut.mockResolvedValue({
      user: {},
    });
    logoutUser();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});

describe('create', () => {
  it('should creat a new post', () => {
    addDoc.mockResolvedValue();
    const restaurant = 'Café da Vila';
    const adress = 'R. Dr Arthur Martins, 243';
    const review = 'Atendimento nota 10!';
    create(restaurant, adress, review);
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledTimes(1);
  });
});

describe('googleAccess', () => {
  it('should provide access with google', () => {
    signInWithPopup.mockResolvedValue();
    googleAccess();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

// describe('getPosts', () => {
//   it('should get posts from dataBase', () => {
//     getDocs.mockResolvedValue();
//     getPosts();
//     expect(getDocs).toHaveBeenCalledTimes(1);
//     expect(collection).toHaveBeenCalledTimes(1);
//   });
// });
