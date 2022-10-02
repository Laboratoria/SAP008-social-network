/*
* @jest-environment jsdom
*/
import homePage from '../pages/initialPage/app.js';
import * as services from './exports.js';
// import { homePage } from '../pages/initialPage/app.js';

// eslint-disable-next-line no-import-assign
services.likeFirebase = jest.fn();
// eslint-disable-next-line no-import-assign
services.deletePost = jest.fn();

describe('homePage', () => {
  it('should be a function', () => {
    expect(typeof homePage).toBe('function');
  });

  it('should be like the publication, when the user clicks on the button.', () => {
    jest.setTimeout(() => {
      expect(services.likeFirebase).toHaveBeenCalled();
      expect(services.likeFirebase).toBe(true);
    }, 1000);
  });

  it('should be delete the publication, when the user clicks on the button.', () => {
    jest.setTimeout(() => {
      expect(services.deletePost).toHaveBeenCalled();
      expect(services.deletePost).toBe(true);
    }, 1000);
  });
});
