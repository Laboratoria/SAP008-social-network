import {
  loginGoogle,
  userLogin,
  createUser,
  // auth,
} from '../src/firebase/auth.js';

import { publishPost } from '../src/firebase/firestore.js';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  addDoc,
} from '../src/firebase/exports.js';

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
    userLogin('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('should call another function one time', () => {
    createUser('email', 'senha');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'email', 'password');
  });
});

describe('publishPost', () => {
  it('should create a post', async () => {
    const text = 'Olá';
    const subject = 'Depressão pós-parto';
    const publishDate = '31-10-2022';

    await publishPost(text, subject, publishDate);
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});
