/**
 * @jest-environment jsdom
 */
import { loginUser, loginGoogle } from '../../src/firebase/auth.js';
import login from '../../src/pages/login/login.js';
import { redirect } from '../../src/routes.js';

jest.mock('../../src/firebase/exports.js');
jest.mock('../../src/firebase/auth.js');
jest.mock('../../src/routes.js');

const awaitInAllPromisses = () => new Promise(process.nextTick);

describe('login', () => {
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });

  it('should return a div with a valid innerHTML', () => {
    const container = login();
    expect(container).toHaveProperty('innerHTML');
    expect(container.innerHTML.length).toBeGreaterThan(0);
    expect(typeof container.innerHTML).toBe('string');
  });

  it('test submit input', async () => {
    const container = login();
    const form = container.querySelector('#form');
    const inputEmail = container.querySelector('.input-email');
    const inputPassword = container.querySelector('.input-password');
    inputEmail.value = 'teste@teste.com';
    inputPassword.value = '123456';
    const event = new Event('submit');
    form.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(loginUser).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('#timeline');
    expect(redirect).toHaveBeenCalledTimes(1);
  });

  it('test submit failure loginUser', async () => {
    loginUser.mockRejectedValue({
      code: 'auth/user-not-found',
    })
    const container = login();
    const form = container.querySelector('#form');
    const inputEmail = container.querySelector('.input-email');
    const inputPassword = container.querySelector('.input-password');
    inputEmail.value = 'teste@teste.com';
    inputPassword.value = '123456';
    const event = new Event('submit');
    form.dispatchEvent(event);
    await awaitInAllPromisses();
    const errorMessage = container.querySelector('.error-message');
    expect(errorMessage.innerHTML).toBe('Ops! Usuário não encontrado!');
  });

  it('test submit error', async () => {
    const container = login();
    const form = container.querySelector('#form');
    const event = new Event('submit');
    form.dispatchEvent(event);
    await awaitInAllPromisses();
    const errors = container.querySelectorAll('.error-email, .error-password');
    let errorMessages = '';
    errors.forEach((error) => {
      errorMessages += error.innerHTML;
    })
    expect(errorMessages).toBe('Você precisa preencher o campo de e-mail!');
  });

  it('test click input', async () => {
    const container = login();
    const button = container.querySelector('.btn-google');
    const event = new Event('click');
    button.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(loginGoogle).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('#timeline');
  });

  it('test change of routes', async () => {
    const container = login();
    const button = container.querySelector('.btn-register');
    const event = new Event('click');
    button.dispatchEvent(event);
    await awaitInAllPromisses();
    expect(redirect).toHaveBeenCalledWith('#signup');
  });
});
