import { signInGoogle, createAccount, loginEmailPassword } from '../src/lib/auth.js';
import { getPost } from '../src/lib/firestore.js';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/lib/export.js';
import {getDocs, collection} from '../src/lib/export.js';

jest.mock('../src/lib/export.js');

describe('signInGoogle', () => {
  it('a função deve ser chamada uma vez', () => {
    signInWithPopup.mockResolvedValue();
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('createAccount', () => {
  it('deve criar um usuário com email, senha e nome', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    createAccount('bella@gmail.com', '12345678');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginEmailPassword', () => {
  it('deve logar um usuario utilizando email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      senha: {},
    });
    loginEmailPassword('bella@gmail.com', '12345678');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('getPost', () => {
  it('deve retornar um array com o post a ser printado na tela', () => {
    getDocs.mockResolvedValue([{
      author: {},
      id: {},
      name: {},
      texto: {} 
      }]);
    getPost('x4H2994HPjV9zm6cp7am58XTjci2', '0pRNd4MNFXm3QAI2TYeL', 'Tamyres melo', 'Parabéns, meninas. Achei incrível!');
    expect(getDocs).toHaveBeenCalledTimes(1);    
  });
});