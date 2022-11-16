import {
  removePost,
  createPost,
  editPost,
  current,
} from '../src/lib/firestore.js';

import {
  deleteDoc,
  doc,
  addDoc,
  collection,
  updateDoc,
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
