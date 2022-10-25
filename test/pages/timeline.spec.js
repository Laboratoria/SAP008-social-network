/**
 * @jest-environment jsdom
 */
import { logout } from '../../src/firebase/auth.js';
import timeline from '../../src/pages/timeline/timeline';
import { redirect } from '../../src/routes.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');
jest.mock('../../src/routes.js');

afterEach(() => {
  redirect.mockClear();

  //jest.clearAllMocks();
});

const awaitInAllPromisses = () => new Promise(process.nextTick);

describe('timeline', () => {
  it('should be a function', () => {
    expect(typeof timeline).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const container = timeline();
    expect(container).toHaveProperty('innerHTML');
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('test click input', async () => {
    const container = timeline();
    const btnLogout = container.querySelector('#logout-btn');
    btnLogout.click();
    
    await awaitInAllPromisses();
    expect(logout).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('#login');
    expect(redirect).toHaveBeenCalledTimes(1);
  });
});
