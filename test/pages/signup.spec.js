/**
 * @jest-environment jsdom
 */
import { newUser, loginGoogle } from '../../src/firebase/auth.js';
import signup from '../../src/pages/signup/signup.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');

describe('signup', () => {
  const container = signup();
  it('should be a function', () => {
    expect(typeof signup).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const result = signup();
    expect(result).toHaveProperty('innerHTML');
    expect(result.innerHTML.length).toBeGreaterThan(0);
    expect(typeof result.innerHTML).toBe('string');
  });

  it('test submit input', () => {
    const form = container.querySelector('.form-signup');
    const event = new Event('submit');
    form.dispatchEvent(event);
    expect(newUser).toHaveBeenCalledTimes(1);
    expect(window.location.hash).toBe('#login');
  });

  it('test click input', () => {
    const btnGoogle = container.querySelector('.btn-google-signup');
    const event = new Event('click');
    btnGoogle.dispatchEvent(event);
    expect(loginGoogle).toHaveBeenCalledTimes(1);
    expect(window.location.hash).toBe('#login');
  });
});
