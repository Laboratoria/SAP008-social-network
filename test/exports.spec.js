/* eslint-disable max-len */

import {
  getUserUid, getDisplayName, getPhotoUser, likeFirebase, deletePost, updatePost, firestore, createCollection, createForm,
} from '../src/lib/exports.js';

beforeEach(() => jest.clearAllMocks());

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

describe('likeFirebase', () => {
  it('is a function', () => {
    expect(typeof likeFirebase).toBe('function');
  });

  it('should call Firebase likeFirebase function', () => {
    likeFirebase();
    expect(firebase.firestore).toHaveBeenCalledTimes(1);
  });
});

// it('should be like the publication, when the user clicks on the button.', () => {
//   expect(firebase.firestore).toHaveBeenCalled(1);
// //  expect(services.likeFirebase).toBe(true);
// });

describe('deletePost', () => {
  it('is a function', () => {
    expect(typeof deletePost).toBe('function');
  });

  it('should call Firebase deletePost function', () => {
    deletePost();
    expect(firebase.firestore).toHaveBeenCalledTimes(1);
  });
});

// it('should be delete the publication, when the user clicks on the button.', () => {
//   expect(firebase.firestore).toHaveBeenCalledTimes(1);
// //  expect(services.deletePost).toBe(true);
// });

describe('updatePost', () => {
  it('is a function', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('should call Firebase updatePost function', () => {
    updatePost();
    expect(firebase.firestore).toHaveBeenCalledTimes(1);
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

describe('createForm', () => {
  it('should be a function', () => {
    expect(typeof createForm).toBe('function');
  });

  it('should call Firebase createForm function', () => {
    createForm();
    expect(firebase.firestore).toHaveBeenCalledTimes(1);
  });
});
