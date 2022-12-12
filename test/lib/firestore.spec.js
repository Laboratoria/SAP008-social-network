import {
  createPost,
  getAllPosts,
  postLike,
  postDislike,
  deletePost,
  editPost,
} from '../../src/lib/firestore.js';

import {
  addDoc,
  mockAuth, // eslint-disable-line
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  collection,
  doc,
} from '../../src/lib/export.js';

jest.mock('../../src/lib/export.js');

// teste da função de criar posts //
describe('createPost', () => {
  it('a função deve criar um post', async () => {
    const postText = {
      text: 'Inspire',
    };
    await createPost(postText.text);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      displayName: mockAuth.displayName,
      email: mockAuth.email,
      data: new Date().toLocaleDateString('pt-BR'),
      hour: new Date().toLocaleTimeString([], { timeStyle: 'short' }),
      post: postText.text,
      user: mockAuth.uid,
      like: [],
    });
    expect(collection).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
  });
});

// teste da função de printar posts //
describe('getAllPosts', () => {
  it('a função deve printar um post na tela', async () => {
    const posts = await getAllPosts();

    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(getDocs).toHaveBeenCalledWith(undefined);
    expect(posts).toHaveLength(1);
    expect(posts[0].id).toBe('abc123');
  });
});

// teste da função dar likes //
describe('postLike', () => {
  it('a função deve adicionar id do usuário no array de likes', async () => {
    const posts = {
      idPost: '123456',
      idUser: 'abc123',
    };
    await postLike(posts.idPost, posts.idUser);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      like: arrayUnion(posts.idUser),
    });
  });
});

// teste da função remover likes //
describe('postDislike', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('a função deve remover id do usuário no array de likes', async () => {
    const posts = {
      idPost: '123456',
      idUser: 'abc123',
    };
    await postDislike(posts.idPost, posts.idUser);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      like: arrayRemove(posts.idUser),
    });
  });
});

// teste da função deletar posts //
describe('deletePost', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('a função deve deletar um post recebendo o Id do post', async () => {
    const posts = {
      idPost: '123456',
    };
    await deletePost(posts.idPost);

    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(undefined);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', posts.idPost);
  });
});

// teste da função de editar posts //
describe('editPost', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('a função deve atualizar o valor do texto do post', async () => {
    const posts = {
      idPost: '123456',
      text: 'abc123',
    };
    await editPost(posts.idPost, posts.text);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', posts.idPost);
  });
});
