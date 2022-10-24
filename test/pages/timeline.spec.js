/**
 * @jest-environment jsdom
 */
import { async } from 'regenerator-runtime';
import { logout } from '../../src/firebase/auth.js';
import timeline from '../../src/pages/timeline/timeline.js';
import { redirect } from '../../src/routes.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');
jest.mock('../../src/routes.js');

const awaitInAllPromisses = () => new Promise(process.nextTick);

describe('timeline', () => {
  const container = timeline();
  it('should be a function', () => {
    expect(typeof timeline).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const result = timeline();
    expect(result).toHaveProperty('innerHTML');
    expect(result.innerHTML.length).toBeGreaterThan(0);
    expect(typeof result.innerHTML).toBe('string');
  });

  it('test change of routes', async () => {
    const button = container.querySelector('#logout-btn');
    const event = new Event('click');
    button.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(redirect).toHaveBeenCalledWith('#login');
  });
});
