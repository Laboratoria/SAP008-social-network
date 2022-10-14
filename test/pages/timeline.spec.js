import { logout } from '../../src/firebase/auth.js';
import timeline from '../../src/pages/timeline/timeline.js';

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

  it('test click input', () => {
    const btnLogout = container.querySelector('#logout-btn');
    const event = new Event('click');
    btnLogout.dispatchEvent(event);
    expect(logout).toHaveBeenCalledTimes(1);
    expect(window.location.hash).toBe('#login');
  });
});
