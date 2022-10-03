/*
* @jest-environment jsdom
*/
import homePage from '../src/pages/initialPage/app.js';
import { getUserUid, getDisplayName, getPhotoUser } from '../src/lib/exports.js';
// import { homePage } from '../pages/initialPage/app.js';

// eslint-disable-next-line no-import-assign
// services.likeFirebase = jest.fn();
// eslint-disable-next-line no-import-assign
// services.deletePost = jest.fn();

describe('homePage', () => {
  it('should be a function', () => {
    expect(typeof homePage).toBe('function');
  });
});

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
