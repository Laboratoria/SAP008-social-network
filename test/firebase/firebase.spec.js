import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from '../../src/firebase/export.js';

import {
  registerUser, loginGoogle, userLogin, checkLoggedUser,
} from '../../src/firebase/firebase.js';

jest.mock('../../src/firebase/export.js');

describe('registerUser', () => {
  it('deve criar um usuário', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    registerUser('teste@teste.com', 'teste123');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginGoogle', () => {
  it('deve logar usuário com conta google', () => {
    signInWithRedirect.mockResolvedValue();
    loginGoogle();
    expect(signInWithRedirect).toHaveBeenCalledTimes(1);
  });
});

describe('userLogin', () => {
  it('deve logar usuário com email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      senha: {},
    });
    userLogin('teste@teste.com', 'teste123');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('checkLoggedUser', () => {
  it('deve verificar se o usuário está autenticado', () => {
    checkLoggedUser();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});
