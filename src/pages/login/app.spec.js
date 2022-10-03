// eslint-disable-next-line import/no-unresolved
import pageLogin from '../pages/login/app.js';
// eslint-disable-next-line import/no-unresolved
import * as services from './authentication.js';

// eslint-disable-next-line no-import-assign
services.login = jest.fn(() => Promise.resolve(true));
// eslint-disable-next-line no-import-assign
services.googleLogin = jest.fn(() => Promise.resolve(true));

describe('Page login', () => {
  it('should be a function', () => {
    expect(typeof pageLogin).toBe('function');
  });
  it('should have a button with click event to sign in with email and password', () => {
    pageLogin().querySelector('#button-enter').dispatchEvent(new Event('click'));
    expect(services.login).toHaveBeenCalled();
    expect(services.login()).toBe(true);
  });
  it('should have a button with click event to sign in with google account', () => {
    pageLogin().querySelector('#button-gmail').dispatchEvent(new Event('click'));
    expect(services.googleLogin).toHaveBeenCalled();
    expect(services.googleLogin()).toBe(true);
  });
});
