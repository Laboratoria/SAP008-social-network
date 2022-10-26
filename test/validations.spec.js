import {
    validationRegister,
    validationLogin,
  } from '../src/validations.js';

  describe('should be a function', () => {
    it('Validate is a function', () => {
      expect(typeof validationLogin).toBe('function');
      expect(typeof validationRegister).toBe('function');
    });
  });
  
