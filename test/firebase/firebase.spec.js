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
  getDoc,
  getDocs,
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
  getPostById,
  likePost,
  getAllPosts,
} from '../../src/firebase/firebase.js';

jest.mock('../../src/firebase/export.js');

beforeEach(() => {
  jest.clearAllMocks();
});

// --- TESTE FUNÇÃO DE CADASTRO

describe('registerUser', () => {
  it('deve criar um usuário', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    registerUser('teste@teste.com', 'teste123');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

// --- TESTE FUNÇÃO DE LOGIN C/ O GOOGLE

describe('loginGoogle', () => {
  it('deve logar usuário com conta google', () => {
    signInWithRedirect.mockResolvedValue();
    loginGoogle();
    expect(signInWithRedirect).toHaveBeenCalledTimes(1);
  });
});

// --- TESTE FUNÇÃO DE LOGAR USUÁRIO C/ E-MAIL E SENHA

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

// --- TESTE FUNÇÃO DE CHECAR USUÁRIO LOGADO

describe('checkLoggedUser', () => {
  it('deve verificar se o usuário logado está autenticado', () => {
    checkLoggedUser();
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});

// --- TESTE FUNÇÃO DE RECADASTRAR SENHA

describe('resetPassword', () => {
  it('deve enviar o email para escolha de nova senha', () => {
    sendPasswordResetEmail.mockResolvedValue();
    resetPassword();
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
});

// --- TESTE FUNÇÃO DE CRIAR POST

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

// --- TESTE FUNÇÃO DE PRINTAR TODOS OS POSTS

describe('getAllPosts', () => {
  it('a função deve retornar um array com o post a ser printado na tela', () => {
    getDocs.mockResolvedValue([{
      name: {},
      author: {},
      artist: {},
      location: {},
      date: {},
      text: {},
      like: [],

    }]);
    getAllPosts('Clareana Ribeiro', '9iZRSCRMaAUSkS2w6uO1uqCrZrH3', 'Lamparina', 'Rio de Janeiro', '24/10/2022', 'Show de bola!', ['9iZRSCRMaAUSkS2w6uO1uqCrZrH3', 'AOtGBFDL1UP7JXPIwmkfHIXyWRz2']);
    expect(getDocs).toHaveBeenCalledTimes(1);
  });
});

// --- TESTE FUNÇÃO DE EDITAR POST

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

// --- TESTE FUNÇÃO DE DELETAR POST

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

// --- TESTE FUNÇÃO DE PEGAR O ID DO POST

describe('getPostById', () => {
  it('a função deve pegar o id de um post', async () => {
    const id = 'abc123';
    const ref = {};
    const post = {
      data: jest.fn(),
    };

    doc.mockReturnValueOnce(ref);
    getDoc.mockResolvedValueOnce(post);

    await getPostById(id);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', id);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getDoc).toHaveBeenCalledWith(ref);
    expect(post.data).toHaveBeenCalledTimes(1);
  });
});

// --- TESTE FUNÇÃO DE DAR LIKE NO POST

describe('likePost', () => {
  it('a função deve adicionar like no post', async () => {
    const mockPost = {
      likes: [],
    };

    const postId = 'id do post';
    const userId = 'id do usuario';

    getDoc.mockResolvedValue(mockPost);

    await likePost(mockPost, postId, userId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    // expect(updateDoc).toHaveBeenCalledWith(undefined, {
    //   likes: [userId],
    // });
  });

  it('a função deve remover o like do post', async () => {
    const postId = 'id do post';
    const userId = 'id do usuario';

    const mockPost = {
      likes: [userId],
    };

    getDoc.mockResolvedValue(mockPost);

    await likePost(mockPost, postId, userId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      likes: [],
    });
  });
});
