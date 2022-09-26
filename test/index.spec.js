import { signInGoogle } from '../src/lib/auth.js';
import { signInWithPopup } from '../src/lib/export.js';

jest.mock('../src/lib/export.js');

describe('signInGoogle', () => {
  
  it('a função deve ser chamada uma vez', () => {
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});
