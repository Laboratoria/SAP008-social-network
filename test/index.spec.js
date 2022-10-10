import {
  loginWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword, deletePost, createPost,
} from '../src/lib/index.js';

import {
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  getAuth, updateProfile, getFirestore, deleteDoc, doc, addDoc,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('loginWithGooglen', () => {
  it('a função deve ser chamada uma vez', () => {
    loginWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('loginWithEmailAndPassword', () => {
  it('a função deve ser chamada uma vez', () => {
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
  it('a função deve ser chamada uma vez', async () => {
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

describe('deletePost', () => {
  it('a função deve deletar post de id abcdefghi', async () => {
    const mockPostCollection = {
      posts: {
        postId: 'abcdefghi',
      },
    };
    const mockDb = getFirestore.mockReturnValueOnce(mockPostCollection);

    const mockDocRef = doc(mockDb, 'posts', mockPostCollection.posts.postId);
    deleteDoc.mockResolvedValueOnce(mockDocRef);

    await deletePost(mockPostCollection.posts.postId);

    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(mockDb.posts);
  });
});

describe('createPost', () => {
  it('a função deve criar um post', async () => {
    const post = {
      text: 'oie galera',
      tag: 'musica',
    };
    const now = Date.now;
    Date.now = function () {
      return 1665433765409;
    };

    await createPost(post.text, post.tag);

    Date.now = now;

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: 'nome',
      author: '123',
      data: 1665433765409,
      tag: post.tag,
      text: post.text,
      like: [],
    });
  });
});
