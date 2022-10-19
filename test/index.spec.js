import { exports } from '../src/firebase/__mocks__/exports.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof exports).toBe('function');
  });
});
