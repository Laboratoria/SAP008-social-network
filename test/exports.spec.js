/* eslint-disable max-len */

import {
  getUserUid, getDisplayName, getPhotoUser, likeFirebase, deletePost, updatePost, firestore, createCollection, createForm,
} from '../src/lib/exports.js';

describe('UserUid', () => {
  it('is a function', () => {
    expect(typeof getUserUid).toBe('function');
  });
});

describe('UserName', () => {
  it('is a function', () => {
    expect(typeof getDisplayName).toBe('function');
  });
});

describe('UserPhoto', () => {
  it('is a function', () => {
    expect(typeof getPhotoUser).toBe('function');
  });
});

// describe('updatePost', () => {
//   it('should be a function', () => {
//     expect(typeof updatePost).toBe('function');
//   });
// });

describe('likeFirebase', () => {
  it('is a function', () => {
    expect(typeof likeFirebase).toBe('function');
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
});

// it('should be delete the publication, when the user clicks on the button.', () => {
//   expect(firebase.firestore).toHaveBeenCalledTimes(1);
// //  expect(services.deletePost).toBe(true);
// });

describe('updatePost', () => {
  it('is a function', () => {
    expect(typeof updatePost).toBe('function');
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
});

describe('createForm', () => {
  it('should be a function', () => {
    expect(typeof createForm).toBe('function');
  });
});
