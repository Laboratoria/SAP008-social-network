import {
    validationRegister,
    validationLogin,
    clearErrors,
  } from '../src/validations';

  describe('should be a function', () => {
    it('Validate is a function', () => {
      expect(typeof validationLogin).toBe('function');
      expect(typeof validationRegister).toBe('function');
      expect(typeof clearErrors).toBe('function');
    });
  });
  
