/**
 * @jest-environment jsdom
 */
import { googleAccess } from '../../src/lib/auth.js';
import load from '../../src/pages/load/load.js';

jest.mock('../../src/lib/firebase.js');

describe('load', () => {
  it('should be a function', () => {
    expect(typeof load).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const container = load();
    expect(container).toHaveProperty('innerHTML');
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('should provide access with google', () => {
    googleAccess();
    expect(googleAccess).toHaveBeenCalledTimes(1);
  });
});
