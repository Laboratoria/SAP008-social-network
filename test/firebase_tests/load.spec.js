/**
 * @jest-environment jsdom
 */
import load from '../../src/pages/load/load.js';

jest.mock('../../src/lib/firebase.js');
jest.mock('../../src/lib/auth.js');

describe('load', () => {
  it('should be a function', () => {
    expect(typeof load).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const container = load();
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('test click input', () => {
    const container = load();
    const googleBtn = container.querySelector('#google-login');
    const event = new Event('click');
    googleBtn.dispatchEvent(event);
  });
});
