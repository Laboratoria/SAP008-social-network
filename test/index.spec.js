import { loginWithGoogle } from '../src/lib/index.js';

jest.mock('../src/lib/index.js');

describe('loginWithGooglen', () => {
  it('a função deve ser chamada uma vez', () => {
    expect(loginWithGoogle).toHaveBeenCalledTimes(1);
  });
});
