import {
  googleLogin,
  login,
  register,
  signOut,
  getUserUid,
  getDisplayName,
  getPhotoUser,
  firestore,
  createCollection,
} from '../src/lib/authentication.js';

beforeEach(() => jest.clearAllMocks());

describe('google Login', () => {
  it('is a function', () => {
    expect(typeof googleLogin).toBe('function');
  });

  it('should call Firebase signInWithPopup function', () => {
    googleLogin('provider');
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('login', () => {
  it('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('should call Firebase signInWithEmailAndPassword function', () => {
    const email = 'testevanellen@hotmail.com';
    const password = '123456';
    login(email, password);
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('register', () => {
  it('is a function', () => {
    expect(typeof register).toBe('function');
  });

  it('should call Firebase createUserWithEmailAndPassword( function', () => {
    const email = 'testevanellen@hotmail.com';
    const password = '123456';
    const username = 'vanellen';
    register(email, password, username);
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('signOut', () => {
  it('should be a function', () => {
    expect(typeof signOut).toBe('function');
  });

  it('should call Firebase signOut function', () => {
    signOut();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('UserUid', () => {
  it('is a function', () => {
    expect(typeof getUserUid).toBe('function');
  });

  it('should call Firebase getUserUid function', () => {
    getUserUid();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('UserName', () => {
  it('is a function', () => {
    expect(typeof getDisplayName).toBe('function');
  });

  it('should call Firebase getDisplayName function', () => {
    getDisplayName();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('UserPhoto', () => {
  it('is a function', () => {
    expect(typeof getPhotoUser).toBe('function');
  });

  it('should call Firebase getPhotoUser function', () => {
    getPhotoUser();
    expect(firebase.auth).toHaveBeenCalledTimes(1);
  });
});

describe('firestore', () => {
  it('is a function', () => {
    expect(typeof firestore).toBe('function');
  });
});

describe('createCollection', () => {
  it('should be a function', () => {
    expect(typeof createCollection).toBe('function');
  });

  it('should call Firebase createCollection function', () => {
    createCollection();
    expect(firebase.firestore).toHaveBeenCalledTimes(1);
  });
});
