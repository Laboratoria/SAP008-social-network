import { signInGoogle, createAccount, loginEmailPassword } from '../src/lib/auth.js';
import {getDocs} from '../src/lib/export.js';
import { createPost, getPost } from '../src/lib/firestore.js';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, addDoc, getAuth, updateProfile } from '../src/lib/export.js';

jest.mock('../src/lib/export.js');

describe('signInGoogle', () => {
  it('a função deve ser chamada uma vez', () => {
    signInWithPopup.mockResolvedValue();
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('createAccount', () => {
  it('a função deve ser chamada uma vez', async () => {
    const mockGetAuth = {
      currentUser: {},
    };

    getAuth.mockReturnValueOnce(mockGetAuth);
    createUserWithEmailAndPassword.mockResolvedValueOnce();

    const email = 'bella@gmail.com';
    const password = '12345678';
    const name = 'bella';
    await createAccount(name, email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockGetAuth, email, password);
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(mockGetAuth.currentUser, {
      displayName: name,
    });
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(mockGetAuth.currentUser, {
      displayName: name,
    });
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

describe('createPost', () => {
  it('deve criar um post', async () => {
    const mockGetAuth = {
      currentUser: {
        displayName: 'nome',
        uid: '123',
      }
    };

    getAuth.mockReturnValueOnce(mockGetAuth);
    addDoc.mockResolvedValue();

    const texto = 'texto do meu post'
    await createPost(texto);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: mockGetAuth.currentUser.displayName,
      author: mockGetAuth.currentUser.uid,
      texto,
    });
  });
});

describe('logout', () => {
  it('deve deslogar o usuario', () => {
    signOut.mockResolvedValue({
      user: {},
    });
    logout();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
