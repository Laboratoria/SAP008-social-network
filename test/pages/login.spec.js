/**
 * @jest-environment jsdom
 */
import login from '../../src/pages/login/login.js';

jest.mock('../../src/firebase/exports.js');

describe('login', () => {
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const result = login();
    expect(result).toHaveProperty('innerHTML');
    expect(result.innerHTML.length).toBeGreaterThan(0);
    expect(typeof result.innerHTML).toBe('string');
  });
});
