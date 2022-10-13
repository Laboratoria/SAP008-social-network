/**
 * @jest-environment jsdom
 */
import { loginUser, loginGoogle } from '../../src/firebase/auth.js';
import login from '../../src/pages/login/login.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');

describe('login', () => {
  const container = login();
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    expect(container).toHaveProperty('innerHTML');
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('test submit input', () => {
    const form = container.querySelector('#form');
    const event = new Event('submit');
    form.dispatchEvent(event);
    expect(loginUser).toHaveBeenCalledTimes(1);
    expect(window.location.hash).toBe('');
  });

  it('test click input', () => {
    const button = container.querySelector('.btn-google');
    const event = new Event('click');
    button.dispatchEvent(event);
    expect(loginGoogle).toHaveBeenCalledTimes(1);
    expect(window.location.hash).toBe('');
  });

  it('test change of routes', () => {
    const button = container.querySelector('.btn-register');
    const event = new Event('click');
    button.dispatchEvent(event);
    expect(window.location.hash).toBe('#signup');
  });
});
