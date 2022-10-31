import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from '../../src/firebase/export.js';

import {
  registerUser,
  loginGoogle,
  userLogin,
  checkLoggedUser,
  resetPassword,
  createPost,
  editPost,
  deletePost,
} from '../../src/firebase/firebase.js';

jest.mock('../../src/firebase/export.js');

beforeEach(() => {
  jest.clearAllMocks();
});

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

    await createPost(artist, location, date, text);
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});

describe('editPost', () => {
  it('a função deve editar um post', async () => {
    const postId = 'abc123';
    const artistToBeEdited = 'artista a ser editada';
    const locationToBeEdited = 'local a ser editado';
    const dateToBeEdited = 'data a ser editada';
    const textTobeEdited = 'texto a ser editado';

    updateDoc.mockResolvedValue();

    await editPost(postId, artistToBeEdited, locationToBeEdited, dateToBeEdited, textTobeEdited);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      artist: artistToBeEdited,
      location: locationToBeEdited,
      date: dateToBeEdited,
      text: textTobeEdited,
    });
  });
});

describe('deletePost', () => {
  it('a função deve deletar um post a partir do id do usuário', async () => {
    const mockRefPost = {};
    const mockCollection = {
      posts: {
        postId: '1234',
      },
    };

    doc.mockReturnValueOnce(mockRefPost);
    deleteDoc.mockResolvedValueOnce(mockRefPost);

    await deletePost(mockCollection.posts.postId);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockCollection.posts.postId);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(mockRefPost);
  });
});
