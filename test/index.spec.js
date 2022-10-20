import {
  loginWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword,
  logoff,
} from '../src/lib/firebase-auth.js';

import {
  deletePost, createPost, updatePost, postById, like, getAllPosts,
} from '../src/lib/firebase-firestore.js';

import {
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  getAuth, updateProfile, deleteDoc, doc, addDoc, updateDoc,
  getDoc, getDocs, signOut,
} from '../src/lib/exports.js';

jest.mock('../src/lib/exports.js');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('loginWithGoogle', () => {
  it('a função deve permitir que o usuário faça login usando uma conta google', () => {
    loginWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('loginWithEmailAndPassword', () => {
  it('a função deve permitir que o usuário faça login usando email e senha já cadastrados', () => {
    const email = 'peba@demais.com';
    const password = 'pebademais';
    loginWithEmailAndPassword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith({
      currentUser: {
        uid: '123',
        displayName: 'nome',
      },
    }, email, password);
  });
});

describe('registerWithEmailAndPassword', () => {
  it('a função deve registrar o usuário por email e senha e atribuir um nome pra esse usuário', async () => {
    const mockGetAuth = {
      currentUser: {},
    };
    getAuth.mockReturnValueOnce(mockGetAuth);
    createUserWithEmailAndPassword.mockResolvedValueOnce();

    const email = 'peba@demais.com';
    const password = 'pebademais';
    const name = 'peba';
    await registerWithEmailAndPassword(name, email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockGetAuth, email, password);
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(mockGetAuth.currentUser, {
      displayName: name,
    });
  });
});

describe('logoff', () => {
  it('a função deve deslogar o usuário', async () => {
    logoff();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});

describe('deletePost', () => {
  it('a função deve deletar post de id abcdefghi', async () => {
    const mockRef = {};
    const mockPostCollection = {
      posts: {
        postId: 'abcdefghi',
      },
    };

    doc.mockReturnValueOnce(mockRef);
    deleteDoc.mockResolvedValueOnce(mockRef);

    await deletePost(mockPostCollection.posts.postId);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'post', mockPostCollection.posts.postId);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(mockRef);
  });
});

describe('createPost', () => {
  it('a função deve criar um post', async () => {
    const post = {
      text: 'oie galera',
      tag: 'musica',
    };
    const now = new Date().toLocaleDateString();

    await createPost(post.text, post.tag);

    Date.now = now;

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: 'nome',
      author: '123',
      data: now,
      tag: post.tag,
      text: post.text,
      like: [],
    });
  });
});

describe('updatePost', () => {
  it('a função deve atualizar um post', async () => {
    const post = {
      idpost: '455455',
      text: 'eai',
    };

    const newText = 'novo texto';

    await updatePost(post.idpost, newText);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      text: newText,
    });
  });
});

describe('postById', () => {
  it('a função deve pegar o id de um post', async () => {
    const id = 'abc123';
    const ref = {};
    const post = {
      data: jest.fn(),
    };

    doc.mockReturnValueOnce(ref);
    getDoc.mockResolvedValueOnce(post);

    await postById(id);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'post', id);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getDoc).toHaveBeenCalledWith(ref);
    expect(post.data).toHaveBeenCalledTimes(1);
  });
});

describe('like', () => {
  it('a função deve adicionar like no post', async () => {
    const post = {
      // eslint-disable-next-line object-shorthand, func-names
      data: function () {
        const likeArr = {
          like: [],
        };
        return likeArr;
      },
    };
    const postId = 'idPost';
    const idUser = 'id';

    getDoc.mockResolvedValueOnce(post);

    await like(postId, idUser);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      like: [idUser],
    });
  });

  it('a função deve remover like no post', async () => {
    const post = {
      // eslint-disable-next-line func-names, object-shorthand
      data: function () {
        const likeArr = {
          like: ['id'],
        };
        return likeArr;
      },
    };
    const postId = 'idPost';
    const idUser = 'id';

    getDoc.mockResolvedValueOnce(post);

    await like(postId, idUser);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      like: [],
    });
  });
});

describe('getAllPosts', () => {
  it('a função deve pegar todos os posts', async () => {
    const post = {};

    getDocs.mockResolvedValueOnce(post);

    await getAllPosts();

    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(getDocs).toHaveBeenCalledWith(undefined);
  });
});
