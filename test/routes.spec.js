/**
 * @jest-environment jsdom
 */
import init from '../src/routes';
jest.mock('../src/pages/login/login');
jest.mock('../src/pages/signup/signup');
jest.mock('../src/firebase/exports.js');

describe('init', () => {
  it('should be a object', () => {
    expect(typeof init).toBe('object');
  });

  it('should contain login', () => {
    expect(init).toHaveProperty('login')
    
  });

  it('should contain signup', () => {
    expect(init).toHaveProperty('signup')
  });

});

