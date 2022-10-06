/**
 * @jest-environment jsdom
 */
import signup from '../../src/pages/signup/signup.js';

describe('signup', () => {

    it('should be a function', () => {
        expect(typeof signup).toBe('function');
    });

    it('should return a div with a valid innerHTML', () => {
        const result = signup();
        expect(result).toHaveProperty('innerHTML');
        expect(result.innerHTML.length).toBeGreaterThan(0);
        expect(typeof result.innerHTML).toBe('string');

    });

});