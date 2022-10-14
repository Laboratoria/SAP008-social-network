import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  addDoc,
} from '../../src/firebase/export.js';

import {
  registerUser,
  loginGoogle,
  userLogin,
  checkLoggedUser,
  resetPassword,
  createPost,
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
  it('deve verificar se o usuário logado está autenticado', () => {
    checkLoggedUser();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});

describe('resetPassword', () => {
  it('deve enviar o email para escolha de nova senha', () => {
    sendPasswordResetEmail.mockResolvedValue();
    resetPassword();
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
});

describe('createPost', () => {
  it('deve criar um post', async () => {
    addDoc.mockResolvedValue();
    const artist = 'Beyoncé';
    const location = 'São Paulo';
    const date = '30-08-2022';
    const text = 'SHOW';

    createPost(artist, location, date, text);
    await expect(addDoc).tohaveBeenCalled();
  });
});
