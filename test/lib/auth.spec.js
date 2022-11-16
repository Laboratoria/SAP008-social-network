import {
  register,
  signIn,
  signInGoogle,
  resetPassword,
  logout,
} from '../../src/lib/auth.js';

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  mockAuth, // eslint-disable-line
  signInWithPopup,
  sendPasswordResetEmail,
} from '../../src/lib/export.js';
import { signOut } from '../../src/lib/__mocks__/export.js';

jest.mock('../../src/lib/export.js');

// teste da teste da função de cadastro, que chama a função de update profile //
describe('register', () => {
  it('a função deve ser chamada uma vez, e criar um cadastro de usuário com email, senha e nome do perfil', async () => {
    createUserWithEmailAndPassword.mockResolvedValueOnce();

    const email = 'teste1@teste.com';
    const password = '1234';
    const profileName = 'teste1';
    await register(email, password, profileName);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, email, password);
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(mockAuth.currentUser, {
      displayName: profileName,
    });
  });
});

// teste da teste da função de login com email e senha//
describe('signIn', () => {
  it('a função deve ser chamada uma vez, e logar com email e senha de um cadastro existente.', () => {
    const email = 'teste@teste.com';
    const password = 'teste123';

    signIn(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(mockAuth, email, password);
  });
});

// teste da teste da função de login com o google//
describe('signInGoogle', () => {
  it('a função deve ser chamada uma vez, e logar com email do google sem precisar fazer o cadastro.', () => {
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

// função de redefinição de senha //
describe('resetPassword', () => {
  it('a função deve ser chamada uma vez, com email e Id do usuário', () => {
    const email = 'teste@teste.com';

    resetPassword(email);
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
    expect(sendPasswordResetEmail).toHaveBeenCalledWith(mockAuth, email);
  });
});

// teste da função de deslogar //

describe('logout', () => {
  it('a função deve ser chamada uma vez, e deslogar.', () => {
    logout();
    expect(logout).toHaveBeenCalledTimes(1);
  });
});
