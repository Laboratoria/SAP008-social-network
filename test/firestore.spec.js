/* eslint-disable spaced-comment */
/* eslint-disable max-len */
import {
  removePost,
  createPost,
  editPost,
  current,
  getPostById,
  getPosts,
  likePost,
} from '../src/lib/firestore.js';

import {
  deleteDoc,
  doc,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  getDocs,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('removePost', () => {
  it('Deve ser uma função', async () => {
    const post = {
      id: 'yjZQzEf1AmFgbXBYE5Vc',
    };
    await removePost(post.id);

    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(undefined);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', post.id);
  });
});

describe('editPost', () => {
  it('Deve ser uma função', async () => {
    const post = {
      id: 'yjZQzEf1AmFgbXBYE5Vc',
      text: 'Wanderlust',
    };
    await editPost(post.id, post.text);
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });
});

describe('createPost', () => {
  it('Deve ser uma função', async () => {
    const post = {
      text: 'Wanderlust',
    };
    const auth = current();
    await createPost(post.text);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      photo: auth.photoURL,
      name: auth.displayName,
      date: new Date().toLocaleDateString('pt-BR'),
      author: auth.uid,
      text: post.text,
      like: [],
    });

    expect(collection).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
  });
});

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

describe('getPosts', () => {
  it('a função deve retornar um array com o post a ser printado na tela', async () => {
    const post = {
      data: jest.fn(),
      id: 'abc123',
    };
    getDocs.mockResolvedValue([post]);
    const posts = await getPosts();
    expect(getDocs).toHaveBeenCalledTimes(1);
    expect(posts).toHaveLength(1);
    expect(posts[0].id).toEqual(post.id);
  });
});

describe('likePost', () => {
  it('a função deve adicionar like no post', async () => {
    const mockPost = {
      data: jest.fn(),
    };

    mockPost.data.mockResolvedValue({ like: [] });

    const postId = 'id do post';
    const userId = 'id do usuario';

    getDoc.mockResolvedValue(mockPost);

    await likePost(postId, userId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      like: [userId],
    });
  });

  it('a função deve remover o like do post', async () => {
    const postId = 'id do post';
    const userId = 'id do usuario';

    const mockPost = {
      data: jest.fn(),
    };

    mockPost.data.mockResolvedValue({ like: [userId] });

    getDoc.mockResolvedValue(mockPost);

    await likePost(postId, userId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      like: [],
    });
  });
});
